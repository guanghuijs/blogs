<script lang="ts" setup>
  import { ref } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { message } from 'ant-design-vue';
  import { iconList } from './data';

  const source = ref('');
  const copyIconFn = (iconName: string) => {
    source.value = iconName;
    copy();
    message.success(`复制成功😆: ${source.value}`);
  };
  const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <div>
    <client-only>
      <h-button
        v-for="iconName in iconList"
        :key="iconName"
        @click="copyIconFn(`<h-icon name='${iconName}'></h-icon>`)"
      >
        <div class="icon-show-box">
          <h-icon :name="iconName" size="16px"></h-icon>
        </div>
      </h-button>
    </client-only>
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
