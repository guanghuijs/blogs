import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: 'UI库',
    link: '/ghui/guide/简介',
  },
  {
    text: '博客',
    items: [
      { text: 'css', link: '/blogs/css/常用片段' },
      { text: 'JavaScript', link: '/blogs/JavaScript/JS基础' },
      { text: 'vue', link: '/blogs/vue/vue2' },
      { text: 'cmd', link: '/blogs/cmd' },
      { text: 'vitepress', link: '/blogs/vitepress/项目初始化' },
      { text: 'architect', link: '/blogs/architect/vite' },
    ],
  },
] as DefaultTheme.NavItem[];
