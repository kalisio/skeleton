# KDK CLI

The KDK CLI (a.k.a. `kli`) is a multiplexer for usual git/yarn commands used when developing KDK-based applications. It allows to easily clone, install, link, unlink, switch branch on all modules and application using a single command.

## Installation

Production version:
```bash
yarn install -g @kalisio/kli
```

Or to use the master branch locally:
```bash
git clone https://github.com/kalisio/kli.git
cd kli
yarn install
yarn link
```

## Workspaces

The CLI relies on a workspace file defining the dependency tree between your KDK-based application and modules like this:
```js
module.exports = {
  kdk: {
    dependencies: [],
    branch: 'master'
  },
  kApp: {
    application: true,
    dependencies: ['@kalisio/kdk'],
    branch: 'master'
  }
}

```

Each key is a git repository, i.e. a module, monorepo or application, with the following available properties:
* `dependencies`: list of dependent (KDK-)based modules if any
* `branch`: branch the module should use
* `application`: indicates if this is the main KDK-based application module, i.e. it has an `api` subfolder
* `path`: relative path to the repository on the local disk
* `organization`: GitHub/GitLab organization the repository belongs to
* `output`: the name of the repository folder on the local disk
* `url`: the root URL to the remote git repositories (if not given will be https://github.com)

::: tip
The `branch` option can also target a git tag, typically fo production releases.
:::

## Usage

All operations will take effect in the current working directory so that subdirectories named according to modules will be created or expected to already exist.

```bash
// Will clone all repositories
kli workspace.js --clone
// Will install dependencies in all modules and application
kli workspace.js --install
// Will perform link between required modules and application
kli workspace.js --link
// Will perform unlink between required modules and application
kli workspace.js --unlink
// Will perform branch switching on all modules and application having the given target branch
kli workspace.js --branch test
// Will perform branch switching on all modules and application using the specified branch in workspace
kli workspace.js --switch
```

::: tip
This CLI assumes git and yarn are already globally installed on your system.
:::

::: warning
By default all Git operations target the `kalisio` organization, you can change this for the whole workspace using the `organization` CLI option or on specific modules only using the `organization` option in the workspace file. Like this you include modules coming from a separate organization but used as dependencies of the project owned by the main organization of the project.
:::

::: warning
All operations are performed relative to the CWD by default, you can change this for specific modules only using the `path` option in the workspace file providing a module path relative to the CWD. Like this you can for instance have modules coming from a separate organization isolated into their own directory.
:::

Sample workspaces for our [application template](https://github.com/kalisio/skeleton), [Kano](https://github.com/kalisio/kano) and [Kalisio Crisis](https://github.com/kalisio/crisis) are provided in the [kli repository](https://github.com/kalisio/kli).

Full CLI usage is the following:
```bash
Usage: index <workspacefile> [options]

Options:
  -V, --version                      output the version number
  -o, --organization [organization]  GitHub organization or GitLab group owing the project (default: "kalisio")
  -u, --url [url]                    Git server base URL (default: "https://github.com")
  -d, --debug                        Verbose output for debugging
  -c, --clone [branch]               Clone git repositories (with optional target branch) for all modules
  -p, --pull                         Pull git repositories for all modules
  -i, --install                      Perform yarn install for all modules
  -l, --link                         Perform yarn link for all modules
  -ul, --unlink                      Perform yarn unlink for all modules
  -b, --branch <branch>              Switch to target git branch in all modules where it does exist
  -s, --switch                       Switch all modules to the default git branch specified in workspace (if any)
  -m, --modules <modules>            Comma separated list of modules from the workspace to apply command on
  -h, --help                         output usage information
```

## Working on multiple versions

In order to be able to switch easily between different versions of NodeJS you usually use a version manager like [n](https://github.com/tj/n)/[nvm](https://github.com/creationix/nvm) under Linux/Mac or [nvm](https://github.com/coreybutler/nvm-windows) under Windows. However, as links are global to a Yarn installation it can be tricky to switch between different versions of the same repository using different NodeJS versions, e.g. KDK on master branch running under NodeJS v12 and KDK on another branch running under NodeJS v16. 

Although you can have a single local KDK repository and switch between the branches we do not recommand it. Indeed, each time you will switch you will also have to reinstall all the dependencies for the new NodeJS version, which can be cumbersome and has proven to be error-prone for package managers. Moreover, the branch names between the different repositories in a complex architecture might not be consistent. Last but not least, sometimes the repositories themselves might change their names or location between different versions.

In a nutshell, we recommand creating a different workspace for your application and clone each repository in a different folder for each version. This way it is far more easier to switch from one version to another, before switching to a new version you simply need to unlink the previous version workspace:
```
// We are currently using NodeJS v12
cd nodejs12
kli workspace-nodejs12.js --link
...
// Start working with NodeJS v16
kli workspace-nodejs12.js --unlink
nvm use 16.0.0
cd nodejs16
kli workspace-nodejs16.js --link
```
