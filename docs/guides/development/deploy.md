# Deploy your app

App deployment requires multiple steps, generally involving:
1. creating a **container image** for your app, bundling your code and it's dependencies
2. pushing that container image on a **container repository** (private or public), like [dockerhub](https://hub.docker.com/)
3. when using [kubernetes](https://kubernetes.io), creating a **recipe** to deploy your app on a cluster, we use [Helm charts](https://helm.sh/docs/topics/charts/) for this.
4. updating the project managing the configuration of the cluster to deploy your app (by including the Helm chart you created at step 3)

Steps 1 and 2 are generally covered by the **CI scripts** in the app repository. When you push updates to the remote repository, the **CI system** kicks in and performs **CI jobs**. In the `skeleton` repository, the CI workflow is defined in the [.github/workflows/main.yaml](https://github.com/kalisio/skeleton/blob/master/.github/workflows/main.yaml) file. This is GitHub specific and defines jobs that are run when **commits** or **tags** are pushed. If you take a look at the file, you'll see that each job runs `bash` scripts located in the [scripts](https://github.com/kalisio/skeleton/tree/master/scripts) folder. This is because we like to keep our CI scripts **CI system independent**. In fact, you can even run them locally.

The CI system can be used for more than just app deployment, it can also be used to [run atomated tests](https://github.com/kalisio/skeleton/blob/master/scripts/run_tests.sh), to [build the documentation](https://github.com/kalisio/skeleton/blob/master/scripts/build_docs.sh) and publish it ... but for now we'll focus on steps 1 and 2.
 
The following schema illustrates step 1 and 2. In the `skeleton` repository, the `build_app` job in the [CI workflow file](https://github.com/kalisio/skeleton/blob/master/.github/workflows/main.yaml) is responsible for this.

![Build app CI](./../../.vitepress/public/images/build-app-ci.svg)
 
## CI scripts dependencies

The CI scripts we use rely on some external dependencies:
* the [kash](https://github.com/kalisio/kash) repository, it usually is a submodule in the `scripts` directory. Make sure you add it as a submodule using the **public `https`** URL (without personnal token), ie. `cd scripts && git submodule add https://github.com/kalisio/kash.git`. This is where we share useful bash code used in CI scenarios.
* a `development` repository, often shared among multiples repositories part of a higher level project made of multiple repositories. The [kalisio/development](https://github.com/kalisio/development) repository is an exemple and is the one used by `skeleton` for it's CI. This repo contains useful utilities for local development, encrypted credentials to allow the CI system to push on private container repositories and [kli](https://github.com/kalisio/kli) files used during some CI steps.
 
## Build app job

If we focus on the `build_app` **CI job** (defined in the [CI workflow](https://github.com/kalisio/skeleton/blob/master/.github/workflows/main.yaml)), we'll see it's made of 4 steps:

1. checkout a fresh copy of the code in some isolated workspace
```yaml
      - name: Checkout repo
        uses: actions/checkout@v4
        with:
          submodules: true # we use a submodule for kash
```

2. CI runner initialization
```yaml
      - name: Init runner
        run: bash ./scripts/init_runner.sh ${{ github.job }}
```
This calls the `init_runner.sh` script with the name of the job. It's purpose it to install required tools or packages for the current job (ie proper node version, mongodb, sops, ...).

3. CI workspace setup
```yaml
      - name: Setup workspace
        env:
          KALISIO_GITHUB_URL: ${{ secrets.KALISIO_GITHUB_URL }}
        run: bash ./scripts/setup_workspace.sh -k kli
```
The `setup_workspace.sh` script purpose is to create a proper **workspace** for the CI to run, ie. make sure the app dependencies have been cloned along with the `development` utility repository associated to the project.

4. build the app container image and push it
```yaml
      - name: Build app
        env:
          SOPS_AGE_KEY: ${{ secrets.SOPS_AGE_KEY }}
        run: bash ./scripts/build_app.sh -p -r ${{ github.job }} -n ${{ matrix.node }} -d ${{ matrix.debian }}
```
The `build_app.sh` script runs in the CI **workspace**, build the container image and push it to the target repository. It takes multiple arguments to remain versatile (`-p` to do the push, `-n` to specify the node version we use, ...)

![Build app steps](./../../.vitepress/public/images/build-app-steps.svg)

## Updating the CI scripts for your needs

The CI scripts are fairly generic, and if you create a new app based on `skeleton`, here are the key points to get the scripts working for your app:
* give your app a proper `name` in the `package.json` file in the repository. This name **must be lowercase**.
* add a `kli` file in the associated `development` repository. This file must be located in `$APP_NAME/$FLAVOR/$APP_NAME.js` (all in **lowercase**) somewhere in the `development` repo. That somewhere will be refered to as the `$KLI_BASE`. Other `kli` files may already be in this `$KLI_BASE` folder, you can use them as a base.
* make sure the `development` repository contains encrypted credentials for the target container repository. We usually store these in `development/common`.

You may now `grep TODO scripts/*.sh` and review all the places where you need to update the scripts.

## Deployment flavors

CI/CD comes al well in three different flavors, as defined by the value of the `FLAVOR`/`NODE_APP_INSTANCE` environment variables:
* **dev**: in order to deploy current development/alpha version, linked to the `master` branch of your code
* **test**: in order to deploy current staging/beta version, usually linked to the `test` branch of your code, identified by matching the following regular expression pattern `^test-*|-test$`
* **prod**: in order to deploy current production version, usually linked to specific `tags` on the `test` branch of your code by matching the following regular expression pattern `^prod-v[0-9]+\.[0-9]+\.[0-9]+`

The Docker image artifacts use the prerelease SemVer notation for tags to identify which flavor has been used to produce it —  `1.0.0-dev` for alpha version, `1.0.0-test` for beta version or `1.0.0-prod` for production. There is also a shortcut for the latest available version of each flavor: `dev`, `test` and `prod`.

::: tip
In the CI/CD process the `FLAVOR`/`NODE_APP_INSTANCE` environment variable is automatically set based on the branch/tag you are pushing. During local development these variables are usually not defined.
:::

Starting from the following base application setup:
* a root domain, defined by the value of the `DOMAIN` environment variable like `kalisio.xyz`
* a version number, defined by the value of the `VERSION` environment variable like `1.3.0` and automatically extracted from your *package.json* file
* a name, defined in the `APP` environment variable like `kApp`

Each flavor is then attached to a different target infrastructure, subdomain and version tag:
* **dev**: `SUBDOMAIN=dev.$DOMAIN`, `VERSION_TAG=$VERSION-dev`
* **test**: `SUBDOMAIN=test.$DOMAIN`, `VERSION_TAG=$VERSION-test`
* **prod**: `SUBDOMAIN=$DOMAIN`, `VERSION_TAG=$VERSION-prod`

The subdomain is usually used to build a fully-qualified domain name for the application based on its name, i.e. `$APP.$SUBDOMAIN`. The version tag defines the name of the created Docker images as `$APP:$VERSION_TAG`.

## Deployment pipeline

The main purpose of the continuous integration and deployment (CI/CD) pipeline is to create/build application artifacts (Docker images for the web application and mobile application bundles) and deploy it in production-like environments in order to test/run it. We rely on [Travis CI](https://travis-ci.org) for continuous integration and delivery, as such you need to create the CI/CD pipeline in Travis CI by syncing your GitHub repository.

You can read this [article](https://medium.com/better-programming/why-we-stopped-using-so-called-best-practices-in-our-ci-cd-process-2ff09811f633) on Medium to get an overview of our global CI/CD pipeline, which is illustrated in the following schema:

![Global deployment pipeline](./../../.vitepress/public/images/cd-pipeline.svg)

The different operations performed by each stages are the following:
* **APP**: executes the *travis.app.sh* script to
  * creates the Docker images for the application and testing
  * run backend and frontend tests on the target infrastructure
  * deploy the web application on the target infrastructure
* **DOC**: executes the *travis.doc.sh* script to deploy documentation on github pages

::: tip
You can skip any of this stage by adding `[skip stage]` to your commit message, e.g. `[skip app]` to skip the App build
:::

In addition, the *travis.env.sh* script automatically generates a temporary environment file, based on the secret variables defined in the Travis repository settings or coming from a dedicated private repository (see details hereafter), which is used to [configure the application](./configure.md). The following schema summarizes the different scripts used by the CI/CD:

![Travis scripts](./../../.vitepress/public/images/cd-pipeline-travis.svg)


## Deployment workspace

Each build stage of the CI/CD pipeline first setup the "workspace" required to correctly build the application, i.e. environment variables, application and module source code, configuration files, etc. The following schema summarizes the different steps performed to setup the workspace in the *travis.env.sh* script:

![Travis scripts](./../../.vitepress/public/images/cd-pipeline-env.svg)

In order to simplify and unify as much as possible secrets management we use a private GitHub repository as a secret store for:
* environment variables through env files
  * **.env** for application configuration
  * **.travis.env** for CI/CD configuration
* configuration files required either by the application or the CI/CD (e.g. mobile application certificates, ssh key to connect to hosting infrastructures, etc.)

Each workspace includes a **common** folder to store shared secrets between all flavor, then a folder dedicated to secrets specific to each flavor as depicted in the following diagram:

![KDK workspace](./../../.vitepress/public/images/kdk-workspace.png)

## Web application deployment

The following schema summarizes the different steps performed to deploy the web application:

![Travis scripts](./../../.vitepress/public/images/cd-pipeline-app.svg)

