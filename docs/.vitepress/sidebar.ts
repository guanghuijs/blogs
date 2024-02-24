import { readNoteFilesInDir } from './utils';

export default {
  '/blogs/css/': readNoteFilesInDir('/blogs/css', [
    '常用片段',
    '伪类选择器',
    '弹性盒模型',
    '网格布局',
    'less',
    'sass',
    '加载动画',
  ]),
  '/blogs/vitepress/': readNoteFilesInDir('/blogs/vitepress', [
    '项目初始化',
    '目录解析',
    '项目配置',
    '全局api',
    'markdown指南',
    'GitTalk集成评论',
    'Giscus集成评论',
  ]),
  '/blogs/JavaScript/': readNoteFilesInDir('/blogs/JavaScript', [
    'JS基础',
    'JS高级',
    'es6',
    'TS',
    '面试题',
    {
      text: '内置对象',
      dir: 'built-in-objects',
      constants: ['Array', 'String', 'Date', '正则'],
    },
  ]),
  '/blogs/vue/': readNoteFilesInDir('/blogs/vue', [
    {
      text: '百度地图',
      dir: 'bMap',
      constants: [
        '百度地图初始化',
        '百度地图类型切换',
        '控件',
        '拾取经纬度',
        '添加清除覆盖物',
        '区域模式',
      ],
    },
    {
      text: '百度地图',
      dir: 'bMap',
      constants: [
        '百度地图初始化',
        '百度地图类型切换',
        '控件',
        '拾取经纬度',
        '添加清除覆盖物',
        '区域模式',
      ],
    },
  ]),
  '/blogs/architect': readNoteFilesInDir('/blogs/architect'),
  '/blogs/flutter': readNoteFilesInDir('/blogs/flutter', ['环境安装', 'dart基础']),
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
