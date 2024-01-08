
# Runtime API

## theme

:::demo
```vue
<template>
  <pre>{{theme}}</pre>
</template>
<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>
<style scoped lang="less">
pre{
  font-size: 12px;
}
</style>
```
:::

## page

:::demo
```vue
<template>
  <pre>{{page}}</pre>
</template>
<script setup>
import { useData } from 'vitepress'
const {  page } = useData()
</script>
<style scoped lang="less">
pre{
  font-size: 12px;
}
</style>
```
:::

## theme

:::demo
```vue
<template>
  <pre>{{frontmatter}}</pre>
</template>
<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<style scoped lang="less">
pre{
  font-size: 12px;
}
</style>
```
:::

[more](https://vitepress.dev/reference/runtime-api#usedata)

<git-talk />
