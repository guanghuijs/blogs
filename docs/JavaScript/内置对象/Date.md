# Date

[JSDate内置对象mdn文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 通过学期开始结束时间字符串计算学期周次
### 前言
最近项目中遇到一个需求,就是给两个时间段字符串,学期开始日期和结束日期('2023-03-01','2013-07-05'),计算出学期的周次,若开始日期不是周一,则把该周之前的天步入其中,结尾日期同理。

### 思路
先将字符串用new Date(),创建开学日期对象,在计算出周几,再用setDate方法往前设置到周一,最后得出结果:
```ts
const star = new Date('2023-03-01');
const realStar = star.setDate(star.getDate() - [6, 0, 1, 2, 3, 4, 5][star.getDay()]);
```
结束时间同理:
```ts
const end = new Date('2023-07-05');
const realStar = end.setDate(end.getDate() + [0, 6, 5, 4, 3, 2, 1][end.getDay()]);
```

:::demo
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { dateFormat } from '/utils/date.helper';

  const star = new Date('2023-03-01');
  const end = new Date('2023-07-05');

  const realStar = ref(
    dateFormat(
      'yyyy-MM-DD',
      star.setDate(star.getDate() - [6, 0, 1, 2, 3, 4, 5][star.getDay()])
    )
  );

  const realEnd = ref(
    dateFormat(
      'yyyy-MM-DD',
      end.setDate(end.getDate() + [0, 6, 5, 4, 3, 2, 1][end.getDay()])
    )
  );
</script>

<template>
  <h3>开始时间</h3>
  {{ realStar }}
  <h3>结束时间</h3>
  {{ realEnd }}
</template>
```
:::

## 计算日历月

### 前言
> 之前尝试过用js实现日历,记录一下

:::demo
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { weeks, DateHelper } from '/utils/date.helper';
  const dateHelper = ref(DateHelper());
</script>

<template>
  <div class="calendar">
    <div class="calendar-week">
      <div class="week-item" v-for="week in weeks" :key="week">
        {{ week }}
      </div>
    </div>
    <div class="calendar-main">
      <div
        class="prev-day"
        v-for="prevDay in dateHelper.calendarPrevArr"
        :key="prevDay"
      >
        {{ prevDay }}
      </div>
      <div class="currentMonth-day" v-for="day in dateHelper.days">
        {{ day }}
      </div>
      <div class="after-day" v-for="afterDay in dateHelper.calendarAfter">
        {{ afterDay }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .calendar-week {
    display: flex;
    align-items: center;
    div {
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
    }
  }

  .calendar-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    div {
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
    }
    .after-day,
    .prev-day {
      opacity: 0.5;
    }
  }
</style>
```
:::


## 计算聊天列表的时间
>之前项目需求类似qq微信格式化聊天列表的时间,就简单尝试着做了一下

:::demo
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { chatDateFormat, dateFormat,list } from '/utils/date.helper';
  const chatRecord = ref(list());
</script>

<template>
  <div class="container">
    <div class="item" v-for="{ name, time, img, content } in chatRecord">
      <img :src="img" />
      <div class="item-right">
        <div class="item-right-top">
          <div>{{ name }}</div>
          <span>
            {{ dateFormat('yyyy-MM-DD hh:mm', time) }} |
            <span style="color: red">{{ chatDateFormat(time) }}</span>
          </span>
        </div>
        <div class="content">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    max-height: 600px;
    overflow-y: scroll;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px #aaaaaa solid;
      img {
        width: 120px;
        height: 120px;
      }
      .item-right {
        width: calc(100% - 140px);
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item-right-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            font-size: 18px;
            font-weight: bold;
          }
          span {
            color: #aaa;
          }
        }
        .content {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
```
:::

<git-talk />
