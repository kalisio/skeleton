import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/skeleton',
  title: 'Skeleton',
  description: 'Skeleton - KDK application template',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kapp/kapp-icon-64x64.png` }]
  ],
  themeConfig: {
    logo: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/kapp/kapp-icon-64x64.png',
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
        { text: 'Publish your app', link: '/guides/development/publish' }
      ]
    }
  ]
}
