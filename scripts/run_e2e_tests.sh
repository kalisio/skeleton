#!/usr/bin/env bash
set -uo pipefail
# set -x

# This script is not directly run by the CI system. Instead it is embedded in the end to end test
# container and used as the container command.
# It requires the app name to be the first argument

APP=$1

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")

. "$THIS_DIR/kash/kash.sh"

# TODO: depending on where you want your end to end tests report to be published, you'll need to adjust here

# This is to publish the report as a slack channel message
# We expect the following to be defined as environment variables:
# - S3_BUCKET
# - RCLONE_CONF
# - SLACK_WEBHOOK
run_and_publish_e2e_tests_to_slack \
    "$ROOT_DIR" "$APP" \
    "$S3_BUCKET" "$RCLONE_CONF" \
    "$SLACK_WEBHOOK"

# This is to publish as a markdown report in a git repository
# We expect the following to be defined as environment variables:
# - S3_BUCKET
# - RCLONE_CONF
# - TARGET_GIT_REPO_URL
run_and_publish_e2e_tests_to_git_repo \
    "$ROOT_DIR" "$APP" \
    "$S3_BUCKET" "$RCLONE_CONF" \
    "$TARGET_GIT_REPO_URL" "reports"
