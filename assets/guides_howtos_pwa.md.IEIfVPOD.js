import{_ as a,c as t,o,au as i}from"./chunks/framework.DtUFc-jG.js";const r="/skeleton/assets/service-worker.D4wOZtTx.svg",f=JSON.parse('{"title":"PWA","description":"","frontmatter":{},"headers":[],"relativePath":"guides/howtos/pwa.md","filePath":"guides/howtos/pwa.md"}'),s={name:"guides/howtos/pwa.md"};function n(p,e,l,h,c,u){return o(),t("div",null,e[0]||(e[0]=[i('<h1 id="pwa" tabindex="-1">PWA <a class="header-anchor" href="#pwa" aria-label="Permalink to &quot;PWA&quot;">​</a></h1><p>The skeleton is a <strong>Progressive Web App (PWA)</strong>, which means it functions as both a web page and a mobile app, offering a versatile experience on any device.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To build and run the skeleton as a PWA, check out the main commands <a href="https://kalisio.github.io/skeleton/guides/development/develop.html" target="_blank" rel="noreferrer">here</a></p></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><h3 id="web-app-manifest" tabindex="-1">Web app manifest <a class="header-anchor" href="#web-app-manifest" aria-label="Permalink to &quot;Web app manifest&quot;">​</a></h3><p>A web app manifest provides essential information about the application, such as its name, author, icon, and description, in a JSON text document. The purpose of the manifest is to allow the installation of applications on a device&#39;s home screen. You can find this manifest in the <a href="https://github.com/kalisio/skeleton/blob/master/quasar.config.js#L246" target="_blank" rel="noreferrer">Quasar configuration</a>.</p><h3 id="service-worker" tabindex="-1">Service Worker <a class="header-anchor" href="#service-worker" aria-label="Permalink to &quot;Service Worker&quot;">​</a></h3><p><a href="https://github.com/kalisio/skeleton/blob/master/src-pwa/custom-service-worker.js" target="_blank" rel="noreferrer">Service workers</a>, which operate as JavaScript events, are a core component of a PWA and act as a proxy. They enable fast loading, offline access, push notifications, and other capabilities.</p><img src="'+r+'" style="margin-left:auto;margin-right:auto;"><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When the application is ready to be installed or updated, a pop-up window will appear.</p></div><h3 id="push-notfication" tabindex="-1">Push notfication <a class="header-anchor" href="#push-notfication" aria-label="Permalink to &quot;Push notfication&quot;">​</a></h3><p><a href="https://kalisio.github.io/kApp" target="_blank" rel="noreferrer">KApp</a> provides an example of how to implement push notifications using the <a href="https://github.com/kalisio/feathers-webpush" target="_blank" rel="noreferrer">feathers-webpush module</a>.</p><p>For this you will need to generate private and public <a href="https://github.com/web-push-libs/web-push#command-line" target="_blank" rel="noreferrer">VAPID keys</a>.</p>',13)]))}const m=a(s,[["render",n]]);export{f as __pageData,m as default};
