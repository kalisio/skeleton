#!/usr/bin/env bash
set -euo pipefail
# set -x

# This script is used to build the docs and push them on github pages.
# It must be run in a proper 'CI workspace' to find everything it expects (cf setup_workspace.sh script).

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")
WORKSPACE_DIR="$(dirname "$ROOT_DIR")"

. "$THIS_DIR/kash/kash.sh"

## Parse options
##

PUBLISH=false
CI_STEP_NAME="Build docs"
while getopts "pr:" OPT; do
    case $OPT in
        p) # defines mongo version
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

## Build docs
##

# TODO: you'll need to adjust the repository name where the gh-pages branch
# will be pushed
build_docs "$ROOT_DIR" "kalisio/skeleton" "$PUBLISH"
