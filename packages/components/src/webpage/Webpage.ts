// 默认
import DEFAULT from './image/书签.png';

// 常用
import BAIDU from './image/百度.png';
import FANYI from './image/百度翻译.png';
import BILI from './image/bilibili.png';
import CSDN from './image/csdn.png';
import swiper from './image/swiper.png';
import Iconfont from './image/Iconfont.png';
import mdnwebdocs from './image/mdnwebdocs.png';
import css from './image/css.png';
import sass from './image/sass.png';
import less from './image/less.png';
import echarts from './image/echarts.png';
import vpn from './image/vpn.png';

// vue
import VUE from './image/Vue.png';
import antd from './image/antd.png';
import vben from './image/vben.jpg';
import vueuse from './image/vueuse.png';
import vite from './image/vite.png';
import vant from './image/vant.png';
import vitepress from './image/vitepress.webp';
import naiveUi from './image/naive-ui.png';
import vueChallenges from './image/vueChallenges.png';

//小程序
import mini_program from './image/mini_program.png';
import tdesign from './image/tdesign.png';

// 代码托管
import codeup from './image/云效codeup.png';
import github from './image/github.png';
import gitee from './image/gitee.png';

// JS
import ES6 from './image/ES6.png';

import UNIAPP from './image/UNIAPP.png';

// 可视化
import ECHART_DEMO from './image/ECHART_DEMO.png';

type Webpage = {
  title: string;
  webpages: {
    text: string;
    icon: string;
    href?: string;
  }[];
};
export const webpage: Webpage[] = [
  {
    title: '常用收集',
    webpages: [
      { text: '百度', icon: BAIDU, href: 'https://www.baidu.com' },
      { text: '哔哩哔哩', icon: BILI, href: 'https://search.bilibili.com/' },
      { text: 'CSDN', icon: CSDN, href: 'https://so.csdn.net/so/search' },
      { text: '阮一峰博客', icon: DEFAULT, href: 'http://www.ruanyifeng.com/blog/' },
      {
        text: '百度翻译',
        icon: FANYI,
        href: 'https://fanyi.baidu.com/translate#zh/en/',
      },
      {
        text: '爱激活',
        icon: DEFAULT,
        href: 'https://www.ajihuo.com/',
      },
      {
        text: 'vpn',
        icon: vpn,
        href: 'https://mojie.me',
      },
    ],
  },
  {
    title: '博客',
    webpages: [
      {
        text: '前端里',
        icon: DEFAULT,
        href: 'http://www.yyyweb.com/',
      },
      {
        text: 'w3c plus',
        icon: DEFAULT,
        href: 'https://www.w3cplus.com/',
      },
    ],
  },
  {
    title: 'VUE生态',
    webpages: [
      {
        text: 'vue3',
        icon: VUE,
        href: 'https://cn.vuejs.org/',
      },
      {
        text: 'Naïve UI',
        icon: naiveUi,
        href: 'https://www.naiveui.com/zh-CN/light',
      },
      {
        text: 'Ant Design',
        icon: antd,
        href: 'https://next.antdv.com/components/overview-cn/',
      },
      {
        text: 'VbenAdmin',
        icon: vben,
        href: 'https://doc.vvbin.cn/',
      },
      {
        text: 'vueuse',
        icon: vueuse,
        href: 'https://vueuse.org/',
      },
      {
        text: 'vite',
        icon: vite,
        href: 'https://vitejs.cn/',
      },
      {
        text: 'vant',
        icon: vant,
        href: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
      },
      {
        text: 'vitepress',
        icon: vitepress,
        href: 'https://vitejs.cn/vitepress/',
      },
      {
        text: 'vue挑战',
        href: 'https://cn-vuejs-challenges.netlify.app/',
        icon: vueChallenges,
      },
    ],
  },
  {
    title: '微信小程序生态',
    webpages: [
      {
        text: '小程序开发文档',
        icon: mini_program,
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        text: 'vantWeapp',
        icon: vant,
        href: 'https://vant-contrib.gitee.io/vant-weapp',
      },
      {
        text: 'tdesign',
        icon: tdesign,
        href: 'https://tdesign.tencent.com/miniprogram/overview',
      },
    ],
  },
  {
    title: 'UNIAPP生态',
    webpages: [
      {
        text: 'UNIAPP',
        icon: UNIAPP,
        href: 'https://uniapp.dcloud.net.cn/',
      },
    ],
  },
  {
    title: 'CSS',
    webpages: [
      {
        text: 'scss',
        icon: sass,
        href: 'https://www.sass.hk/docs/',
      },
      {
        text: 'less',
        icon: less,
        href: 'https://lesscss.cn/features/',
      },
      {
        text: 'COCO CSS',
        icon: css,
        href: 'https://www.cnblogs.com/coco1s/category/833837.html',
      },
    ],
  },
  {
    title: 'JavaScript',
    webpages: [
      {
        text: 'JS MDN',
        icon: mdnwebdocs,
        href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
      },
      {
        text: 'ES6',
        icon: ES6,
        href: 'https://es6.ruanyifeng.com/#README',
      },
      {
        text: 'TS',
        icon: DEFAULT,
        href: 'https://wangdoc.com/typescript/intro',
      },
      {
        text: 'web API',
        icon: DEFAULT,
        href: 'https://developer.mozilla.org/zh-CN/docs/Web/API',
      },
    ],
  },
  {
    title: '代码托管',
    webpages: [
      {
        text: 'Codeup',
        icon: codeup,
        href: 'https://codeup.aliyun.com/',
      },
      {
        text: 'Gitee',
        icon: gitee,
        href: 'https://gitee.com/',
      },
      {
        text: 'Github',
        icon: github,
        href: 'https://github.com/',
      },
    ],
  },
  {
    title: '可视化',
    webpages: [
      { text: 'swiper', icon: swiper, href: 'https://swiperjs.com/vue' },
      {
        text: 'echarts',
        icon: echarts,
        href: 'https://echarts.apache.org/zh/index.html',
      },
      {
        text: 'echarts demo',
        icon: ECHART_DEMO,
        href: 'https://www.isqqw.com/',
      },
      {
        text: '百度地图开放平台',
        icon: BAIDU,
        href: 'https://lbsyun.baidu.com',
      },
    ],
  },
  {
    title: 'React生态',
    webpages: [],
  },
  {
    title: '图标库',
    webpages: [
      { text: 'iconfont', icon: Iconfont, href: 'https://www.iconfont.cn/' },
      { text: 'xicons', icon: DEFAULT, href: 'https://xicons.org/' },
      { text: 'searchemoji', icon: DEFAULT, href: 'https://searchemoji.app/' },
      {
        text: 'markdown-it-emoji',
        icon: DEFAULT,
        href: 'https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs',
      },
      { text: 'yesicon', icon: DEFAULT, href: 'https://yesicon.app/' },
    ],
  },
];
