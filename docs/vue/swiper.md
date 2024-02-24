# 🍀swiper [英文网](https://swiperjs.com/vue)  [中文网](https://www.swiper.com.cn/api/index.html)

## 常用配置项

### Navigation

:::demo
```vue
<template>
  <swiper
    ref="mySwiperRef"
    class="mySwiper"
    :speed="500"
    :navigation="true"
  >
    <swiper-slide v-for="img in list" :key="img">
      <div class="item">
        <img :src="img" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import _mock from 'mockjs';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';

  const mySwiperRef = ref<any>();


  const list = ref(
    Array.from({ length: 10 }, (_, i) =>
      _mock.Random.image('400x300', _mock.mock('@color'), '#fff', `swiper${i}`)
    )
  );
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 500px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
```
:::

### loop

:::demo
```vue
<template>
  <swiper
    ref="mySwiperRef"
    class="mySwiper"
    :speed="500"
    :loop="true"
  >
    <swiper-slide v-for="img in list" :key="img">
      <div class="item">
        <img :src="img" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import _mock from 'mockjs';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';

  const mySwiperRef = ref<any>();


  const list = ref(
    Array.from({ length: 10 }, (_, i) =>
      _mock.Random.image('400x300', _mock.mock('@color'), '#fff', `swiper${i}`)
    )
  );
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 500px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
```
:::

### Pagination

:::demo
```vue
<template>
  <swiper
    ref="mySwiperRef"
    class="mySwiper"
    :speed="520"
    :modules="modules"
    :pagination="true"
  >
    <swiper-slide v-for="img in list" :key="img">
      <div class="item">
        <img :src="img" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import _mock from 'mockjs';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';

  const modules = ref([Pagination]);


  const mySwiperRef = ref<any>();

  const list = ref(
    Array.from({ length: 10 }, (_, i) =>
      _mock.Random.image('400x300', _mock.mock('@color'), '#fff', `swiper${i}`)
    )
  );
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 500px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
```
:::

### Vertical

:::demo
```vue
<template>
  <swiper
    ref="mySwiperRef"
    class="mySwiper"
    :speed="500"
    direction="vertical"
  >
    <swiper-slide v-for="img in list" :key="img">
      <div class="item">
        <img :src="img" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import _mock from 'mockjs';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';

  const mySwiperRef = ref<any>();


  const list = ref(
    Array.from({ length: 10 }, (_, i) =>
      _mock.Random.image('400x300', _mock.mock('@color'), '#fff', `swiper${i}`)
    )
  );
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 500px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
```
:::

## 使用swiper实现循环滚动列表

:::demo
```vue
<template>
  <swiper
    direction="vertical"
    :initialSlide="0"
    :slidesPerView="5"
    :loop="true"
    class="mySwiper"
    :modules="modules"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="i in 10">
      <div class="item">{{ i }}</div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import { Autoplay } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';

  // import required modules

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
</script>

<style scoped>
  .mySwiper {
    height: 500px;
  }
  .item {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
```
:::

## swiper3d立方体

:::demo
```vue
<template>
  <swiper
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide
    ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide
    >
    <swiper-slide
    ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide
    >
    <swiper-slide
    ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg"/></swiper-slide
    >
    <swiper-slide
    ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import {EffectCube, Pagination} from "swiper";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination],
    };
  },
};
</script>
```
:::

## active

:::demo
```vue
<template>
  <swiper
      class="mySwiper"
      :slidesPerView="5"
      :centeredSlides="true"
      :loop="true"
      :initialSlide="3"
      :modules="[Autoplay]"
      :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="img in list" :key="img">
      <div class="item">
        <img :src="img" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import {ref} from "vue";
import _mock from "mockjs";

const list = ref(
    Array.from({length: 15}, (_, i) =>
        _mock.Random.image(
            '400x300',
            _mock.mock('@color'),
            '#fff',
            `swiper${i}`
        )
    )
);
</script>

<style scoped lang="less">
  .mySwiper {
    height: 220px;
    padding: 50px 0;

    .item {
      height: 120px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-slide.swiper-slide-active {
      transform: scale(1.3);
      z-index: 10;
    }
    .swiper-slide.swiper-slide-next,
    .swiper-slide.swiper-slide-prev {
      transform: scale(1.2);
      z-index: 5;
    }

  }
</style>
```
:::

<git-talk />
