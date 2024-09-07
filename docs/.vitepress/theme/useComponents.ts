import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import Antd from 'ant-design-vue';
import { GitTalk, TFrame } from './components';

export function useComponents(app) {
  app.component('git-talk', GitTalk);
  app.component('t-frame', TFrame);
  app.component('demo', Demo);
  app.use(Antd);
}
