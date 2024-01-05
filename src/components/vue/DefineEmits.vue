<script setup lang="ts">
  const emits = defineEmits<{
    change: [num: number];
    update: [num: number, ...reset: any[]];
  }>();
</script>

<template>
  <a-button @click="emits('change', 666)">按钮</a-button>
  <a-button @click="emits('update', 666, 7777, '哈哈哈')">按钮</a-button>
</template>

<style scoped lang="less"></style>
