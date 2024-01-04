import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import Antd from 'ant-design-vue';
import gitTalk from './components/git-talk.vue';
// import hui from 'vue-ghui';

export function useComponents(app) {
  app.component('demo', Demo);
  app.use(Antd);
  // app.use(hui);
  app.component('git-talk', gitTalk);
}
