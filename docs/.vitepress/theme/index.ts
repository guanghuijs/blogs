// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import { useComponents } from './useComponents';

// layout扩展
import Layout from './Layout.vue';

// 组件库样式
import 'ant-design-vue/dist/reset.css';
import 'guanghui-ui/lib/style.css';

export default {
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app }) {
    // ...
    await useComponents(app);
  },
};
