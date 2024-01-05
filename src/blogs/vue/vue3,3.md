# 🍉 VUEJs 3.3

## 导入复杂类型支持
* 组件
```vue
<script setup lang="ts">
  // type Props = {
  //   name: string;
  //   age: number;
  // };
  import { Props } from '/components';
  // imported + intersection type
  defineProps<Props & { extraProp: string }>();
</script>
```

## DefineEmits

* 组件
```vue
<script setup lang="ts">
  const emits = defineEmits<{
    change: [num: number];
    update: [num: number, ...reset: any[]];
  }>();
</script>

<template>
  <a-button @click="emits('change', 666)">change</a-button>
  <a-button @click="emits('update', 666, 7777, '哈哈哈')">update</a-button>
</template>

<style scoped lang="less"></style>
```
* 使用
:::demo
```vue
<template>
  <DefineEmits @change='change' @update='update'></DefineEmits>
</template>
<script lang='ts' setup>
  import { DefineEmits } from '/components';
  const change = (e) => {
    console.log(e)
  }
  const update = (a,b,c) => {
    console.log(a,b,c)
  }
</script>
```
:::

## Reactive Props

* 开启自定义属性结构解析
```js
// vite
defineConfig({
  // ...
  plugins: [
    vue({
      reactivityTransform: true,
    }),]
  // ...
})
// vitepress
export default defineConfig({
  // ...
  vue: {
    script: {
      propsDestructure: true,
    },
  },
  // ...
});
```

* 组件

```vue
<script setup lang="ts">
  import { watchEffect } from 'vue';

  const { name, age } = defineProps<{
    name: number;
    age: number;
  }>();

  watchEffect(() => {
    console.log(name, age);
  });
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>
```

* 使用

:::demo
```vue
<template>
  <a-button @click='change'>change</a-button>
  <ReactiveProps v-bind='user'></ReactiveProps>
</template>
<script lang='ts' setup>
  import { ReactiveProps } from '/components';
  import { ref } from 'vue';
  const user = ref({
    name: 1,
    age: 18
  })

  const change = () => {
    user.value = {
      name: Math.random(),
      age: Math.random()
    }
  }
</script>
```
:::


## defineModel

* config中开启defineModel
```js
export default defineConfig({
  // ...
  vue: {
    script: {
      defineModel: true,
    },
  },
  // ...
});
```

* 定义子组件
```vue
<script setup>
  const modelValue = defineModel();
</script>

<template>
  <input v-model="modelValue" />
</template>
```
* 使用组件
:::demo
```vue

<script setup lang='ts'>
  import { ref } from 'vue';
  import { DefineModel } from '/components';
  const msg = ref('');
</script>

<template>
  <div>{{msg}}</div>
  <DefineModel v-model='msg'></DefineModel>
</template>
<style lang='less' scoped>
  div {
    border: 1px solid red;
    padding: 10px 0;
  }

  input {
    border: pink 1px solid;
  }
</style>
```
:::

## express test
:::demo
```vue
<template>
  <div class='test'></div>
</template>
<script lang='ts' setup>
  import axios from 'axios';
  axios({
    url:'/api/tutorials',
    method:'post',
    data:{
      title:'15451',
      description: '6666'
    }
  }).then(res => {
    console.log(res)
  })
</script>
<style lang='scss' scoped>
</style>
```
:::




