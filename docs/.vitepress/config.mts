import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/', //网站base url,如果你想部署到码云、github,需要与仓库名一样
  outDir: './../dist', //打包输出目录
  title: "GUANGHUI's BLOGS", //网站标题
  markdown: {
    //markdown中使用代码块
    config: (md) => {
      md.use(demoblockPlugin);
    },
    lineNumbers: true,
  },
  vite: {
    plugins: [
      demoblockVitePlugin(),
      AutoSidebar({
        prefix: '.',
        ignoreList: ['public'],
        deletePrefix: RegExp(/^\d+\s*\.\s*/),
        collapsed: false,
        beforeCreateSideBarItems(data) {},
      }),
    ],
  },
  head: [['link', { rel: 'icon', type: 'image/webp', href: '/blogs/logo.webp' }]], //网页logo配置,浏览器tab页logo
  themeConfig, //主题配置
});
