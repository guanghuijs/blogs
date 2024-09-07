<!--基于GitHub仓库集成评论组件-->
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
      // 需要去自己代码仓库添加,可以参考vitepress目录下的 6.GitTalk集成评论
      const commentConfig = {
        clientID: '792d92*****27e70', // 创建GitHub Application生成
        clientSecret: '7ee8730da2c40f****9cf45bd6cf529', // `Generate a new client secret`生成
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
