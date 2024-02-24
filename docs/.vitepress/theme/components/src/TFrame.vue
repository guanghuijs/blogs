<template>
  <iframe :src="src"></iframe>
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
  }>();
</script>

<style lang="less" scoped>
  iframe {
    width: 375px;
    height: 667px;
    position: fixed;
    right: 124px;
    z-index: 1;
    top: calc(50% - 400px);
    border: #eee solid 1px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 1600px) {
    iframe {
      position: initial;
    }
  }

  @media screen and (max-width: 600px) {
    iframe {
      width: 100%;
    }
  }
</style>
