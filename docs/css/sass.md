# 🎈scss
:::tip 写在最前
sass好多知识啊,感觉学笃学不完,只记录一下感觉自己会用到的,参考：[sass中文网](https://www.sass.hk/),[sass](https://sass-lang.com/documentation/),[简明上手指南](http://www.uinio.com/Web/Scss/#%E5%AE%89%E8%A3%85)
:::
## 注释
```scss
/* */css中显示，
//css中不显示，
/*重要注释!*/压缩不会被删掉
```

## 导入外部文件 
```scss
@import "../assets/scss/home.scss";
```

## 变量
:::demo
```vue
<template>
  <div class='test'>测试</div>
  <div class='test2'>测试2</div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  $color: pink;
  $theme: red !default; // 默认变量
  .test{
    $color: blue; // 局部变量
    color: $color;
    //$gBorder: 1px solid pink !global;// 可以变为全局变量
  }
</style>
```
:::


## 属性嵌套
:::demo
```vue
<template>
  <div class='test'></div>
</template>
<style lang='scss' scoped>
  .test{
    height: 100px;
    border:  {
      left: 1px salmon solid;
      right: none;
    };
    font: {
      family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      size: 18px;
      style: italic;
    };
  }
</style>
```
:::

## 继承
语法: .class { @extend .class }
:::demo
```vue
<template>
  <div class='test'>测试</div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  .extendTest{
    font: {
      family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      style: italic;
      size: 18px;
    };
    border: 1px solid #ff3d00;
  }
  .test {
    @extend .extendTest;
  }
</style>
```
:::

## 占位符%
使用% 声明的代码块，如果不被@extend调用的话就不会被编译。编译出来的代码会将相同的代码合并在一起，代码变得十分简洁。

:::demo
```vue
<template>
  <div class='test'>测试</div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  %test {
    font: {
      family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      style: italic;
      size: 18px;
    };
    border: 1px solid #ff3d00;
  }
  .test {
    @extend %test;
  }
</style>
```
:::

## 混合
重复代码块，使用混合@mixin命令定义，以及使用@include调用该mixin
:::demo
```vue
<template>
  <div class='test'>测试</div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  @mixin border($w: 1px, $c: red, $t: solid) {
    border: $w $c $t;
  }
  
  .test {
      @include border();
  }
</style>
```
:::

## 编程式写法
:::demo
```vue
<template>
  <div class='test'>测试</div>
</template>
<style lang='scss' scoped>
  .test{
    @if 3 > 5 {
      color: red;
    }
    @else {
      color: blue;
    }
  }
</style>
```
:::

## 循环(三种循环)

### for
- `@for $i from <start> to <end>`
- `@for $i from <start> through <end>`

:::tip
其中$i表示变量，start表示开始值，end表示结束值；
through表示包括end这个数值；to表示不包括end这个数值；
:::

:::demo
```vue
<template>
  <div class='container'>
    <div v-for='i in 10' :class="`item${i}`">{{i}}</div>
  </div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    @for $i from 1 to 10 {
      .item#{$i} {
        width: 100px;
        height: #{$i * 20}px;
        border: #{$i}px solid red;
      }
    }
    @for $i from 1 through 10 {
      .item#{$i} {
        color: blue;
      }
    }
  }
</style>
```
:::

### while
只要@while后面的条件为true就会执行,直到表达式值为false时停止循环;

### each

## 自定义函数
:::demo
```vue
<template>
  <div class='container'>
    <div  v-for='i in 5' :class='`item${i}`'>测试</div>
  </div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
  @function color(){
    @return rgba(random(255),random(255),random(255));
  }
  .container{
    @each $item in item1, item2, item3, item4, item5 {
      .#{$item}{
        color: color();
      }
    }
  }
</style>
```
:::



<git-talk />
