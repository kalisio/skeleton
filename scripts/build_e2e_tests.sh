#!/usr/bin/env bash
set -euo pipefail
# set -x

# This script is used to build the end to end tests container and to eventually push the produced image on a remote
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

PUBLISH=false
CI_STEP_NAME="Build e2e tests"
while getopts "pr:" option; do
    case $option in
        p) # define to publish container to registry
            PUBLISH=true
            ;;
        r) # report outcome to slack
            load_env_files "$WORKSPACE_DIR/development/common/SLACK_WEBHOOK_APPS.enc.env"
            CI_STEP_NAME=$OPTARG
            trap 'slack_ci_report "$ROOT_DIR" "$CI_STEP_NAME" "$?" "$SLACK_WEBHOOK_APPS"' EXIT
            ;;
        *)
            ;;
    esac
done

## Build e2e tests
##

# This uses the 'name' field in the app package.json, which must be in lowercase.
# TODO: you may need to adjust the second parameter to point it to the $KLI_BASE
init_app_infos "$ROOT_DIR" "$WORKSPACE_DIR/development/workspace/apps"

APP=$(get_app_name)
VERSION=$(get_app_version)
FLAVOR=$(get_app_flavor)

# This loads credentials for the target container repository
# TODO: you may adjust these files to use the ones in your associated 'development' repository
load_env_files "$WORKSPACE_DIR/development/common/kalisio_harbor.enc.env"
load_value_files "$WORKSPACE_DIR/development/common/KALISIO_HARBOR_PASSWORD.enc.value"

# TODO: you may change the path for the container image, here it'll be pushed in a 'kalisio' group
IMAGE_NAME="kalisio/$APP-e2e-tests"
IMAGE_TAG="$VERSION-$FLAVOR"
# TODO: you may change the subdomain on which the app to be tested is hosted
SUBDOMAIN="dev.kalisio.xyz"

case "$FLAVOR" in
     "prod")
         SUBDOMAIN="kalisio.com"
         ;;
     "test")
         SUBDOMAIN="test.kalisio.xyz"
         ;;
     *)
         ;;
esac

# TODO: the environment variables to use here may not be the same (container registry credentials)
build_e2e_tests \
    "$ROOT_DIR" "$SUBDOMAIN" "$PUBLISH" \
    "$KALISIO_HARBOR_URL" "$KALISIO_HARBOR_USERNAME" "$KALISIO_HARBOR_PASSWORD" \
    "$IMAGE_NAME" "$IMAGE_TAG"
