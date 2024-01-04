import { readNoteFilesInDir } from './utils';

export default {
  '/blogs/vitepress/': readNoteFilesInDir('/blogs/vitepress', [
    '项目初始化',
    '目录解析',
    '主题配置',
    '全局api',
    'markdown指南',
    'GitHubIssues集成评论',
  ]),
  '/blogs/JavaScript/': readNoteFilesInDir('/blogs/JavaScript', []),
  '/blogs/html/': readNoteFilesInDir('/blogs/html', []),
  '/blogs/vue/': readNoteFilesInDir('/blogs/vue', []),
};
