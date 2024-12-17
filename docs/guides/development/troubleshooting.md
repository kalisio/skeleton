# Troubleshoot your app

## Linking errors

Due to the modular approach of the KDK we need to [link](https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af) the modules and the applications according to the dependency tree when developing.

::: tip
Due to some [changes](http://codetunnel.io/npm-5-changes-to-npm-link/) in the way `npm` manages linked modules we prefer to use [Yarn](https://yarnpkg.com) as a package manager.
:::

It appeared that when performing a new install, adding a new dependency, or launching two installs concurrently, some of the links can break, or some dependencies not being set to the right version, which raising different errors. As a workaround you will either need to:
* clear the yarn cache `yarn cache clean` (or `yarn cache clean module` to be more specific)
* restore the broken links using commands like e.g. `yarn link @kalisio/kdk` in the broken applications
* reinstall all dependencies using `rm -fr node_modules && yarn install` or `yarn install --check-files` in broken modules/applications, and then restore the links as above

::: tip
Errors are often visible when launching the app server but might come from an underlying module. For instance the `TypeError: (0 , commons_1.createDebug) is not a function at Object.<anonymous> ` error often appears in modules, probably due to the fact incompatible versions of the same library (e.g. Feathers) are installed. So try first to reinstall and relink the modules before your app, and if you'd like to see if a module is fine running its tests is usually a good indicator: `yarn mocha`.
:::

## Profiling

In your local development environment you can usually use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution). However, it is trickier to perform profiling on remote production environments, here are the steps.

1. Override the command used to launch your application to activate the [Node.js V8 profiler](https://nodejs.org/en/docs/guides/simple-profiling/):

```
node --prof app.js
```

2. Once you have run your tests and recorded the profile, a file named like this `isolate-pid-1-v8.log` should appear in your working directory. Process it using the following commands to get either:
* a "human-readable" file (txt)

  ```
  node --prof-process .\isolate-0x49489f0-1-v8.log > prof-processed.txt
  ```
* a "machine-readable" file (json)

  ```
  node --prof-process --preprocess -j .\isolate-0x49489f0-1-v8.log > prof-processed.json
  ```

3. In order to identify bottlenecks in your app you can either:
* Analyze the human-readable file
* Install [flamebearer](https://github.com/mapbox/flamebearer) and generate the flame graph

```
npm install -g flamebearer
flamebearer prof-processed.json
```

* Use the [online flame graph generator](https://mapbox.github.io/flamebearer/) and drag'n'drop your profile
