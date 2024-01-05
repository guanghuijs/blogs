# Transition

> `<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：
> - 由 v-if 所触发的切换
> - 由 v-show 所触发的切换
> - 由特殊元素 `<component>` 切换的动态组件
> - 改变特殊的 key 属性

## 最基本用法
:::demo
```vue
<template>
  <button @click="show = !show">Toggle</button>
  <transition>
    <div v-if="show">1</div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const show = ref(true);
</script>
<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
```
:::

## 取名
:::demo
```vue
<template>
  <button @click="show = !show">Toggle</button>
  <transition name='fade'>
    <div v-if="show">1</div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const show = ref(true);
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
```
:::

## 使用animation

:::demo
```vue
<template>
  <button @click="show = !show">Toggle</button>
  <transition name='bounce'>
    <div style='width: 100px;height: 100px;background: red' v-if="show">1</div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const show = ref(true);
</script>
<style>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(10);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
```
:::

## 过渡复用

::: details 过渡封装
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';

  const names = ['', 'fade', 'bounce'];
  const name = ref('');
  const onEnter = () => {};
  const onLeave = () => {
    name.value = name[mock.Random.integer(0, 2)];
  };
</script>

<template>
  <Transition :name="name" @enter="onEnter" @leave="onLeave" v-bind="$attrs">
    <slot></slot>
  </Transition>
</template>

<style lang="less" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(10);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
```
:::

:::demo

```vue
<template>
  <a-button @click='toggle'>toggle</a-button>
  <MyTransition mode='out-in'>
    <div v-if='num === 0' style='background: pink'>喜欢唱跳rap篮球</div>
    <div v-else-if='num === 1' style='width: 100px;height: 100px;background: blue'>你干嘛,哎呦</div>
    <div v-else-if='num === 2'>食不食油饼</div>
  </MyTransition>
</template>
<script setup lang='ts'>
  import { ref } from 'vue';
  import mock from 'mockjs';
  import MyTransition from "./components/transition.vue";
  const num = ref(0)
  const toggle = () => {
    num.value = mock.Random.integer(0,2);
  }
</script>
```
:::