# 🧣Less
:::tip 写在最前
less笔记,参考[less中文网](https://lesscss.cn/features/#features-overview-feature)
:::
## 变量
:::demo
```vue
<template>
  <div class='test'>我系渣渣辉</div>
</template>
<style lang='less' scoped>
  @select: test;
  @theme: pink;
  @base_url: '/static/img/';
  .test{
    color: @theme;
    // 插值
    background: url("@{base_url}bg.png");
    // 属性作为变量
    border: 1px solid $color;
  }
  .test:hover {
    color: darken(@theme, 10%);
  }
  .@{select} {
    height: 100px;
  }
</style>
```
:::

## 父级选择器 &
:::demo
```vue
<template>
  <div class='test'>
    我系渣渣辉
    <div class='test-a'>你洗古天乐</div>
  </div>
</template>
<style lang='less' scoped>
  .test{
    color: pink;
    &:hover{
      color: blue;
    }
    &-a {
      color: #1b7c83;
    }
  }
</style>
```
:::


## @import规则
- reference: 使用 Less 文件但不输出它
- inline: 在输出中包含源文件但不处理它
- less: 将文件视为 Less 文件，无论文件扩展名是什么
- css: 将文件视为 CSS 文件，无论文件扩展名是什么
- once: 只包含文件一次（这是默认行为）
- multiple: 多次包含文件
- optional: 找不到文件时继续编译
  每个 @import 允许多个关键字，你必须使用逗号分隔关键字：

```less
 @import (optional, reference) "foo.less";
```

## 继承

:::demo
```vue
<template>
  <div class='less-extend'>
    我系渣渣辉
  </div>
</template>
<style lang='less' scoped>
  .pre {
    color: red;
  }
  
  .less-extend:extend(.pre) {}
</style>
```
:::

## 混入

:::demo
```vue
<template>
  <div class='less-mixin'>
    <div class="test">我系渣渣辉</div>
    <div class="test2">我系渣渣辉</div>
    <div class="test3">我系渣渣辉</div>
    <div class="test4">我系渣渣辉</div>
  </div>
</template>
<style lang='less' scoped>
  .a {
    color: red;
  }

  #b {
    background: blanchedalmond;
  }

  .c {
    &:active {
      border: 1px solid black
    }
  }

  .test {
    // 加不加()镀锌
    .a;
    #b();
    .c();
  }
  
  //-----------

  .prop(@color: pink, @bg: blue) {
    color: @color;
    background: @bg;
  }

  .test2 {
    .prop();
  }

  .test3 {
    .prop(@bg: #331400) !important;
    //.border(pink)
  }
  //----------

  .box-shadow(@x: 0, @y: 0, @blur: 1px, @color: #000) {
    -webkit-box-shadow: @arguments;
    -moz-box-shadow: @arguments;
    box-shadow: @arguments;
  }
  .test4 {
    .box-shadow(2px, 5px);
  }
  
  //.test4 {
  //  -webkit-box-shadow: 2px 5px 1px #000;
  //  -moz-box-shadow: 2px 5px 1px #000;
  //  box-shadow: 2px 5px 1px #000;
  //}
</style>
```
:::

## 属性合并

:::demo
```vue
<template>
  <div class='less-merge'>
    我系渣渣辉
  </div>
</template>
<style lang='less' scoped>
  // 属性合并
  .mixin() {
    box-shadow+: inset 0 0 10px #555;
    transform+_: scale(2);
  }

  .less-merge {
    .mixin();
    box-shadow+: 0 0 20px black;
    transform+_: translateX(50px);
  }

  // .less-merge {
  //   box-shadow: inset 0 0 10px #555, 0 0 20px black;
  //   transform: rotate(15deg) scale(2);
  // }
</style>
```
:::

## 分离规则集

## 映射

## 作用域

## css守卫

## 插件


<git-talk />
