<script setup lang="ts">
  import { webpage } from './Webpage.ts';
</script>

<template>
  <div class="container">
    <div class="item" v-for="{ title, webpages } in webpage" :key="title">
      <div class="title">{{ title }}</div>
      <div class="content">
        <a
          class="webpage"
          target="_blank"
          v-for="{ text, icon, href } in webpages"
          :key="text"
          :href="href"
        >
          <img :src="icon" />
          <div>{{ text }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    .item {
      .title {
        font-weight: bold;
      }
      .content {
        padding: 10px 0 10px;
        .webpage {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.1);
          filter: blur(80);
          line-height: 30px;
          border-radius: 4px;
          padding: 0 8px;
          margin-right: 10px;
          cursor: pointer;
          margin-bottom: 10px;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            object-fit: cover;
          }
          div {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
