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
        clientID: 'e190beeabc9315d3328f',
        clientSecret: 'e4b8a3c855443d84b422e6dd8dce557e4fe20d74',
        repo: 'gh-blogs',
        owner: 'SheenJs',
        admin: ['SheenJs'],
        id: md5(location.pathname),
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
