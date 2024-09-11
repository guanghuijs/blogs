import type { DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/default-theme-nav
export default [
  { text: '首页', link: '/' },
  {
    text: '博客',
    activeMatch: '/vitepress/',
    items: [
      // 这里是主页菜单配置,一个{}代表docs目录下的一个子目录,可嵌套,link表示链接到模块下的其中一篇文章,此时侧边栏就有当前模块下所有文字链接
      { text: 'vitepress', activeMatch: '/vitepress/', link: '/vitepress/markdown指南' },
      { text: 'test', activeMatch: '/test/', link: '/test/测试' },
    ],
  },
] as DefaultTheme.NavItem[];
