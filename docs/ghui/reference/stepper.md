# 进步器
<t-frame src='https://guanghuijs.github.io/guanghui-ui/#/stepper' />

## 基础用法
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <HStepper v-model:value="value" />
</template>
```
## 步长设置(5)
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <HStepper v-model:value="value" :step="5" />
</template>
```
## 现在输入范围(-10,10)
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <HStepper v-model:value="value" :step="1" :range="[-10, 10]" />
</template>
```
## 设置主题色(pink)
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <HStepper v-model:value="value" theme="pink" :step="1" :range="[0, 10]" />
</template>
```
