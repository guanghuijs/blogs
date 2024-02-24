# Calendar（日历选择器）
<t-frame src='https://guanghuijs.gitee.io/ghui-next/#/calendar' />

## 基础用法
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const flag = ref(false);
  const date = ref('2023-08-16');
</script>

<template>
  <HButton @click="flag = true">打开{{ date }}</HButton>
  <HPopup v-model:open="flag" height="auto">
    <HCalendar v-model="date"></HCalendar>
  </HPopup>
</template>
```

