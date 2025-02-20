#!/usr/bin/env bash
set -euo pipefail
# set -x

# The purpose of this script is to create a 'CI workspace' with all the app
# required dependencies plus the associated 'development' repository.
# App dependencies mean things like kalisio/kdk source code, kalisio/feathers-s3 and such ..
# These are described in 'kli' files and are found in the associated 'development'
# repository under the $KLI_BASE folder.

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")
WORKSPACE_DIR="$(dirname "$ROOT_DIR")"

. "$THIS_DIR/kash/kash.sh"

## Parse options
##

WORKSPACE_BRANCH=
WORKSPACE_TAG=
WORKSPACE_NODE=20
WORKSPACE_KIND=klifull
OPT_LIST="n:k:"
if [ "$CI" != true ]; then
    OPT_LIST="b:n:t:k:"
fi

while getopts "$OPT_LIST" OPT; do
    case $OPT in
        b) # defines branch
            WORKSPACE_BRANCH=$OPTARG;;
        n) # defines node version
            WORKSPACE_NODE=$OPTARG;;
        t) # defines venv tag
            WORKSPACE_TAG=$OPTARG;;
        k) # workspace kind (nokli kli klifull)
            WORKSPACE_KIND=$OPTARG;;
        *)
        ;;
    esac
done

begin_group "Setting up workspace ..."

if [ "$CI" != true ]; then
    # This code is only executed when we're running on developer machines.
    # In this case, we expect an additional argument to define where to create the 'CI workspace'
    shift $((OPTIND-1))
    WORKSPACE_DIR="$1"

    # unset KALISIO_DEVELOPMENT_DIR because we want kli to clone everyhting in $WORKSPACE_DIR
    unset KALISIO_DEVELOPMENT_DIR
    # TODO: you may need to undef more variables like this if you have client specific environment variables
    # Here we don't since it's all kalisio code
fi

# This is a function defined in the kash repository. Here is the associated documentation:
## Setup a suitable workspace for the given app.
## Expected args:
## 1. the app repository dir
## 2. the workspace dir
## 3. the url to use to clone the corresponding 'development' repository
## 4. the node version to use to setup the workspace (matter because we run kli using this node version)
## 5. the directory in which we'll find kli files relative to the 'development' repository root directory (that's $KLI_BASE)
## 6. the kind of kli we want to run (nokli, kli or klifull => cf. run_kli())
## 7. (only in dev mode) the ref (ie. tag or branch) to checkout in the workspace
#
# TODO: you'll need to adjust parameters 3 and 5. ie. associated 'development' repository URL + $KLI_BASE value
setup_app_workspace \
    "$ROOT_DIR" \
    "$WORKSPACE_DIR" \
    "$KALISIO_GITHUB_URL/kalisio/development.git" \
    "$WORKSPACE_NODE" \
    "workspaces/apps" \
    "$WORKSPACE_KIND" \
    "${WORKSPACE_TAG:-$WORKSPACE_BRANCH}"

end_group "Setting up workspace ..."
