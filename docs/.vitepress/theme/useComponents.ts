import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import Antd from 'ant-design-vue';
import { GitTalk, TFrame } from './components';

export async function useComponents(app) {
  app.component('git-talk', GitTalk);
  app.component('t-frame', TFrame);
  app.component('demo', Demo);
  app.use(Antd);
  if (!import.meta.env.SSR) {
    const hui = await import('guanghui-ui');
    app.use(hui.default);
  }
}
