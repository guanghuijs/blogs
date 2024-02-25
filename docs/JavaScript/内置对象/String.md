# String

## 字符串去除空格
:::demo
```vue
<template>
  <a-input placeholder='请输入' v-model:value='value'></a-input>
  <div>{{value.replace(/\s*/g,'')}}</div>
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const value = ref('');
</script>
```
:::

## 只允许输入数字
:::demo
```vue
<template>
  <a-input placeholder='请输入' v-model:value='value'></a-input>
  <div>{{value.replace(/\D*/g,'')}}</div>
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const value = ref('');
</script>
```
:::

## 字符串每隔四个字符加一个空格
:::demo
```vue
<template>
  <a-input placeholder='请输入' v-model:value='value'></a-input>
  <div>{{value.replace(RegExp(/(.{4})/g),'$1 ')}}</div>
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const value = ref('');
</script>
```
:::

## 输入框允许输入数字
:::demo
```vue
<template>
  <a-input placeholder='请输入' v-model:value='value' @input='fn'></a-input>
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const value = ref('');
  const fn = (e:InputEvent) => {
    value.value = e.target.value.replace(/\D*/g,'')
  }
</script>
```
:::

```ts

```
