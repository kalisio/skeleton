import{_ as i,c as a,o as n,au as t}from"./chunks/framework.DtUFc-jG.js";const o=JSON.parse('{"title":"Create a new activity","description":"","frontmatter":{},"headers":[],"relativePath":"guides/howtos/activity.md","filePath":"guides/howtos/activity.md"}'),e={name:"guides/howtos/activity.md"};function l(h,s,p,k,E,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="create-a-new-activity" tabindex="-1">Create a new activity <a class="header-anchor" href="#create-a-new-activity" aria-label="Permalink to &quot;Create a new activity&quot;">​</a></h1><p>To create a new <a href="https://kalisio.github.io/kdk/api/core/components.html#activity" target="_blank" rel="noreferrer">activity</a> initiate a component file <code>MyActivity.vue</code> in your <code>src/components</code> folder, the content of your activity will go in the default slot of the <code>KActivity</code> component like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">KActivity</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-activity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // Here comes your a ctivity content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">KActivity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>This will automatically allow to setup the <a href="https://kalisio.github.io/kdk/api/core/components.html#layout" target="_blank" rel="noreferrer">layout</a> of your activity based on the application configuration as explained hereafter.</p><h2 id="configure-the-activity" tabindex="-1">Configure the activity <a class="header-anchor" href="#configure-the-activity" aria-label="Permalink to &quot;Configure the activity&quot;">​</a></h2><p>In the configuration file of your client (usually <code>config/default.js</code>) setup the configuration for your activity using a key based on its name in <a href="https://lodash.com/docs/4.17.15#camelCase" target="_blank" rel="noreferrer">camel case</a>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	myActivity: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    header: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	// This adds a custom component to be used as header</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      content: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyHeader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      visible: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    panes: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      left: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        content: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // This adds an action to route to another activity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		{ id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;another-activity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;las la-xxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyActivity.ANOTHER_LABEL&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, renderer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, route: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;another-activity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // This adds an action to perform a user action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		{ id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user-action&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;las la-yyy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyActivity.ACTION_LABEL&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, renderer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, handler: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;logout&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        opener: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="use-layout-modes-in-the-activity" tabindex="-1">Use layout modes in the activity <a class="header-anchor" href="#use-layout-modes-in-the-activity" aria-label="Permalink to &quot;Use layout modes in the activity&quot;">​</a></h2><p>Layout configuration depends on a <code>mode</code> that the application can switch whenever required to change its content. Update the configuration file of your client (usually <code>config/default.js</code>) to setup additional modes for your layout using keys based on the mode name like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	myActivity: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    panes: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      topPane: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	      content: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	      	// Default mode content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	        default: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	        	...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	          { component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;QSeparator&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, vertical: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grey-5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, style: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;max-width: 1px; min-width: 1px;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	          // Action used to activate search mode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	          { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;search&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;las la-search&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tooltip: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyActivity.SEARCH&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, handler: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setTopPaneMode&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;filter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	        ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	        // Search mode content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	        search: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				    { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;back&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;las la-arrow-left&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, handler: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setTopPaneMode&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				    { component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;QSeparator&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, vertical: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lightgrey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				    { component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MySearch&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	      },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	      // Default layout mode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	      mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>If your action handlers directly call functions exposed by your activity this should be sufficient. However, as this is the case in this example, if the action handlers are calling functions that manipulate the application layout like <code>setTopPaneMode</code>, you have to expose it in your activity by using the <a href="https://kalisio.github.io/kdk/api/core/composables.html#uselayout" target="_blank" rel="noreferrer"><code>useLayout</code></a> composable:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { composables </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> kdkCoreComposables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } from &#39;@kalisio/kdk/core.client&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// Need to expose layout functions to be used from configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const layout = kdkCoreComposables.useLayout()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">defineExpose({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,12)]))}const c=i(e,[["render",l]]);export{o as __pageData,c as default};
