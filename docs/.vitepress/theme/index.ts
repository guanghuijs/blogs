// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import { useComponents } from './useComponents';
import './style.less';
import 'ant-design-vue/dist/reset.css';

import Layout from './Layout.vue';

export default {
  extends: Theme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    // 使用全局组件
    useComponents(app);
  },
};
