# 进度条
<t-frame src='https://guanghuijs.gitee.io/ghui-next/#/progressBar' />

## 基础用法
```vue
<template>
  <HProgressBar v-model:value="value" />
  <div>
    <HButton @click="value = mock({ 'm|1-100': 0 }).m">随机进度</HButton>
  </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { mock } from 'mockjs';
    const value = ref(40);
</script>
```
## 大小、颜色、宽度设置
```vue
<template>
  <HProgressBar v-model:value="value" color="red" :size="70" />
  <HProgressBar
    v-model:value="value"
    bg-color="black"
    color="red"
    :size="100"
  />
  <HProgressBar v-model:value="value" :width="20" :size="150" />
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { mock } from 'mockjs';
    const value = ref(40);
</script>
```
## 普通进度条
```vue
<template>
  <HProgressBar v-model:value="value" :line="true" />
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { mock } from 'mockjs';
    const value = ref(40);
</script>
```
