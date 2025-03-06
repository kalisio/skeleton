import{_ as o,c as t,o as a,au as i}from"./chunks/framework.DtUFc-jG.js";const s="/skeleton/assets/flavors.CIj3cf5t.svg",u=JSON.parse('{"title":"Managing application flavors","description":"","frontmatter":{},"headers":[],"relativePath":"guides/development/flavors.md","filePath":"guides/development/flavors.md"}'),r={name:"guides/development/flavors.md"};function l(n,e,c,d,h,f){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="managing-application-flavors" tabindex="-1">Managing application flavors <a class="header-anchor" href="#managing-application-flavors" aria-label="Permalink to &quot;Managing application flavors&quot;">​</a></h1><p>We support three <code>flavors</code>:</p><ul><li><strong>prod</strong>, which is intended to be used on production environments</li><li><strong>test</strong>, which is intended to be used on testing/preproduction environments</li><li><strong>dev</strong> which is intended to be the flavor where development happens and may be used on a staging/dev environment</li></ul><p>It&#39;s the CI system that will determine the flavor of a build job. The rule is simple:</p><ul><li>if the build was triggered from a <code>tag</code> matching <code>prod-*</code> then flavor is <strong>prod</strong></li><li>if it was triggered from a <code>branch</code> matching <code>test|test-*</code> then flavor is <strong>test</strong></li><li>if it was triggered from anything else (<code>branch</code> or <code>tag</code>), the flavor is <strong>dev</strong></li></ul><p>When you start developping an app and only have a <code>main</code> branch, every build job will be associated with <strong>dev</strong> flavor. At some point you&#39;ll create a branch named <code>test-v1.0</code> to support the life of the <code>1.0</code> version. Build jobs triggered from this branch will be associated with the <strong>test</strong> flavor. At a later point you&#39;ll create tags off this <code>test-v1.0</code> branch to freeze the code used for the various <code>1.0.x</code> patch releases. Those tags will be associated with the <strong>prod</strong> flavor.</p><p><img src="'+s+'" alt="Flavors"></p><p>The flavor is used in various places:</p><ul><li>as a suffix of the built app container, like in <code>kalisio/kano:1.0.0-test</code></li><li>as the value of the <code>NODE_APP_INSTANCE</code> environment variable in the app container</li><li>as a part of the file path where the CI will search for the app associated <code>kli</code> file.</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>The CI system only checks for patterns in branch or tag names to determine the flavor. The version information is always fetched from the app <code>package.json</code>.</p></div><h2 id="builtin-rules-to-search-for-the-kli-file" tabindex="-1">Builtin rules to search for the <code>kli</code> file <a class="header-anchor" href="#builtin-rules-to-search-for-the-kli-file" aria-label="Permalink to &quot;Builtin rules to search for the `kli` file&quot;">​</a></h2><p>Considering:</p><ul><li><code>$APP_NAME</code> as the name of the app being built (fetched from <code>package.json</code>)</li><li><code>$APP_VERSION</code> as the version of the app being built (fetched from <code>package.json</code>)</li><li><code>$FLAVOR</code> as the flavor of the current build</li><li><code>$CUSTOM</code> as a custom suffix extracted from the name of the built branch or tag (can be empty)</li></ul><p>our <a href="https://github.com/kalisio/kash" target="_blank" rel="noreferrer">kash</a> helper scripts will try to find one of the following files, by order of importance:</p><ul><li><code>$APP_NAME/$FLAVOR/$APP_NAME-$APP_VERSION-$CUSTOM.js</code> (if <code>$CUSTOM</code> is not empty), eg: <code>kano/dev/kano-1.0.0-client1.js</code></li><li><code>$APP_NAME/$FLAVOR/$APP_NAME-$APP_VERSION.js</code>, eg: <code>kano/dev/kano-1.0.0.js</code></li><li><code>$APP_NAME/$FLAVOR/$APP_NAME.js</code>, eg: <code>kano/dev/kano.js</code></li></ul><p>The <code>kli</code> files are generally located in the app associated <code>development</code> repository.</p><h2 id="the-custom-suffix" tabindex="-1">The custom suffix <a class="header-anchor" href="#the-custom-suffix" aria-label="Permalink to &quot;The custom suffix&quot;">​</a></h2><p>Our CI system supports using custom suffixes on tag and branch names, like <code>prod-v1.0.0-client1</code>, <code>-client1</code> is the suffix here. This custom suffix can be used by CI scripts to generate suffixed container image names for example. You can have a look at the <a href="https://github.com/kalisio/kano/blob/master/scripts/build_app.sh" target="_blank" rel="noreferrer">kano build_app script</a> for a concrete example. When using such suffix, the CI system will also search for a <code>kli</code> file with the custom suffix appended.</p>',18)]))}const g=o(r,[["render",l]]);export{u as __pageData,g as default};
