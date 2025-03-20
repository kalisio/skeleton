# Automating tests

We use the CI system to automate running tests we defined in the [Testing your app](./test) section (API and client) .

## API (or backend) tests

These tests are directly run by the `run_tests` **CI job** (defined in the [CI workflow](https://github.com/kalisio/skeleton/blob/master/.github/workflows/main.yaml)). They run on the CI system after each push to the repo. The basically run the tests you defined in the [API tests](./test#api) section.

![Run tests steps](./../../.vitepress/public/images/run-tests-steps.svg)

There's also an `additional_tests` **CI job** whose purpose is to run the same set of API tests, but using different combinations of `Node.js` and `MongoDB` versions.

## Client (or frontend) tests

These tests are not directly run by the CI system. Instead we build a container image using the CI system. That container image embeds everything needed to run client test (most likely [Puppeteer](https://pptr.dev/) along with the actual tests and some reference screenshots). That container is then run *on the infrastructure hosting the app*, once a day (but it can also be run locally on a developper workstation).

The **CI job** responsible for building the container image is `build_e2e_tests`. It uses the `e2e-tests.Dockerfile` as recipe for the image, and embeds the `run_e2e_tests.sh` **CI script**, which is used as container command.

The `run_e2e_tests.sh` script is used in the container image to run the frontend tests. It's purpose is to:
* run the frontend tests (as defined in the [Client tests](./tests#client) section)
* upload all test artefacts on an S3 storage
* generate a report from those tests (can be through a slack notification or as a Markdown file in a git repository)
