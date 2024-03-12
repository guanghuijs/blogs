<div align="center">
    <img alt="logo" src="docs/public/logo.webp" width="240" height="240" >
</div>
<h3 align="center">📌一个基于<a href="https://vitepress.dev/zh" target="_blank">vitepress</a>搭建的静态博客网页。</h3>
<p style="font-size: 36px;font-weight: bold" align="center">GUANGHUI's BLOGS</p>

## 项目地址

- 🌍 [GitHub仓库地址](https://github.com/guanghuijs/blogs)
- 🌍 [gitee仓库地址](https://gitee.com/guanghuijs/blogs)
- 🌍 [预览地址](https://guanghuijs.gitee.io/blogs)

## 目录解析

```text
├─docs 打包目录,方便部署到GitHub
└─src
    ├─.vitepress  vitepress相关配置文件夹
    │  ├─cache  打包缓存
    │  │  └─deps
    │  ├─sidebar  侧边栏配置
    │  └─theme  主题配置
    │      └─components  全局组件
    │          └─src
    ├─blogs  博文存放
    │  ├─git 博文分类
    │  ├─JavaScript
    │  ├─vitepress
    │  └─vue
    ├─components  博文公共组件
    │  ├─ghui
    │  └─home
    │      └─icon
    ├─ghui  ui库文档
    │  ├─guide
    │  └─reference
    ├─public  公共静态资源文件
    │  └─bg
    └─snippets  指令引导展示
```

## 项目运行

```bash
git clone https://gitee.com/guanghuijs/blogs
cd blogs
pnpm i
pnpm dev
````

## 做同款

- 🍒 拉取[模板分支](https://gitee.com/GUANGHUIJs/blogs/tree/emptytemplate)


## Git 提交规范
> 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
- 🍐 `feat` 增加新功能
- 🍐 `fix` 修复问题/BUG
- 🍐 `style` 代码风格相关无影响运行结果的
- 🍐 `perf` 优化/性能提升
- 🍐 `refactor` 重构
- 🍐 `revert` 撤销修改
- 🍐 `test` 测试相关
- 🍐 `docs` 文档/注释
- 🍐 `chore` 依赖更新/脚手架配置修改等
- 🍐 `workflow` 工作流改进
- 🍐 `ci` 持续集成
- 🍐 `types` 类型定义文件更改
- 🍐 `wip` 开发中
- 🍐 `build` 打包提交


## todo
- 🥕 学习代码统一仓库存放
- 🥕 vue2 vue3笔记 vue3.3 vue3.4学习日志
- 🥕 博客重构
- 重构博客先写大纲
- dart flutter笔记 工作记录
- 博客跟新 csdn 掘金 知乎 微信公众号
- 学习nodejs
- 温故知新 博客重构
- vitepress 笔记 自动生成侧边栏插件使用
- git笔记 多平台仓库同步
- 学习短视频
- 制作博客头尾 关注引导


