import{_ as i,c as a,o as n,au as l}from"./chunks/framework.DtUFc-jG.js";const d=JSON.parse('{"title":"KDK CLI","description":"","frontmatter":{},"headers":[],"relativePath":"guides/development/kli.md","filePath":"guides/development/kli.md"}'),t={name:"guides/development/kli.md"};function e(h,s,k,p,r,F){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="kdk-cli" tabindex="-1">KDK CLI <a class="header-anchor" href="#kdk-cli" aria-label="Permalink to &quot;KDK CLI&quot;">​</a></h1><p>The KDK CLI (a.k.a. <code>kli</code>) is a multiplexer for usual git/yarn commands used when developing KDK-based applications. It allows to easily clone, install, link, unlink, switch branch on all modules and application using a single command.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Production version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @kalisio/kli</span></span></code></pre></div><p>Or to use the master branch locally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/kalisio/kli.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span></code></pre></div><h2 id="workspaces" tabindex="-1">Workspaces <a class="header-anchor" href="#workspaces" aria-label="Permalink to &quot;Workspaces&quot;">​</a></h2><p>The CLI relies on a workspace file defining the dependency tree between your KDK-based application and modules like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  kdk: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dependencies: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branch: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;master&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  kApp: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    application: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dependencies: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@kalisio/kdk&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branch: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;master&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Each key is a git repository, i.e. a module, monorepo or application, with the following available properties:</p><ul><li><code>dependencies</code>: list of dependent (KDK-)based modules if any</li><li><code>branch</code>: branch the module should use</li><li><code>application</code>: indicates if this is the main KDK-based application module, i.e. it has an <code>api</code> subfolder</li><li><code>path</code>: relative path to the repository on the local disk</li><li><code>organization</code>: GitHub/GitLab organization the repository belongs to</li><li><code>output</code>: the name of the repository folder on the local disk</li><li><code>url</code>: the root URL to the remote git repositories (if not given will be <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>)</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>branch</code> option can also target a git tag, typically fo production releases.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>All operations will take effect in the current working directory so that subdirectories named according to modules will be created or expected to already exist.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repositories</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --clone</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> between</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> required</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlink</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> between</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> required</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unlink</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> having</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> given</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specified</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --switch</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This CLI assumes git and yarn are already globally installed on your system.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>By default all Git operations target the <code>kalisio</code> organization, you can change this for the whole workspace using the <code>organization</code> CLI option or on specific modules only using the <code>organization</code> option in the workspace file. Like this you include modules coming from a separate organization but used as dependencies of the project owned by the main organization of the project.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>All operations are performed relative to the CWD by default, you can change this for specific modules only using the <code>path</code> option in the workspace file providing a module path relative to the CWD. Like this you can for instance have modules coming from a separate organization isolated into their own directory.</p></div><p>Sample workspaces for our <a href="https://github.com/kalisio/skeleton" target="_blank" rel="noreferrer">application template</a>, <a href="https://github.com/kalisio/kano" target="_blank" rel="noreferrer">Kano</a> and <a href="https://github.com/kalisio/crisis" target="_blank" rel="noreferrer">Kalisio Crisis</a> are provided in the <a href="https://github.com/kalisio/kli" target="_blank" rel="noreferrer">kli repository</a>.</p><p>Full CLI usage is the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">workspacefil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -o,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --organization</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [organization]  GitHub organization or GitLab group owing the project (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;kalisio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -u,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [url]                    Git server base URL (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://github.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -d,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --debug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        Verbose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debugging</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -c,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch]               Clone git repositories (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> optional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> all modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -p,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repositories</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -i,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      Perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -l,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         Perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -ul,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unlink</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      Perform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlink</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -b,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Switch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> where</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> does</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -s,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --switch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       Switch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specified</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (if </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -m,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            Comma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> separated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span></code></pre></div><h2 id="working-on-multiple-versions" tabindex="-1">Working on multiple versions <a class="header-anchor" href="#working-on-multiple-versions" aria-label="Permalink to &quot;Working on multiple versions&quot;">​</a></h2><p>In order to be able to switch easily between different versions of NodeJS you usually use a version manager like <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a>/<a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">nvm</a> under Linux/Mac or <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm</a> under Windows. However, as links are global to a Yarn installation it can be tricky to switch between different versions of the same repository using different NodeJS versions, e.g. KDK on master branch running under NodeJS v12 and KDK on another branch running under NodeJS v16.</p><p>Although you can have a single local KDK repository and switch between the branches we do not recommand it. Indeed, each time you will switch you will also have to reinstall all the dependencies for the new NodeJS version, which can be cumbersome and has proven to be error-prone for package managers. Moreover, the branch names between the different repositories in a complex architecture might not be consistent. Last but not least, sometimes the repositories themselves might change their names or location between different versions.</p><p>In a nutshell, we recommand creating a different workspace for your application and clone each repository in a different folder for each version. This way it is far more easier to switch from one version to another, before switching to a new version you simply need to unlink the previous version workspace:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// We are currently using NodeJS v12</span></span>
<span class="line"><span>cd nodejs12</span></span>
<span class="line"><span>kli workspace-nodejs12.js --link</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>// Start working with NodeJS v16</span></span>
<span class="line"><span>kli workspace-nodejs12.js --unlink</span></span>
<span class="line"><span>nvm use 16.0.0</span></span>
<span class="line"><span>cd nodejs16</span></span>
<span class="line"><span>kli workspace-nodejs16.js --link</span></span></code></pre></div>`,27)]))}const g=i(t,[["render",e]]);export{d as __pageData,g as default};
