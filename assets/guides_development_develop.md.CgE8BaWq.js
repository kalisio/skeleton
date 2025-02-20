import{_ as o,c as t,o as a,au as r}from"./chunks/framework.DtUFc-jG.js";const u=JSON.parse('{"title":"Develop your app","description":"","frontmatter":{},"headers":[],"relativePath":"guides/development/develop.md","filePath":"guides/development/develop.md"}'),n={name:"guides/development/develop.md"};function i(d,e,l,s,p,c){return a(),t("div",null,e[0]||(e[0]=[r('<h1 id="develop-your-app" tabindex="-1">Develop your app <a class="header-anchor" href="#develop-your-app" aria-label="Permalink to &quot;Develop your app&quot;">​</a></h1><p>The <strong>skeleton</strong> provides the basic structure and tools to build and run a KDK-based application. We detail the main commands in the following sections.</p><h2 id="web-app" tabindex="-1">Web app <a class="header-anchor" href="#web-app" aria-label="Permalink to &quot;Web app&quot;">​</a></h2><h3 id="running-for-development" tabindex="-1">Running for development <a class="header-anchor" href="#running-for-development" aria-label="Permalink to &quot;Running for development&quot;">​</a></h3><p>Run the frontend app (from root project folder): <code>$ yarn dev</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Run the frontend app as a <strong>PWA</strong> (from root project folder): <code>$ yarn pwa:dev</code></p></div><p>Then from the backend <code>api</code> folder run the server-side app: <code>$ yarn dev</code></p><p>Then point your browser to <a href="http://localhost:8080" target="_blank" rel="noreferrer">localhost:8080</a>.</p><h3 id="building-for-production" tabindex="-1">Building for production <a class="header-anchor" href="#building-for-production" aria-label="Permalink to &quot;Building for production&quot;">​</a></h3><p>Build the frontend app (from root project folder): <code>$ yarn build</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Build the frontend app as a <strong>PWA</strong> (from root project folder): <code>$ yarn pwa:build</code></p></div><p>Then from the backend <code>api</code> folder build the server-side app: <code>$ yarn build</code></p><h3 id="running-in-production" tabindex="-1">Running in production <a class="header-anchor" href="#running-in-production" aria-label="Permalink to &quot;Running in production&quot;">​</a></h3><blockquote><p>Make sure you built your app first</p></blockquote><p>From the backend <code>api</code> folder run the server-side Feathers app, this will also serve the frontend Quasar app : <code>$ yarn prod</code></p><p>Then point your browser to <a href="http://localhost:8081" target="_blank" rel="noreferrer">localhost:8081</a>.</p><h3 id="linting-the-code" tabindex="-1">Linting the code <a class="header-anchor" href="#linting-the-code" aria-label="Permalink to &quot;Linting the code&quot;">​</a></h3><p>As the KDK, the skeleton relies on <a href="https://github.com/feross/standard" target="_blank" rel="noreferrer">JavaScript standard style</a>.</p><p>To lint the code (from root project folder or the backend <code>api</code> folder):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$yarn lint</span></span></code></pre></div><h3 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h3><p>Use <a href="https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27" target="_blank" rel="noreferrer">Chrome DevTools</a>, look at this <a href="https://www.youtube.com/watch?v=Xb_0awoShR8" target="_blank" rel="noreferrer">tutorial video</a>. Usually you simply have to open <code>chrome://inspect</code> in the Chrome URL.</p><p>If you want to launch a specific test use: <code>yarn mocha -- --grep &quot;My test&quot;</code>.</p><p>If you want to pause the debugger when running the tests this should do it: <code>yarn mocha -- --inspect-brk</code>.</p><p>If you want to debug replicas you can use the following environment variables to launch two instances of your apps:</p><ul><li><strong>PORT / HTTPS_PORT</strong>: API server port for HTTP and HTTPS modes</li><li><strong>CLIENT_PORT / HTTPS_CLIENT_PORT</strong>: frontend server port for HTTP and HTTPS modes</li></ul><p>For the backend run one instance with <code>$ yarn dev</code> and the other one with <code>$ yarn dev:replica</code> (this will use another port for the Node.js debugger on the second instance and avoid conflict).</p><p>Look at this <a href="https://washamdev.com/debug-a-website-in-ios-safari-on-windows/" target="_blank" rel="noreferrer">tutorial</a> will you need to debug the app in Safari from a Windows developmen environment.</p><h3 id="remote-debugging" tabindex="-1">Remote debugging <a class="header-anchor" href="#remote-debugging" aria-label="Permalink to &quot;Remote debugging&quot;">​</a></h3><p>Notably useful to debug your app running on a mobile device.</p><p>For this you first need to install ADB package with <code>sudo apt install -y adb</code> then <a href="https://developer.chrome.com/docs/devtools/remote-debugging/" target="_blank" rel="noreferrer">enable remote debug on your Android device</a>. Some tips can be found on this <a href="https://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in" target="_blank" rel="noreferrer">thread</a> if you get into trouble.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For PWA you will need to setup port forwarding so that you can use the same <code>http:\\\\localhost:port</code> adress on your device as on your PC, otherwise you will not be able to install the application.</p></div>',32)]))}const g=o(n,[["render",i]]);export{u as __pageData,g as default};
