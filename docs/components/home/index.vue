<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useNow, useDateFormat } from '@vueuse/core';
  import axios from 'axios';
  import mock from 'mockjs';
  import { bgList } from './utils';
  import Search from './Search.vue';

  const mockBg = ref(`url(${bgList[mock.Random.integer(0, 10)]}) no-repeat center / cover`);
  const show = ref(false);
  const keyUpStr = ref('');

  const time = useDateFormat(useNow(), 'HH : mm');
  const date = useDateFormat(useNow(), 'MM 月 DD 日');

  const weather = ref<any>({});

  onMounted(() => {
    axios
      .get('https://www.yiketianqi.com/free/day?appid=36393322&appsecret=tK3XR3HX&unescape=1&city=')
      .then((res) => {
        weather.value = res.data;
      });

    document.addEventListener('keydown', ({ key }) => {
      keyUpStr.value += key;
      if (/.*?search$/g.test(keyUpStr.value)) {
        show.value = true;
      }
      if (/.*?close$/g.test(keyUpStr.value)) {
        show.value = false;
      }
    });
  });
</script>

<template>
  <div v-if="show" class="container">
    <div class="time">{{ time }}</div>
    <div class="date">
      {{ date }}
      周{{ ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()] }}
    </div>
    <div>
      {{ weather?.city }} {{ weather?.wea }} {{ weather?.tem_day }}℃ ~ {{ weather?.tem_night }}℃
    </div>
    <div class="search">
      <Search />
    </div>
  </div>
</template>

<style>
  body::-webkit-scrollbar {
    display: none;
  }
</style>
<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    filter: blur(10);
    background-size: 600% 600%;
    animation: gradientBG 5s ease infinite;
    background: v-bind(mockBg);
    //background: url('/bg/BG_F.webp');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f6efed;
    padding-bottom: 50px;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      backdrop-filter: blur(5px);
      z-index: -1;
    }
    .time {
      font-size: 36px;
    }
    .date {
      margin: 20px 0 5px;
    }
    .search {
      height: 30px;
      width: 30vw;
      margin-top: 20px;
    }
  }
</style>
