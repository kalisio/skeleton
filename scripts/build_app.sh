#!/usr/bin/env bash
set -euo pipefail
# set -x

# This script is used to build the app container and to eventually push the produced image on a remote
# container repository.
# It must be run in a proper 'CI workspace' to find everything it expects (cf setup_workspace.sh script).
# By default it only build the image container, it won't push it, you need '-p' for that

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")
WORKSPACE_DIR="$(dirname "$ROOT_DIR")"

. "$THIS_DIR/kash/kash.sh"

## Parse options
##

DEFAULT_NODE_VER=20
DEFAULT_DEBIAN_VER=bookworm
NODE_VER=$DEFAULT_NODE_VER
DEBIAN_VER=$DEFAULT_DEBIAN_VER
PUBLISH=false
CI_STEP_NAME="Build app"
while getopts "d:n:pr:" option; do
    case $option in
        d) # defines debian version
            DEBIAN_VER=$OPTARG
            ;;
        n) # defines node version
            NODE_VER=$OPTARG
             ;;
        p) # define to push the image container to the remote container repository
            PUBLISH=true
            ;;
        r) # report outcome to slack
            CI_STEP_NAME=$OPTARG
            load_env_files "$WORKSPACE_DIR/development/common/SLACK_WEBHOOK_APPS.enc.env"
            trap 'slack_ci_report "$ROOT_DIR" "$CI_STEP_NAME" "$?" "$SLACK_WEBHOOK_APPS"' EXIT
            ;;
        *)
            ;;
    esac
done

## Init workspace
##

# This uses the 'name' field in the app package.json, which must be in lowercase.
# TODO: you may need to adjust the second parameter to point it to the $KLI_BASE
init_app_infos "$ROOT_DIR" "$WORKSPACE_DIR/development/workspaces/apps"

APP=$(get_app_name)
VERSION=$(get_app_version)
FLAVOR=$(get_app_flavor)

echo "About to build $APP v$VERSION-$FLAVOR ..."

# This loads credentials for the target container repository
# TODO: you may adjust these files to use the ones in your associated 'development' repository
load_env_files "$WORKSPACE_DIR/development/common/kalisio_dockerhub.enc.env"
load_value_files "$WORKSPACE_DIR/development/common/KALISIO_DOCKERHUB_PASSWORD.enc.value"

## Build container
##

# kli file is used in container to install, link
KLI_FILE=$(get_app_kli_file)
cp "$KLI_FILE" "$WORKSPACE_DIR/kli.js"

echo "Will use kli file $KLI_FILE to install and link modules ..."

# TODO: you may change the path for the container image, here it'll be pushed in a 'kalisio' group
IMAGE_NAME="$KALISIO_DOCKERHUB_URL/kalisio/$APP"
IMAGE_TAG="$VERSION-$FLAVOR-node$NODE_VER-$DEBIAN_VER"

begin_group "Building container $IMAGE_NAME:$IMAGE_TAG ..."

# TODO: the environment variables to use here may not be the same
docker login --username "$KALISIO_DOCKERHUB_USERNAME" --password-stdin "$KALISIO_DOCKERHUB_URL" < "$KALISIO_DOCKERHUB_PASSWORD"
# DOCKER_BUILDKIT is here to be able to use Dockerfile specific dockerginore (app.Dockerfile.dockerignore)
# TODO: you may need more build-arg to 'docker build'
DOCKER_BUILDKIT=1 docker build \
    --build-arg APP="$APP" \
    --build-arg FLAVOR="$FLAVOR" \
    --build-arg BUILD_NUMBER="$(get_git_commit_short_sha "$ROOT_DIR")" \
    --build-arg NODE_VERSION="$NODE_VER" \
    --build-arg DEBIAN_VERSION="$DEBIAN_VER" \
    -f app.Dockerfile \
    -t "$IMAGE_NAME:$IMAGE_TAG" \
    "$WORKSPACE_DIR"
docker tag "$IMAGE_NAME:$IMAGE_TAG" "$IMAGE_NAME:$FLAVOR"

if [ "$PUBLISH" = true ]; then
    docker push "$IMAGE_NAME:$IMAGE_TAG"
    if [ "$NODE_VER" = "$DEFAULT_NODE_VER" ] && [ "$DEBIAN_VER" = "$DEFAULT_DEBIAN_VER" ]; then
        docker tag "$IMAGE_NAME:$IMAGE_TAG" "$IMAGE_NAME:$VERSION-$FLAVOR"
        docker push "$IMAGE_NAME:$VERSION-$FLAVOR"
        docker tag "$IMAGE_NAME:$IMAGE_TAG" "$IMAGE_NAME:$FLAVOR"
        docker push "$IMAGE_NAME:$FLAVOR"
    fi
fi

# TODO: the environment variable to use here may not be the same
docker logout "$KALISIO_DOCKERHUB_URL"

end_group "Building container $IMAGE_NAME:$IMAGE_TAG ..."
