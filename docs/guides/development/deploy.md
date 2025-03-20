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

We tried to extensively comment our *CI scripts* to include relevant information in case you'd like to customize them.

## Deployment flavors

Our CI system supports artefact **flavors**. We currently support three different flavors:
* **prod** is what you get when building off a tag matching `prod-*`, it's intended for production environments.
* **test** is what you get when building off a branch matching `test|test-*`, it's intended for testing/preprod environments.
* **dev** is what you get when building off anything else (tag or branch).

The flavor in app CI scripts is obtained using the `init_app_infos` helper and then calling `get_app_flavor`. These are all defined in [kash](https://github.com/kalisio/kash).

The flavor is often used to build the container tag. In the skeleton `build_app.sh` script we build the image container using the following:
```bash
IMAGE_TAG="$VERSION-$FLAVOR-node$NODE_VER-$DEBIAN_VER"
```
It's also built into the container image using the `NODE_APP_INSTANCE` environment variable and can be used in the app config files to tailor configuration based on the flavor. 
