import { defineUserConfig, defaultTheme } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN', // 站点语言
  title: '苦练基本功', // 站点标题
  description: "web前端面试,vue面试题,react面试题,js面试题,大厂面试题,阿里面试题,京东面试题",
  base: '/interview/',// 部署站点的基础路径
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "web前端面试,vue面试题,react面试题,js面试题,大厂面试题,阿里面试题,京东面试题",
      },
    ],
  ],
  // 配置当前使用的主题，当前为默认主题
  theme: defaultTheme({
    navbar,
    sidebar,
  }),
  plugins: [
    backToTopPlugin(),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    })
  ]
})
