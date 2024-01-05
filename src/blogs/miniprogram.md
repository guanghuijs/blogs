# [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 循环遍历
- 使用默认索引、元素
```html
<view wx:for="{{list}}" wx:key="*this">
    索引:{{index}} 元素:{{item}}
</view>
```
- 自定义索引、元素
```html
<view wx:for="{{list}}" wx:key="*this" wx:for-index="idx" wx:for-item="v">
    索引:{{idx}} 元素:{{v}}
</view>
```
- wx:key
  - 当遍历对象数组,每个元素有唯一的属性值,例如id
    ```html
    <view wx:for="{{stuList}}" wx:key="id">
        索引:{{index}} 元素:{{item.id}} {{item.name}} {{item.score}}
    </view>
    ```
  - 当遍历非对象数组,元素不能使用属性作为key
    ```html
    <view wx:for="{{list}}" wx:key="*this">
        索引:{{index}} 元素:{{item.id}} {{item.name}} {{item.score}}
    </view>
    ```


::: warning tips
如不提供 wx:key，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。
:::

```js
Component({
    data:{
        list:["a","b","c"],
        stuList:[
            {id:1,name:"zhang",score:90},
            {id:2,name:"li",score:80},
            {id:3,name:"wang",score:70},
        ]
    }
})
```


## 事件

### 事件绑定
>写法和组件属性一致,以key="value"的形式,key表示事件类型,value是对应的函数名称。
- 以bind或者catch开头,跟上事件的类型,如bindtap,catchtouchstart 。
- bind事件绑定不会阻止冒泡事件向上冒泡,catch事件绑定阻止冒泡事件向上冒泡。
- 事件有冒泡阶段和捕获阶段。
- 自基础库版本1.5.0起,bind和catch后可以紧跟一个冒号,其含义不变,如bind:tap、catch:touchstart。

- value是对应的函数名称,表示事件触发后执行该函数。

### 事件类型
- touchstart	手指触摸动作开始
- touchmove	手指触摸后移动
- touchcancel	手指触摸动作被打断，如来电提醒，弹窗
- touchend	手指触摸动作结束
- tap	手指触摸后马上离开
- longpress	手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
- longtap	手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
- transitionend	会在 WXSS transition 或 wx.createAnimation 动画结束后触发
- animationstart	会在一个 WXSS animation 动画开始时触发
- animationiteration	会在一个 WXSS animation 一次迭代结束时触发
- animationend	会在一个 WXSS animation 动画完成时触发
- touchforcechange	在支持 3D Touch 的 iPhone 设备，重按时会触发

### 冒泡事件和非冒泡事件
- bindtap  事件绑定不会阻止冒泡事件向上冒泡
- catchtap  事件绑定可以阻止冒泡事件向上冒泡

```html
<view class="title">事件冒泡</view>
<view class="bubbling" bindtap="fFn">
  <view bindtap="cFn">子元素</view>
</view>
<view class="title">阻止事件冒泡</view>
<view class="bubbling" bindtap="fFn">
  <view catchtap="cFn">子元素</view>
</view>
<view class="title">事件捕获</view>
<view class="bubbling" capture-bind:tap="fFn">
  <view capture-bind:tap="cFn">子元素</view>
</view>
```

### 冒泡阶段与捕获(capture)阶段
> 如果你将 p 元素插入到 div 元素中，用户点击 p 元素, 哪个元素的 "click" 事件先被触发呢？
> 
> 冒泡中，内部元素的事件会先被触发，然后再触发外部元素。 
> 
> 捕获中，外部元素的事件会先被触发，然后才会触发内部元素的事件。

- bind  冒泡事件、冒泡阶段
- capture-bind  冒泡事件、捕获阶段
- catch  非冒泡事件、冒泡阶段
- capture-catch  非冒泡事件、捕获阶段

### 事件绑定自定义传参
```html
<view class="bubbling" bindtap="ccFn"
  id="id_987461515"
  data-hello="你好"
  name="wgh">
  事件传参
</view>
```
```ts
console.log(e); // {type: "tap", timeStamp: 736402, target: {…}, currentTarget: {…}, mark: {…}, …}
console.log(e.target.id); // id_987461515
console.log(e.target.name); // undefined
console.log(e.target.dataset); // {hello: "你好"}
console.log(e.currentTarget.dataset); // {hello: "你好"}
```
## 过滤器
- wxs中定义
```js
// filter.wxs
function coreFilter (core) {
  if(core >= 90) {
    return '优秀'
  }else if(core >= 80){
    return '良好'
  }else{
    return '一般'
  }
}
module.exports = {
  coreFilter:coreFilter
}
```
- wxml中引入使用
```html
<wxs src="filter.wxs" module='filter'></wxs>
<view>{{filter.coreFilter(90)}}</view>
<view>{{filter.coreFilter(88)}}</view>
<view>{{filter.coreFilter(79)}}</view>
<view>{{filter.coreFilter(66)}}</view>
```

## 页面跳转url携参数

- 点击事件跳转url拼接参数
```js
wx.navigateTo({
  url: '../search_result/search_result?searchVal=' + this.data.searchValue 
  // url: '../search_result/search_result?searchVal=' + this.data.searchValue + '&name=wgh'
})
```
- 目标页面onLoad事件接收
```js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:any) {
    console.log(options); // {searchVal: "大果", name: "wgh"}
  }
})
```

## 聊天记录时间格式化

## 组件通讯

### 父组件向子组件传递自定义属性
- 子组件
```ts
// 子组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    }
  },
})
```
- 父组件
```html
<com-a title="我系渣渣辉"></com-a>
```

### 获取子组件实例调用子组件方法

- 父组件中使用子组件时添加id属性

```html
  <com-a id="comA" title="我系渣渣辉"></com-a>
```

- 通过id获取组件实例

```js
  this.selectComponent('#comA').add();
```

### 子组件触发父级组件自定义事件
- 子组件
```js
this.triggerEvent('coma', '我是comA');
```
- 父组件
```html
<com-a id="comA" bind:coma="comaMsg" title="我系渣渣辉"></com-a>
```

### 组件上的双向绑定

- 父组件使用子组件时通过model:propName双向绑定
```html
  <com-b model:visible="{{visible}}" model:value="{{comValue}}"></com-b>
```

- 子组件定义属性接收
```js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible:{
      type: Boolean,
      value: true
    },
    value: {
      type: String,
      value: '默认值'
    }
  },
})
```

- 子组件中使用setData改变属性父组件数据也随之改变
```ts
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    onVisibleChange(e:any) {
      this.setData({
        visible: e.detail.visible,
      });
    },
    setValue() {
      this.setData({
        value: '我系渣渣辉'
      })
    }
  }
})
```

## 页面json常用配置

### 页面标题
```json
{
  "navigationBarTitleText": "发布留言"
}
```

### 组件引入
```json
{
  "usingComponents": {
    "t-image": "tdesign-miniprogram/image/image",
    "t-input": "tdesign-miniprogram/input/input",
    "t-icon": "tdesign-miniprogram/icon/icon",
    "t-button": "tdesign-miniprogram/button/button"
  }
}
```

### 自定义页面头部颜色
```json
{
  "navigationBarBackgroundColor": "#E9C539"
}
```

### 开启自定义导航
```json
{
  "navigationStyle": "custom"
}
```

## 自定义路径别名
> //app.json
```json
{
  "resolveAlias": {
    "@app/*": "/*",
    "@api/*": "/api/*",
    "@lib/*": "/lib/*",
    "tdesign-miniprogram/*": "/miniprogram_npm/tdesign-miniprogram/*"
  }
}
```

## 微信小程序使用插槽

- 默认插槽

```html
<!--组件index.wxml-->
<view>
  <slot></slot>
</view>
```

```html
<view class="container">
  <comA>
    你好
  </comA>
</view>
```

- 具名插槽

```html
<!--组件index.wxml-->
<view>
  <slot name="a"></slot>
</view>
```

```html
<!--组件使用-->
<view class="container">
  <comA>
    <view slot="a">
      <van-button>按钮</van-button>
    </view>
  </comA>
</view>
```

## ios底部高度变量

```less
env(safe-area-inset-bottom);
```

## 状态栏高度获取
```ts
page({
  async onLoad() {
    this.setData({
      navH: (await wx.getSystemInfo()).statusBarHeight
    })
  }
})
```





