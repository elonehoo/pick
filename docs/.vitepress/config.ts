import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import {
  discord,
  font,
  github,
  pickDescription,
  pickName,
  releases,
  twitter,
} from './meta'

export default defineConfig({
  lang: 'en-US',
  title: pickName,
  description: pickDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: pickName }],
    ['meta', { property: 'og:description', content: pickDescription }],
    ['meta', { name: 'twitter:title', content: pickName }],
    ['meta', { name: 'twitter:description', content: pickDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/elonehoo/pick/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Elone Hoo',
    },
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Components', link: '/components/grid' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
        ],
      },
    ],
    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            {
              text: 'Why Pick',
              link: '/docs/why',
            },
            {
              text: 'Installation',
              link: '/docs/',
            },
            {
              text: 'Usage',
              link: '/docs/usage',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Layout',
          items: [
            {
              text: 'Grid',
              link: '/components/grid',
            },
          ],
        },
        {
          text: 'Theme',
          items: [
            {
              text: 'Color',
              link: '/components/color',
            },
            {
              text: 'Icon',
              link: '/components/icon',
            },
          ],
        },
        {
          text: 'component',
          items: [
            {
              text: 'Alert',
              link: '/components/alert',
            },
            {
              text: 'Avatar',
              link: '/components/avatar',
            },
            {
              text: 'Breadcrumb',
              link: '/components/breadcrumb',
            },
            {
              text: 'Button',
              link: '/components/button',
            },
            {
              text: 'Card',
              link: '/components/card',
            },
            {
              text: 'CheckBox',
              link: '/components/checkBox',
            },
            {
              text: 'Chip',
              link: '/components/chip',
            },
            {
              text: 'Collapse',
              link: '/components/collapse',
            },
            {
              text: 'Dialog',
              link: '/components/dialog',
            },
            {
              text: 'Divider',
              link: '/components/divider',
            },
            {
              text: 'Images',
              link: '/components/images',
            },
            {
              text: 'Input',
              link: '/components/input',
            },
            {
              text:'Input Number',
              link:'/components/input-number',
            },
            {
              text:'List',
              link:'/components/list',
            },
            {
              text:'Loading',
              link:'/components/loading',
            },
          ],
        },
      ],
    },
  },
})
