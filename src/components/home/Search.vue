<script setup lang="ts">
  import { SEARCH_ICON_LIST, searchHref } from './utils';
  import { onMounted, ref, watch } from 'vue';

  const wayShow = ref(false);
  const status = ref(0);
  const searchVal = ref('');

  const toggle = (index: number) => {
    status.value = index;
    wayShow.value = false;
  };

  const focus = (e) => {
    wayShow.value = false;
    input(e);
  };

  watch(wayShow, (value) => {
    if (value) {
      searchTips.value = [];
    }
  });

  const searchTips = ref<string[]>([]);

  const input = (e) => {
    if (status.value) return;
    const script = document.createElement('script');
    script.id = 'jsonp';
    script.src =
      'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=26350&req=2&csor=1&cb=getData&wd=' +
      e.target.value;
    document.body.appendChild(script);
  };

  onMounted(() => {
    document.addEventListener('keydown', ({ key }) => {
      if (key === 'Enter') {
        document.querySelector('#doSearch')?.click();
      }
    });
  });

  (window as any).getData = (data) => {
    searchTips.value = [];
    const script = document.querySelector('#jsonp');
    script.parentNode.removeChild(script);
    for (let i = 0; i < data?.g?.length; i++) {
      searchTips.value.push(data.g[i].q);
    }
  };
</script>

<template>
  <div class="search_box">
    <img @click="wayShow = !wayShow" title="跟换搜索引擎" :src="SEARCH_ICON_LIST[status].icon" />
    <input @focus="focus" @input="input" v-model="searchVal" placeholder="输入搜索内容" />
    <a id="doSearch" class="search_btn" target="_blank" :href="searchHref[status] + searchVal">
      搜索
    </a>
    <Transition name="tips-fade">
      <div v-show="searchTips.length" class="search_tips">
        <a target="_blank" v-for="tips in searchTips" :href="searchHref[status] + tips" :key="tips">
          {{ tips }}
        </a>
      </div>
    </Transition>
    <Transition v-show="wayShow" name="slide-fade">
      <div class="toggle_search">
        <div
          class="icon_item"
          v-for="({ text, icon }, index) in SEARCH_ICON_LIST"
          :key="text"
          @click="toggle(index)"
        >
          <img :src="icon" />
          <div>{{ text }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="less">
  .search_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding-left: 5px;
    position: relative;

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    input {
      color: #333;
      height: 30px;
      width: calc(100% - 110px);
      &::placeholder {
        color: #999;
      }
    }

    .search_btn {
      width: 80px;
      background: var(--theme);
      font-size: 12px;
      text-align: center;
      color: white;
      height: 100%;
      line-height: 30px;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }

    .toggle_search {
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      position: absolute;
      display: flex;
      left: 0;
      top: 35px;
      border-radius: 5px;
      padding: 6px;
      .icon_item {
        img {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
        display: flex;
        color: #666;
        align-items: center;
        background: rgba(255, 255, 255, 0.2);
        padding: 4px 8px;
        border-radius: 8px;
        margin-right: 10px;
        font-size: 12px;
      }
    }

    .search_tips {
      width: 100%;
      position: absolute;
      left: 0;
      top: 40px;
      background: rgba(255, 255, 255, 0.2);
      color: #222;
      font-size: 12px;
      line-height: 30px;
      overflow: hidden;
      a {
        color: #eee;
        cursor: pointer;
        display: block;
        padding: 0 20px;
        &:hover {
          color: white;
          background: pink;
        }
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.25s ease-in;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    -webkit-transform: translateX(-20px);
    opacity: 0;
  }

  .tips-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .tips-fade-enter-from,
  .tips-fade-leave-to {
    -webkit-transform: translateY(-20px);
    opacity: 0;
  }
</style>
