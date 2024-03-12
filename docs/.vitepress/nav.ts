import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: 'UI库',
    activeMatch: '/ghui/',
    link: '/ghui/guide/1.简介',
  },
  {
    text: '百度地图',
    activeMatch: '/bmap/',
    link: '/bmap/1.百度地图初始化',
  },
  {
    text: '博客',
    activeMatch: '/JavaScript|css|vue|cmd|vitepress|flutter|architect/',
    items: [
      { text: 'css', activeMatch: '/css/', link: '/css/常用片段' },
      { text: 'JavaScript', activeMatch: '/JavaScript/', link: '/JavaScript/1.JS基础' },
      { text: 'vue', activeMatch: '/vue/', link: '/vue/1.vue2' },
      { text: 'cmd', activeMatch: '/cmd/', link: '/cmd' },
      { text: 'vitepress', activeMatch: '/vitepress/', link: '/vitepress/1.项目初始化' },
      { text: 'flutter', activeMatch: '/flutter/', link: '/flutter/dart/1.语法基础' },
      { text: 'architect', activeMatch: '/architect/', link: '/architect/vite' },
    ],
  },
] as DefaultTheme.NavItem[];
