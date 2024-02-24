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
