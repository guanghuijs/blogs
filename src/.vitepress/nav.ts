import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: 'vitepress',
    link: '/blogs/vitepress/项目初始化',
    activeMatch: '/vitepress/',
  },
  {
    text: '博客',
    items: [
      { text: 'JavaScript', link: '/blogs/JavaScript/基础' },
      { text: 'html', link: '/blogs/html/标签' },
      { text: 'vue', link: '/blogs/vue/vue2' },
    ],
  },
] as DefaultTheme.NavItem[];
