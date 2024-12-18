import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/skeleton',
  title: 'Skeleton',
  description: 'Skeleton - KDK application template',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/skeleton/skeleton-icon-color-2048x2048.png' }]
  ],
  themeConfig: {
    logo: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/skeleton/skeleton-icon-color-2048x2048.png',
    nav: [
      { text: 'About', link: '/about/introduction' },
      { text: 'Guides', link: '/guides/introduction' }
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/guides/': getGuidesSidebar()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kalisio/skeleton' }
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2017-20xx Kalisio'
    },
  },
  vite: {
    optimizeDeps: {
			include: ['keycloak-js', 'lodash'],
		},
		ssr: {
			noExternal: ['vitepress-theme-kalisio']
		}
  }
})

function getAboutSidebar () {
  return [
    { text: 'About', link: '/about/introduction' },
    { text: 'Contributing', link: '/about/contributing' },
    { text: 'License', link: '/about/license' },
    { text: 'Contact', link: '/about/contact' }
  ] 
}

function getGuidesSidebar () {
  return [
    { text: 'Introduction', link: '/guides/introduction' },
    { text: 'Folder Structure', link: '/guides/structure' },
    { text: 'Installation', link: '/guides/installing' },
    {
      text: 'Development',
      collapsed: true,
      items: [
        { text: 'Setup your environment', link: '/guides/development/setup' },
        { text: 'Develop your app', link: '/guides/development/develop' },
        { text: 'Testing your app', link: '/guides/development/test' },
        { text: 'Configure your app', link: '/guides/development/configure' },
        { text: 'Deploy your app', link: '/guides/development/deploy' },
        { text: 'Publish your app', link: '/guides/development/publish' },
        { text: 'Document your app', link: '/guides/development/documentation' },
        { text: 'Use our CLI', link: '/guides/development/kli' },
        { text: 'Tips', link: '/guides/development/tips' },
        { text: 'Troubleshooting', link: '/guides/development/troubleshooting' }
      ]
    },
    {
      text: 'Howtos',
      collapsed: true,
      items: [
        { text: 'Create a service', link: '/guides/howtos/service' },
        { text: 'Distribute a service', link: '/guides/howtos/distribution' },
        { text: 'Manage permissions', link: '/guides/howtos/permissions' },
        { text: 'Add guards', link: '/guides/howtos/guards' },
        { text: 'Manage collection', link: '/guides/howtos/collection' },
        { text: 'Add tours', link: '/guides/howtos/tours' },
        { text: 'Build a PWA', link: '/guides/howtos/pwa' },
        { text: 'Connect to Keycloak', link: '/guides/howtos/keycloak' },
        { text: 'Connect to a planet', link: '/guides/howtos/planet' }
      ]
    }
  ]
}
