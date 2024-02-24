# Popup
<t-frame src='https://guanghuijs.gitee.io/ghui-next/#/popup' />

## 不同方向
```html
<h-popup v-model:open="leftOpen" position="left"> </h-popup>
<h-popup v-model:open="rightOpen" position="right"> </h-popup>
<h-popup v-model:open="bottomOpen" position="bottom"> </h-popup>
<h-popup v-model:open="topOpen" position="top"></h-popup>
```
## 自定义宽高
```html
<h-popup v-model:open="heightOpen" position="bottom" height="200px">
```
## 带关闭图标
```html
<h-popup v-model:open="closeableOpen" closeable></h-popup>
```
## 自定义内容填充&高度由内容撑开
```html
<h-popup v-model:open="contentOpen" height="auto">
  <div style="padding: 15px">我系渣渣辉</div>
</h-popup>
```
