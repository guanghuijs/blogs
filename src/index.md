---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home

title: GH BLOGS
titleTemplate: 逝者如斯夫,不舍昼夜。

hero:
  name: "GH BLOGS"
  text: 🍂🌻🌼🌷🌱🌲🌴
  tagline: 🍂🌻🌼🌷🌱🌲🌴
  actions:
    - theme: brand
      text: GHUI
      link: /ghui/搭建组件库流程
    - theme: alt
      text: GH BLOGS
      link: /api-examples
  image:
    src: /logo.webp

features:
- icon: 🍂
  title: 组件库
  details: 一个写起玩的移动端UI库
  link: /ghui/简介

- icon: 🌻
  title: 博客
  details: 日常工作、学习踩坑记录
  link: /blogs/JS基础

- icon: 🌼
  title: 常用网站
  details: 常用网站传送门
  link: /webpage

- icon: 🌷
  title: ReactMacOs
  details: React mac 桌面系统
  link: https://guanghuijs.gitee.io/react-mac-os-ui

- icon: 🌱
  title: 算法
  details: 我不会算法
  link: /blogs/frame/system/vue3

- icon: 🌲
  title: 励志文学
  details: 迷茫的时候看一看
  link: /blogs/frame/system/vue3

- icon: 🌴
  title: 日记
  details: 日常工作、学习踩坑记录
  link: /blogs/frame/system/vue3
---
<git-talk style="padding: 0 24px" />

<Home />

<script setup lang='ts'>
import { Home } from '/components'
</script>
