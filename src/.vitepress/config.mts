import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/', //网站base url,如果你想部署到码云、github,需要与仓库名一样
  outDir: './../docs', //打包输出目录
  title: 'ikun', //网站标题
  titleTemplate: '我是ikun', //网站副标题
  description: '你才是小黑子',
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    }, //markdown中使用代码块
    lineNumbers: true,
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    server: {
      // proxy: {
      //   '/api': {
      //     //把以/api开头的api拼接target属性
      //     target: 'http://localhost:9999/api',
      //     changeOrigin: true, //开启同源策略
      //     rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
      //   },
      // },
    },
  },
  vue: {
    script: {
      propsDestructure: true,
      defineModel: true,
    },
  },
  head: [['link', { rel: 'icon', type: 'image/webp', href: '/blogs/logo.webp' }]], //网页logo配置,浏览器tab页logo
  themeConfig, //主题配置
  rewrites:{
    // 'blogs/:module/:article':':module/:article'
  },
});
