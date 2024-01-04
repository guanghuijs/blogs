<script lang="ts" setup>
  import { ref } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { toast } from 'vue-ghui';
  import { iconList } from './data';

  const source = ref('');
  const copyIconFn = (iconName: string) => {
    source.value = iconName;
    copy();
    toast({ message: `${source.value}` });
  };
  const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <div>
    <a-button></a-button>
    <h-button
      v-for="iconName in iconList"
      :key="iconName"
      @click="copyIconFn(`<h-icon name='${iconName}'></h-icon>`)"
    >
      <div class="icon-show-box">
        <h-icon :name="iconName"></h-icon>
      </div>
    </h-button>
  </div>
</template>

<style lang="less" scoped>
  .icon-show-box {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    justify-content: center;
    cursor: pointer;
  }
</style>
