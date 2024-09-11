---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home

title: GUANGHUI's BLOGS
titleTemplate: 

hero:
  name: "GUANGHUI's BLOGS"
  text: 📌. 1️⃣📝🌎
  tagline: 喜欢👩‍🎤💃🗣️🏀
  actions:
    - theme: brand
      text: 🔩GHUI🍀
      link: /ghui/guide/搭建组件库流程
    - theme: alt
      text: 📝GH's BLOGS🌿
      link: /api-examples
  image:
    src: /logo.webp

features:
- icon: 🛞
  title: 组件库
  details: 一个写起玩的移动端UI库
  link: /ghui/guide/1.简介

- icon: 📝
  title: 博客
  details: 日常工作、学习踩坑记录
  link: /JavaScript/JS基础

- icon: 🖥️
  title: ReactMacOs
  details: React mac 桌面系统
  link: https://guanghuijs.gitee.io/react-mac-os-ui

- icon: 💾
  title: 算法
  details: 我不会算法

- icon: 🌲
  title: 励志文学
  details: 迷茫的时候看一看

- icon: 📑
  title: 日记
  details: 日常工作、学习踩坑记录
---

<git-talk style="padding: 0 24px"></git-talk>

<Home></Home>

<script setup lang='ts'>
import { Home } from '@packages/components';
</script>
