# Toast（轻提示）
<t-frame src='https://guanghuijs.gitee.io/ghui-next/#/space' />

## 基础用法
```vue
<template>
  <HSpace :size="size">
    <HButton @click="size = 10" type="primary">10</HButton>
    <HButton @click="size = 20" type="primary">20</HButton>
    <HButton @click="size = 30" type="primary">30</HButton>
    <HButton @click="size = 40" type="primary">40</HButton>
  </HSpace>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const size = ref(10);
</script>
```
