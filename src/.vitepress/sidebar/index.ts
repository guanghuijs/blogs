import { readNoteFilesInDir } from './utils';

export default {
  '/blogs/vitepress/': readNoteFilesInDir('/blogs/vitepress', [
    '项目初始化',
    '目录解析',
    '主题配置',
    '全局api',
    'markdown指南',
    'GitTalk集成评论',
    'Giscus集成评论',
  ]),
  '/blogs/JavaScript/': readNoteFilesInDir('/blogs/JavaScript', []),
  '/blogs/vue/': readNoteFilesInDir('/blogs/vue', []),
  '/blogs/git/': readNoteFilesInDir('/blogs/git', []),
  '/ghui/': readNoteFilesInDir('/ghui', [
    {
      text: '引导',
      dir: 'guide',
      constants: ['简介', '快速上手', '搭建组件库流程'],
    },
    {
      text: '组件',
      dir: 'reference',
    },
  ]),
};
