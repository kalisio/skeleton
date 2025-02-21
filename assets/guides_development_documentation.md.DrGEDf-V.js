import{_ as i,c as a,o as n,au as p}from"./chunks/framework.DtUFc-jG.js";const t="/skeleton/assets/hooks-diagram-template.BIct1_EZ.png",g=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"guides/development/documentation.md","filePath":"guides/development/documentation.md"}'),l={name:"guides/development/documentation.md"};function e(h,s,k,E,r,o){return n(),a("div",null,s[0]||(s[0]=[p(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><p>The approach we have adopted rely on <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> to generate the static web site of your app.</p><h2 id="install-vitepress" tabindex="-1">Install VitePress <a class="header-anchor" href="#install-vitepress" aria-label="Permalink to &quot;Install VitePress&quot;">​</a></h2><p>You first need to install vitepress:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$yarn add -D vitepress</span></span></code></pre></div><p>And then add the documentation generation scripts to the <code>package.json</code> file:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Create the following directory structure to store the <strong>VuePress</strong> stuff:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>|_ .vitepress/</span></span>
<span class="line"><span>|    |_ config.mjs</span></span>
<span class="line"><span>|_ package.json</span></span>
<span class="line"><span>|_ index.md</span></span>
<span class="line"><span>|....</span></span></code></pre></div><ul><li><code>.vitepress</code> stores the <strong>VitePress</strong> configuration.</li><li><code>index.md</code> is the entry point of your documentation.</li><li><code>package.json</code> is the Node.js entry point to build the documentation. The file must have the following content:</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;skeleton-documentation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;keycloak-js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^23.0.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lodash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.17.21&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;moment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.30.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;quasar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.14.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitepress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^1.6.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitepress-theme-kalisio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/kalisio/vitepress-theme-kalisio&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The structure follows the <strong>VitePress</strong> directory structure and more information can be found <a href="https://vitepress.dev/guide/getting-started#file-structure" target="_blank" rel="noreferrer">here</a></p></div><h2 id="configure-vitepress" tabindex="-1">Configure VitePress <a class="header-anchor" href="#configure-vitepress" aria-label="Permalink to &quot;Configure VitePress&quot;">​</a></h2><p>Edit the <code>config.mjs</code> to configure <strong>VitePress</strong>.</p><details class="details custom-block"><summary>.vitepress/config.mjs</summary><div class="language-mjs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mjs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  base: &#39;/skeleton&#39;,</span></span>
<span class="line"><span>  title: &#39;Skeleton&#39;,</span></span>
<span class="line"><span>  description: &#39;Skeleton - KDK application template&#39;,</span></span>
<span class="line"><span>  ignoreDeadLinks: true,</span></span>
<span class="line"><span>  head: [</span></span>
<span class="line"><span>    [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;https://s3.eu-central-1.amazonaws.com/kalisioscope/skeleton/skeleton-icon-color-2048x2048.png&#39; }]</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    logo: &#39;https://s3.eu-central-1.amazonaws.com/kalisioscope/skeleton/skeleton-icon-color-2048x2048.png&#39;,</span></span>
<span class="line"><span>    nav: [</span></span>
<span class="line"><span>      { text: &#39;About&#39;, link: &#39;/about/introduction&#39; },</span></span>
<span class="line"><span>      { text: &#39;Guides&#39;, link: &#39;/guides/introduction&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    sidebar: {</span></span>
<span class="line"><span>      &#39;/about/&#39;: getAboutSidebar(),</span></span>
<span class="line"><span>      &#39;/guides/&#39;: getGuidesSidebar()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    socialLinks: [</span></span>
<span class="line"><span>      { icon: &#39;github&#39;, link: &#39;https://github.com/kalisio/skeleton&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    footer: {</span></span>
<span class="line"><span>      copyright: &#39;MIT Licensed | Copyright © 2017-20xx Kalisio&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  vite: {</span></span>
<span class="line"><span>    optimizeDeps: {</span></span>
<span class="line"><span>      include: [&#39;keycloak-js&#39;, &#39;lodash&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ssr: {</span></span>
<span class="line"><span>      noExternal: [&#39;vitepress-theme-kalisio&#39;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getAboutSidebar () {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    { text: &#39;About&#39;, link: &#39;/about/introduction&#39; },</span></span>
<span class="line"><span>    { text: &#39;Contributing&#39;, link: &#39;/about/contributing&#39; },</span></span>
<span class="line"><span>    { text: &#39;License&#39;, link: &#39;/about/license&#39; },</span></span>
<span class="line"><span>    { text: &#39;Contact&#39;, link: &#39;/about/contact&#39; }</span></span>
<span class="line"><span>  ] </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getGuidesSidebar () {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    { text: &#39;Introduction&#39;, link: &#39;/guides/introduction&#39; },</span></span>
<span class="line"><span>    { text: &#39;Folder Structure&#39;, link: &#39;/guides/structure&#39; },</span></span>
<span class="line"><span>    { text: &#39;Installation&#39;, link: &#39;/guides/installing&#39; },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;Development&#39;,</span></span>
<span class="line"><span>      collapsed: true,</span></span>
<span class="line"><span>      items: [</span></span>
<span class="line"><span>        { text: &#39;Initialize your repository&#39;, link: &#39;/guides/development/initialize&#39; },</span></span>
<span class="line"><span>        { text: &#39;Setup your environment&#39;, link: &#39;/guides/development/setup&#39; },</span></span>
<span class="line"><span>        { text: &#39;Develop your app&#39;, link: &#39;/guides/development/develop&#39; },</span></span>
<span class="line"><span>        { text: &#39;Testing your app&#39;, link: &#39;/guides/development/test&#39; },</span></span>
<span class="line"><span>        { text: &#39;Configure your app&#39;, link: &#39;/guides/development/configure&#39; },</span></span>
<span class="line"><span>        { text: &#39;Deploy your app&#39;, link: &#39;/guides/development/deploy&#39; },</span></span>
<span class="line"><span>        { text: &#39;Document your app&#39;, link: &#39;/guides/development/documentation&#39; },</span></span>
<span class="line"><span>        { text: &#39;Use our CLI&#39;, link: &#39;/guides/development/kli&#39; },</span></span>
<span class="line"><span>        { text: &#39;Tips&#39;, link: &#39;/guides/development/tips&#39; },</span></span>
<span class="line"><span>        { text: &#39;Troubleshooting&#39;, link: &#39;/guides/development/troubleshooting&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;Howtos&#39;,</span></span>
<span class="line"><span>      collapsed: true,</span></span>
<span class="line"><span>      items: [</span></span>
<span class="line"><span>        { text: &#39;Create a service&#39;, link: &#39;/guides/howtos/service&#39; },</span></span>
<span class="line"><span>        { text: &#39;Distribute a service&#39;, link: &#39;/guides/howtos/distribution&#39; },</span></span>
<span class="line"><span>        { text: &#39;Manage permissions&#39;, link: &#39;/guides/howtos/permissions&#39; },</span></span>
<span class="line"><span>        { text: &#39;Add guards&#39;, link: &#39;/guides/howtos/guards&#39; },</span></span>
<span class="line"><span>        { text: &#39;Create an activity&#39;, link: &#39;/guides/howtos/activity&#39; },</span></span>
<span class="line"><span>        { text: &#39;Manage a collection&#39;, link: &#39;/guides/howtos/collection&#39; },</span></span>
<span class="line"><span>        { text: &#39;Add tours&#39;, link: &#39;/guides/howtos/tours&#39; },</span></span>
<span class="line"><span>        { text: &#39;Build a PWA&#39;, link: &#39;/guides/howtos/pwa&#39; },</span></span>
<span class="line"><span>        { text: &#39;Connect to Keycloak&#39;, link: &#39;/guides/howtos/keycloak&#39; },</span></span>
<span class="line"><span>        { text: &#39;Connect to a planet&#39;, link: &#39;/guides/howtos/planet&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><h2 id="write-the-documentation" tabindex="-1">Write the documentation <a class="header-anchor" href="#write-the-documentation" aria-label="Permalink to &quot;Write the documentation&quot;">​</a></h2><p>Here are few tips to know when writing the documentation:</p><ul><li>Pages structure: the pages should match the navigation structure you have defined in the <code>config.js</code> file.</li><li>Handling assets: you can simply refer to the asset using relative URLs. Please refer to the <a href="https://vitepress.dev/guide/asset-handling" target="_blank" rel="noreferrer">Asset Handling</a> page to know more.</li><li>Take advantage of <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">Markdown extensions</a></li></ul><h2 id="deploy-the-documentation-to-the-gh-pages" tabindex="-1">Deploy the documentation to the gh-pages <a class="header-anchor" href="#deploy-the-documentation-to-the-gh-pages" aria-label="Permalink to &quot;Deploy the documentation to the gh-pages&quot;">​</a></h2><p>Have a look at our workflow for an example.</p><details class="details custom-block"><summary>.github/workflows/main.yaml</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ci</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  run_tests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Run tests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ !contains(github.event.head_commit.message, &#39;skip tests&#39;) }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Init runner</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/init_runner.sh \${{ github.job }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup workspace</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          KALISIO_GITHUB_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.KALISIO_GITHUB_URL }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/setup_workspace.sh -k klifull</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Run tests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          SOPS_AGE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.SOPS_AGE_KEY }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/run_tests.sh -c -r \${{ github.job }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  additional_tests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      fail-fast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        mongo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Additional tests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ contains(github.event.head_commit.message, &#39;additional tests&#39;) }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Init runner</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/init_runner.sh \${{ github.job }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup workspace</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          KALISIO_GITHUB_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.KALISIO_GITHUB_URL }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/setup_workspace.sh -k klifull -n \${{ matrix.node }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Run tests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          SOPS_AGE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.SOPS_AGE_KEY }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/run_tests.sh -n \${{ matrix.node }} -m \${{ matrix.mongo }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build_app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ !contains(github.event.head_commit.message, &#39;skip app&#39;) }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      fail-fast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        debian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bookworm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Init runner</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/init_runner.sh \${{ github.job }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup workspace</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          KALISIO_GITHUB_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.KALISIO_GITHUB_URL }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/setup_workspace.sh -k kli</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          SOPS_AGE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.SOPS_AGE_KEY }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/build_app.sh -p -r \${{ github.job }} -n \${{ matrix.node }} -d \${{ matrix.debian }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build_docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build docs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ startsWith(github.event.head_commit.message, &#39;docs:&#39;) || contains(github.event.head_commit.message, &#39;build doc&#39;) }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-22.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Init runner</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/init_runner.sh \${{ github.job }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup workspace</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          KALISIO_GITHUB_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.KALISIO_GITHUB_URL }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/setup_workspace.sh -k nokli</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build docs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          SOPS_AGE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.SOPS_AGE_KEY }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash ./scripts/build_docs.sh -p -r \${{ github.job }}</span></span></code></pre></div></details><h2 id="working-with-diagrams" tabindex="-1">Working with diagrams <a class="header-anchor" href="#working-with-diagrams" aria-label="Permalink to &quot;Working with diagrams&quot;">​</a></h2><p>We use two distinct tools to work with diagrams:</p><ul><li><a href="http://draw.io" target="_blank" rel="noreferrer">draw.io</a> a complete editor to create well known diagrams</li><li><a href="https://github.com/knsv/mermaid" target="_blank" rel="noreferrer">mermaid</a> which allows you to generate diagrams from a simple text definition. We mainly use mermaid to create the hooks diagrams.</li></ul><p>To be able to include the diagrams within the documentation, we adopted the following methodology:</p><h3 id="draw-io" tabindex="-1">Draw.io <a class="header-anchor" href="#draw-io" aria-label="Permalink to &quot;Draw.io&quot;">​</a></h3><ol><li>make it with <a href="http://draw.io" target="_blank" rel="noreferrer">draw.io</a> and store it in this folder</li><li>export it as SVG/PNG in the root <strong>assets</strong> folder</li><li>reference it in the documentation using a link like this <code>![My legend](https://raw.githubusercontent.com/kalisio/kdk/master/images/my-diagram.png)</code></li></ol><h3 id="mermaid" tabindex="-1">mermaid <a class="header-anchor" href="#mermaid" aria-label="Permalink to &quot;mermaid&quot;">​</a></h3><ol><li>install the <a href="https://github.com/mermaidjs/mermaid.cli" target="_blank" rel="noreferrer">mermaid CLI</a></li><li>start from the hooks diagram template file</li></ol><details class="details custom-block"><summary>.github/workflows/main.yaml</summary><div class="language-mmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll{before all}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bahook(ba-hook) --&gt; beforeAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    afterAll{after all}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    afterAll --&gt; aahook(aa-hook)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; bfhook(bf-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bfhook --&gt;|before| FIND[FIND]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FIND --&gt;|after| afhook(af-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    afhook --&gt; afterAll</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; bghook(bg-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bghook --&gt;|before| GET[GET]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GET --&gt;|after| aghook(ag-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    aghook --&gt; afterAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; bchook(bc-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bchook --&gt;|before| CREATE[CREATE]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CREATE --&gt;|after| achook(ac-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    achook --&gt; afterAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; buhook(bu-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buhook --&gt;|before| UPDATE[UPDATE]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    UPDATE --&gt;|after| auhook(au-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    auhook --&gt; afterAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; bphook(bp-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bphook --&gt;|before| PATCH[PATCH]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PATCH --&gt;|after| aphook(ap-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    aphook --&gt; afterAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    beforeAll --&gt; brhook(br-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    brhook --&gt;|before| REMOVE[REMOVE]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    REMOVE --&gt;|after| arhook(ar-hook)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    arhook --&gt; afterAll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    linkStyle default stroke-width:2px,fill:none,stroke:black</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef hookClass fill:#f96,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class bahook,aahook,bfhook,afhook,bghook,aghook,bchook,achook,buhook,auhook,bphook,aphook,brhook,arhook hookClass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef operationClass fill:#9c6,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class FIND,GET,CREATE,UPDATE,PATCH,REMOVE operationClass</span></span></code></pre></div></details><ol start="3"><li>output the SVG/PNG file in the root <strong>assets</strong> folder using <code>mmdc -i ./my-hooks-diagram.mmd -t neutral -b transparent -o my-hooks-diagram.svg</code></li><li>reference it in the documentation using a link like this <code>![My legend](https://raw.githubusercontent.com/kalisio/kdk/master/images/my-diagram.png)</code></li></ol><p>The template looks like this: <img src="`+t+'" alt="Hooks Diagram Template"></p>',32)]))}const c=i(l,[["render",e]]);export{g as __pageData,c as default};
