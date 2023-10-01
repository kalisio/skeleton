import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d59586a6.js";const k=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"guides/installing.md","filePath":"guides/installing.md"}'),o={name:"guides/installing.md"},p=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="using-docker" tabindex="-1">Using Docker <a class="header-anchor" href="#using-docker" aria-label="Permalink to &quot;Using Docker&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This requires you to <a href="https://docs.docker.com/engine/installation/" target="_blank" rel="noreferrer">install Docker</a>, the world’s leading software container platform.</p></div><p>We provide Docker images on the <a href="https://hub.docker.com/r/kalisio/skeleton/" target="_blank" rel="noreferrer">Docker Hub</a> to ease deploying your own instance. To run correctly it has to be linked with a standard <a href="https://hub.docker.com/_/mongo/" target="_blank" rel="noreferrer">MongoDB container</a> for the database. Although it&#39;s possible to directly run Docker commands we provide you with <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">docker-compose</a> file to ease deployment. This file is detailed in the following sections and is available in the <a href="https://github.com/kalisio/skeleton/tree/master/docs/.vitepress/public" target="_blank" rel="noreferrer">public folder</a> of the documentation.</p><p>Jump into the folder with the docker-compose file, the following commands should do the job:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Retrieve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">latest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kalisio/skeleton:dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MongoDB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">containers</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MongoDB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">containers</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MongoDB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">containers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">erasing</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">data</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Retrieve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">latest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kalisio/skeleton:dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MongoDB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton</span><span style="color:#24292E;"> </span><span style="color:#032F62;">containers</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MongoDB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton</span><span style="color:#24292E;"> </span><span style="color:#032F62;">containers</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MongoDB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton</span><span style="color:#24292E;"> </span><span style="color:#032F62;">containers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">erasing</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">data</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><p>Then point your browser to <a href="http://localhost:8080" target="_blank" rel="noreferrer">localhost:8080</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Check the <a href="https://github.com/kalisio/skeleton/blob/master/api/config/default.cjs" target="_blank" rel="noreferrer">default.cjs</a> configuration file to find the required login information</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If running Docker under Windows in a virtual machine first redirect the port 8080 of your virtual machine to your host</p></div><details class="details custom-block"><summary>docker-compose.yml - Used to deploy MongoDB and skeleton containers.</summary><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">skeleton</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kalisio/kapp:dev</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">DB_URL=mongodb://mongodb:27017/kapp</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;8080:8081&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">skeleton</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongodb</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:4.2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongodb:/data/db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">skeleton</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongodb</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">skeleton</span><span style="color:#E1E4E8;">:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">skeleton</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kalisio/kapp:dev</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">DB_URL=mongodb://mongodb:27017/kapp</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;8080:8081&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">skeleton</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongodb</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:4.2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongodb:/data/db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">skeleton</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongodb</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">skeleton</span><span style="color:#24292E;">:</span></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For most applications some secrets (like your AWS S3 access key) need also to be set in your environment to make it work, see <a href="./development/deploy.html">deployment prerequisites</a></p></div><h2 id="from-source-code" tabindex="-1">From source code <a class="header-anchor" href="#from-source-code" aria-label="Permalink to &quot;From source code&quot;">​</a></h2><p>While it is a WIP and not yet pushed to NPM, or when developing, please use the following process.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommand using our <a href="https://kalisio.github.io/kdk/tools/cli.html#kdk-cli" target="_blank" rel="noreferrer">CLI</a> but you can still proceed manually as explained below.</p></div><p>First you have to ensure the <a href="https://kalisio.github.io/kdk/guides/development/setup.html#prerequisites" target="_blank" rel="noreferrer">KDK prerequisites</a> to run kApp from source code. Then the following commands, assuming you have a MongoDB instance running on local host and default port (27017), should launch your local instance of kApp.</p><p>Start by cloning all the modules you need and use <a href="https://docs.npmjs.com/cli/link" target="_blank" rel="noreferrer">yarn/npm link</a> to make them globally available to your Node.js installation:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">KDK</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kalisio/kdk.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kdk</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span>
<span class="line"><span style="color:#79B8FF;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#032F62;">KDK</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kalisio/kdk.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kdk</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span>
<span class="line"><span style="color:#005CC5;">...</span></span></code></pre></div><p>Then clone the main app repository and link to modules to make Node.js pointing to the previously cloned modules instead of those installed by yarn/npm, e.g. :</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">In</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">another</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">terminal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">modules</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kalisio/skeleton.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server/API</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton/api</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@kalisio/kdk</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">In</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">another</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">terminal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">skeleton</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@kalisio/kdk</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">In</span><span style="color:#24292E;"> </span><span style="color:#032F62;">another</span><span style="color:#24292E;"> </span><span style="color:#032F62;">terminal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#032F62;">modules</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kalisio/skeleton.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server/API</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton/api</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@kalisio/kdk</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">In</span><span style="color:#24292E;"> </span><span style="color:#032F62;">another</span><span style="color:#24292E;"> </span><span style="color:#032F62;">terminal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">skeleton</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@kalisio/kdk</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>Then point your browser to <a href="http://localhost:8080" target="_blank" rel="noreferrer">localhost:8080</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Take care that if a top-level module/plugin might depend on another module/plugin you will have to link them together during development, for instance the kdk module depends on the weacast-core module.</p></div>`,21),e=[p];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{k as __pageData,h as default};
