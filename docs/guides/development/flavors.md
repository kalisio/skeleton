# Managing application flavors

We support three `flavors`:
* **prod**, which is intended to be used on production environments
* **test**, which is intended to be used on testing/preproduction environments
* **dev** which is intended to be the flavor where development happens and may be used on a staging/dev environment

It's the CI system that will determine the flavor of a build job. The rule is simple:
* if the build was triggered from a `tag` matching `prod-*` then flavor is **prod**
* if it was triggered from a `branch` matching `test|test-*` then flavor is **test**
* if it was triggered from anything else (`branch` or `tag`), the flavor is **dev**

When you start developping an app and only have a `main` branch, every build job will be associated with **dev** flavor.
At some point you'll create a branch named `test-v1.0` to support the life of the `1.0` version. Build jobs triggered from this branch will be associated with the **test** flavor. At a later point you'll create tags off this `test-v1.0` branch to freeze the code used for the various `1.0.x` patch releases. Those tags will be associated with the **prod** flavor.

![Flavors](../../.vitepress/public/images/flavors.svg)

The flavor is used in various places:
* as a suffix of the built app container, like in `kalisio/kano:1.0.0-test`
* as the value of the `NODE_APP_INSTANCE` environment variable in the app container
* as a part of the file path where the CI will search for the app associated `kli` file.

> [!IMPORTANT]
> The CI system only checks for patterns in branch or tag names to determine the flavor. The version information is always fetched from the app `package.json`.

## Builtin rules to search for the `kli` file

Considering:
* `$APP_NAME` as the name of the app being built (fetched from `package.json`)
* `$APP_VERSION` as the version of the app being built (fetched from `package.json`)
* `$FLAVOR` as the flavor of the current build
* `$CUSTOM` as a custom suffix extracted from the name of the built branch or tag (can be empty)

our [kash](https://github.com/kalisio/kash) helper scripts will try to find one of the following files, by order of importance:
* `$APP_NAME/$FLAVOR/$APP_NAME-$APP_VERSION-$CUSTOM.js` (if `$CUSTOM` is not empty), eg: `kano/dev/kano-1.0.0-client1.js`
* `$APP_NAME/$FLAVOR/$APP_NAME-$APP_VERSION.js`, eg: `kano/dev/kano-1.0.0.js`
* `$APP_NAME/$FLAVOR/$APP_NAME.js`, eg: `kano/dev/kano.js`

The `kli` files are generally located in the app associated `development` repository.

## The custom suffix

Our CI system supports using custom suffixes on tag and branch names, like `prod-v1.0.0-client1`, `-client1` is the suffix here. This custom suffix can be used by CI scripts to generate suffixed container image names for example. You can have a look at the [kano build_app script](https://github.com/kalisio/kano/blob/master/scripts/build_app.sh) for a concrete example. When using such suffix, the CI system will also search for a `kli` file with the custom suffix appended.
