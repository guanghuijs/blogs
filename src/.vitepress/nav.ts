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
      { text: 'JavaScript', link: '/blogs/JavaScript/基础' },
      { text: 'vue', link: '/blogs/vue/vue2' },
      { text: 'git', link: '/blogs/git/ssh' },
      { text: 'vitepress', link: '/blogs/vitepress/项目初始化' },
    ],
  },
] as DefaultTheme.NavItem[];
