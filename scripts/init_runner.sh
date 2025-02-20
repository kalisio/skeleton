#!/usr/bin/env bash
set -euo pipefail
# set -x

# The purpose of this script is to initialize the CI runner on which the CI job will run.
# This is where we install packages with required tools, node version, mongodb ...
# It's only used on CI runner, not on local development machines

# First script argument: CI job name. It is used to build the name of the function to call:
# if $JOB_ID is 'build_app', the script will call an 'init_github_build_app' function.
JOB_ID=$1

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")

. "$THIS_DIR/kash/kash.sh"

### Github Actions

# TODO: you may need to add or remove functions here to match the CI jobs you define

init_github_run_tests() {
    install_reqs age sops nvm node20 mongo7 cc_test_reporter
}

init_github_build_app() {
    install_reqs age sops nvm node20
}

init_github_build_docs() {
    install_reqs age sops nvm node18
}

init_github_additional_tests() {
    install_reqs age sops nvm node20 node22 mongo7
}

# begin_group is a function to group logs into a logical unit in the CI log output.
# It must be matched with a corresponding end_group
begin_group "Init $CI_ID for $JOB_ID"

# Call the init function for the current job
init_"${CI_ID}_${JOB_ID}"

end_group "Init $CI_ID for $JOB_ID"
