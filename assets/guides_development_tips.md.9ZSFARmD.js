import{_ as s,c as i,o as a,V as e}from"./chunks/framework.Q5AHJ25T.js";const g=JSON.parse('{"title":"Development tips","description":"","frontmatter":{},"headers":[],"relativePath":"guides/development/tips.md","filePath":"guides/development/tips.md"}'),t={name:"guides/development/tips.md"},n=e(`<h1 id="development-tips" tabindex="-1">Development tips <a class="header-anchor" href="#development-tips" aria-label="Permalink to &quot;Development tips&quot;">​</a></h1><h2 id="generating-service-account-tokens" tabindex="-1">Generating service account tokens <a class="header-anchor" href="#generating-service-account-tokens" aria-label="Permalink to &quot;Generating service account tokens&quot;">​</a></h2><p>If you&#39;d like a third-party application to rely on the API of your application without authenticating using a user/password you can generate an access token with a fixed expiration date to be used as an API key.</p><h3 id="personal-access-token" tabindex="-1">Personal access token <a class="header-anchor" href="#personal-access-token" aria-label="Permalink to &quot;Personal access token&quot;">​</a></h3><p>If your API needs a user ID to work as expected first register a user as usual. Then, using your application secret and a <a href="https://jwt.io/" target="_blank" rel="noreferrer">JWT library</a>, issue a JWT with a payload matching the configuration options of your application regarding audience (i.e. domain), issuer and the user ID in the <code>sub</code> claim if any, e.g.:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;aud&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kano.kargo.kalisio.xyz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;iss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kalisio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1552402010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;sub&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5bc5b166beb4648d3cd79327&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In local development environment <code>aud=kalisio</code>.</p></div><h3 id="impersonated-access-token" tabindex="-1">Impersonated access token <a class="header-anchor" href="#impersonated-access-token" aria-label="Permalink to &quot;Impersonated access token&quot;">​</a></h3><p>If you don&#39;t want to rely on an existing user with the appropriate permissions you can create a stateless token thant directly includes it, the payload of your token will be used as a virtual user object. For instance, if your app rely on a <code>permissions</code> field to compute user abilities you can provide a token like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;aud&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kano.kargo.kalisio.xyz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;iss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kalisio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1552402010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;sub&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myapp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;superadmin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In this case the <code>sub</code> claim is not used internally and can be used for instance to identify the owner of the token.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In local development environment <code>aud=kalisio</code>.</p></div><h2 id="running-multiple-applications-side-by-side" tabindex="-1">Running multiple applications side-by-side <a class="header-anchor" href="#running-multiple-applications-side-by-side" aria-label="Permalink to &quot;Running multiple applications side-by-side&quot;">​</a></h2><p>For instance, as Kano depends for some features on a running Weacast API you will need to run both on your local development environment. If your application also uses replication you will need to launch two instances in parallel. The problem is that by default all our apps uses the <code>8081</code> port for server and <code>8080</code> port for client in development mode, generating a port conflict. Similarly the Node.js debugger uses by default the <code>9229</code> port.</p><p>You should run the first server by defining eg. <code>PORT=8082</code> (to avoid port conflict). If single-sign-on is expected to work, define also <code>APP_SECRET=same value as in second application configuration</code> as environment variables. Then execute the <code>yarn dev:replica</code> command (will setup the Node.js debugger to use the <code>9229</code> port to avoid port conflict). Last, you can launch the second server/client as usual.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You usually don&#39;t need the client application but only the API on the replica but if required you can launch another client similarly e.g. by setting <code>CLIENT_PORT=8083</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you need more than two side-by-side applications then use set <a href="https://nodejs.org/api/cli.html#cli_node_options_options" target="_blank" rel="noreferrer">NODE_OPTIONS</a> environment variable before launching each one, e.g. <code>NODE_OPTIONS=&#39;--inspect-port=9230&#39;</code>.</p></div><h3 id="application-instances-synchronization" tabindex="-1">Application instances synchronization <a class="header-anchor" href="#application-instances-synchronization" aria-label="Permalink to &quot;Application instances synchronization&quot;">​</a></h3><p>If your application is not fully stateless or requires real-time events to be dispatched to clients you will also need to synchronize them using <a href="https://github.com/feathersjs-ecosystem/feathers-sync" target="_blank" rel="noreferrer">feathers-sync</a>. We previously relied on the <a href="https://github.com/scttnlsn/mubsub" target="_blank" rel="noreferrer">mubsub</a> adapter because as we already use MongoDB it did not require any additional service to be deployed.</p><p>Unfortunately it has been <a href="https://github.com/feathersjs-ecosystem/feathers-sync/pull/135" target="_blank" rel="noreferrer">deprecated</a>. As a consequence we now rely on the <a href="https://redis.io/" target="_blank" rel="noreferrer">Redis</a> adapter. For development you can easily run a Redis server using Docker:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Bind it to your prefered port</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run -d --rm --name redis -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6300</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:6379 redis:5</span></span></code></pre></div><p>You will need to play with the different options presented above to avoid port conflicts and define as well how your app connects to the Redis instance using the <code>REDIS_URL</code> environment variable like <code>redis://127.0.0.1:6300</code>. You can see the subscriber apps and exchanged messages by connecting to the Redis container:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Bind it to your prefered port</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec -it redis bash</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> redis-cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Number of subscribers</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBSUB NUMSUB feathers-sync</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;feathers-sync&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Monitor messages</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SUBSCRIBE feathers-sync</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Reading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages...</span></span></code></pre></div><h2 id="development-domains" tabindex="-1">Development domains <a class="header-anchor" href="#development-domains" aria-label="Permalink to &quot;Development domains&quot;">​</a></h2><p>Some development tasks like OAuth2 authentication have strict security concerns so that you cannot use <code>localhost</code>, non-standard ports or need to enforce HTTPS in all URLs. Here is how to setup a &quot;fake&quot; domain on your host.</p><p>Let&#39;s say we have our app running on <code>localhost:8080</code> in HTTP or <code>localhost:8083</code> in HTTPS. First, edit the <code>hosts</code> file (<em>/etc/hosts</em> under Linux or <em>C:\\Windows\\System32\\drivers\\etc\\hosts</em> under Windows) and add this line to redirect the domain to local host:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>127.0.0.1 test.airbusoidc.com</span></span></code></pre></div><p>Then, since the <code>hosts</code> file does not allow to manage port redirections we need to do so using the operating system network tools.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>To see what is currently running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TCP </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LISTENING&quot;</span></span></code></pre></div><p>To add port redirection for HTTP:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface portproxy add v4tov4 listenport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listenaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1 connectport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connectaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1</span></span></code></pre></div><p>To add port redirection for HTTPS:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface portproxy add v4tov4 listenport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listenaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1 connectport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8083</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connectaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1</span></span></code></pre></div><p>To see running proxied port:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface portproxy show v4tov4</span></span></code></pre></div><p>To see remove proxied port:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface portproxy delete v4tov4 listenport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listenaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>First enable port redirection:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/sys/net/ipv4/ip_forward</span></span></code></pre></div><p>Then add port redirect:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat -A PREROUTING -s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1 -p tcp --dport </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -j REDIRECT --to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat -A OUTPUT -s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1 -p tcp --dport </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -j REDIRECT --to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span></code></pre></div><p>To remove simply replace in the previous command the <code>-D</code> switch instead of the <code>-A</code> switch.</p>`,45),p=[n];function l(h,o,r,d,k,c){return a(),i("div",null,p)}const F=s(t,[["render",l]]);export{g as __pageData,F as default};
