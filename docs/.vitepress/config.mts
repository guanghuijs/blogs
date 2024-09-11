import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // todo 网站base url,如果你想部署到码云、github,需要与仓库名一样
  base: '/blogs/',
  outDir: './../dist', //打包输出目录
  // todo 修改网站标题
  title: 'iKun BLOGS',
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
      // 自动识别markdown文件生成侧边栏
      AutoSidebar({
        prefix: '.',
        // 这里可以忽略识别目录
        ignoreList: ['public'],
        // 删除标题前缀
        deletePrefix: RegExp(/^\d+\s*\.\s*/),
        collapsed: false,
      }),
    ],
  },
  vue: {
    script: {
      defineModel: true,
    },
  },
  // todo 网页logo配置,浏览器tab页logo 直接到public目录下替换logo文件，记得检查后缀名
  head: [['link', { rel: 'icon', type: 'image/webp', href: '/blogs/logo.webp' }]],
  themeConfig, //主题配置
});
