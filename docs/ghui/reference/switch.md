# 开关
<t-frame src='https://guanghuijs.github.io/guanghui-ui/#/switch' />

## 基础用法
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <HSwitch v-model:value="value"></HSwitch>
</template>
```

## 设置大小
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <HSwitch v-model:value="value" :size="24"></HSwitch>
  <HSwitch v-model:value="value" :size="36"></HSwitch>
</template>
```

## 设置主题颜色
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <HSwitch v-model:value="value" theme="pink"></HSwitch>
  <HSwitch v-model:value="value" theme="#1989FA"></HSwitch>
</template>
```
