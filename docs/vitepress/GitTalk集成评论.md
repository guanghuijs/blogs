https://github.com/gitalk/gitalk/blob/master/readme-cn.md
# GitTalk集成评论

## 安装
```bash
npm i --save gitalk
```

## 使用
:::warning 使用提示⛺
首先，您需要选择一个公共github存储库（已存在或创建一个新的github存储库）用于存储评论, 然后需要创建 GitHub Application, 如果没有 [点击这里申请](https://github.com/settings/applications/new), Authorization callback URL 填写当前使用插件页面的域名。
:::
- GitHub Application申请填写
```text
Application name: talk //随便写
Homepage URL: https://guanghuijs.gitee.io/blogs //我是把博客部署在gitee上pages上，所以填写这个
Authorization callback URL: https://guanghuijs.gitee.io/blogs
```

- 创建评论组件,填写响应配置填上
```vue
<template>
  <div class="gitalk" v-bind="$attrs">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
  import md5 from 'md5';
  import Gitalk from 'gitalk';
  import 'gitalk/dist/gitalk.css';
  export default {
    name: 'git-talk',
    data() {
      return {};
    },
    mounted() {
      const commentConfig = {
        clientID: '792d********27e70', // 创建GitHub Application生成
        clientSecret: '7ee8730da2*********9cf45bd6cf529',// `Generate a new client secret`生成
        repo: 'blogs', // 博客仓库名
        owner: 'guanghuijs', // 自己的GitHub名
        admin: ['guanghuijs'], // 自己的GitHub名
        id: md5(location.pathname), // 页面的唯一标识。长度必须小于50。
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    },
  };
</script>
<style lang="less">
  //这里我兼容了切换主题
  .gitalk {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .gt-svg {
      fill: #67676c;
    }
    .gt-container .gt-btn {
      border: none;
      background: #3e63dd;
      transition: all 0.25s;
      &:hover {
        background: #5c73e7;
      }
    }
    .gt-container .gt-btn-preview {
      color: white;
    }
  }

  .dark {
    .gt-svg {
      fill: #98989f;
    }
    .gt-header-textarea {
      background: #161618;
      &:hover {
        background: #2b2b2d;
      }
    }
    .gt-comment-content {
      background: #161618 !important;
      &:hover {
        box-shadow: none !important;
      }
    }
    .gt-comment-body.markdown-body {
      color: #aaa !important;
    }
    .gt-container .gt-meta {
      border-bottom: 1px solid #333;
    }
    .gt-header-preview.markdown-body {
      color: #aaa;
      background: #161618;
      &:hover {
        background: #2b2b2d;
      }
    }
  }
</style>
```

## 全局注册

```ts
// .vitepress/theme/index.ts
import { h } from 'vue';
import Theme from 'vitepress/theme';
import { GitTalk } from './components';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('git-talk', GitTalk);
  },
};
```

## 在markdown中使用

```md
<git-talk></git-talk>
```

<git-talk />
