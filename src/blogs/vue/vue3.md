# 🖐 VUEJs3.0笔记
:::tip 写在最前
自己写笔记只为加深印象,学vue请移步到[vue官方文档](https://cn.vuejs.org/guide/quick-start.html),[vue官方日志](https://blog.vuejs.org/)
:::

## 什么是 Vue？

是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript
构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
Vue 的两个核心功能：

- **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
- **响应性**：Vue 会自动跟踪 JavaScript 状态变化并在改变发生时响应式地更新 DOM。
  你可能已经有了些疑问——先别急，后面的文档中我们会详细介绍每一个细节。现在，请继续看下去，以确保你对 Vue
  作为一个框架到底提供了什么有一个宏观的了解。

### 组合式 API (Composition API)[#](https://cn.vuejs.org/guide/introduction.html#composition-api)

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API
通常会与 [``](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue
需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

## [创建项目](https://github.com/vuejs/create-vue)

```bash
npm create vue@latest
```

根据需要选择创建配置:
![创建vue项目](https://github.com/vuejs/create-vue/raw/main/media/screenshot-cli.png?raw=true)

### 安装依赖

```bash
pnpm install
```

### 编译和热加载

```bash
pnpm run serve
```

## 模板语法

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的
HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue
能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX
支持[直接手写渲染函数](https://cn.vuejs.org/guide/extras/render-function.html)而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

### 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```html
<span>Message: {{ msg }}</span>
```

双大括号标签会被替换为相应组件实例中 `msg` 属性的值。同时每次 `msg` 属性更改时它也会同步更新。

### 原始 HTML

双大括号将会将数据插值为纯文本，而不是 HTML。若想插入
HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/api/built-in-directives.html#v-html)：

```html
<div v-html="`<i>我系古天乐</i>`"></div>
```

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个**指令**。指令由 `v-` 作为前缀，表明它们是一些由 Vue
提供的特殊 attribuite，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的
innerHTML 与 `rawHtml` 属性保持同步。

> 安全警告
>
> 在网站上动态渲染任意 HTML
> 是非常危险的，因为这非常容易造成 [XSS 漏洞](https://en.wikipedia.org/wiki/Cross-site_scripting)
> 。请仅在内容安全可信时再使用 `v-html`，并且**永远不要**使用用户提供的 HTML 内容。这样可以去吃忽略 v-html 安全警告：
>
> ```
> <!-- eslint-disable vue/no-v-html -->
> <div v-html="msgItem.noticeContent"></div>
> <!--eslint-enable-->
> ```

### Attribute 绑定

想要响应式地绑定一个 attribute，应该使用 [`v-bind` 指令](https://cn.vuejs.org/api/built-in-directives.html#v-bind)：

```html
<div v-bind:id="dynamicId"></div>
```

### 简写

因为 `v-bind` 非常常用，提供了特定的简写语法：

```html
<div :id="dynamicId"></div>
```

v-bind 可以是布尔值、动态对象：

```html
<div :obj="{name:'wgh',age:18}" :isAct="true">属性绑定测试</div>

```

### 使用 JavaScript 表达式

vue 中支持完整的 JavaScript 表达式

```html
<h3>使用JavaScript表达式</h3>
<div>{{ 1 + 4 }}</div>
<!-- 5 -->
<div>{{Math.random().toFixed(2)}}</div>
<div>{{ flag ? '你好':'我不好' }}</div>
<!-- 你好 -->
<div :class="flag ? 'act':''"></div>

<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}

```

### 动态参数

```html
<template>
  <div>
    <h3>动态参数</h3>
    <div :[eventName]="`动态参数`">动态参数</div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const eventName = ref('name');
</script>

```

编译后

## 响应式基础

### 什么是响应式？

就是 vue 示例中数据改变，视图也变。vue3 中提供了很多响应式 api:

```vue
<template>
  <div>
    <input v-model="str" />
    <div>{{ str }}</div>
  </div>
  <div>
    <input v-model="refStr" />
    <div>{{ refStr }}</div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const str = '吴光辉'; //视图不会更新
  const refStr = ref('吴光辉'); //视图更新
</script>

```

## 响应式原理

```ts
return new Proxy(temp, {
  //读取
  get(target, propName) {
    //person ==> target
    console.log('读取');
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    // 修改和增加属性都调用
    console.log('修改');
    Reflect.set(target, propName, value);
    return true;
  },
  //删除
  deleteProperty(target, propName) {
    console.log(`删除`);
    return Reflect.deleteProperty(target, propName);
  },
});

```

## 计算属性

### 作用

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。这是就是计算属性上场的时候了。计算属性就是能承载复杂模板逻辑，让模板变得精简易读。

### 计算 vue 示例中定义的变量

```vue
<template>
  <p>计算属性</p>
  <div>{{ fullName }}</div>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const person = ref({ firstName: '吴', lastName: '光辉' });
  const fullName = computed(() => {
    return person.value.firstName + person.value.lastName;
  });
</script>

```

### 也可以在列表渲染中传参使用(vue3 过滤器替代方案)

```vue
<template>
  <p>计算属性</p>
  <div v-for="({ name, price, unit }, index) in arr">
    {{ name }}{{ calPrice(price, unit) }}
  </div>
  <div v-for="item in score">
    {{ calScore(item) }}
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const arr = [
    { name: '毛衣', price: '100.00', unit: '$' },
    { name: '帽子', price: '10.00', unit: '￥' },
  ];
  const calPrice = computed(() => (price: any, unit: string) => {
    return unit + price;
  });
  const score = [90, 80, 66, 55, 50, 82, 74, 63, 68, 999, -212];
  const calScore = computed(() => (score: number) => {
    if (score >= 90 && score <= 100) {
      return '优';
    } else if (score >= 80 && score < 90) {
      return '良';
    } else if (score >= 60 && score < 80) {
      return '中';
    } else if (score >= 0 && score < 60) {
      return '差';
    } else {
      return '成绩不合法';
    }
  });
</script>

```

## 类与样式绑定

### 绑定 class

```html
<!--  class-->
<div :class="isActive ? 'active':''">啦啦啦</div>
<div :class="{ active: isActive }">啦啦啦</div>
<div :class="[{act:isActive},{red:isActive}]">啦啦啦</div>
<div class="static" :class="{ active: isActive, 'text-danger': hasError() }">
  哈哈哈
</div>

```

### 绑定 style

```html
<!--  style-->
<div style="background: red">呵呵哈哈哈</div>
<div :style="{background: 'yellow',fontSize: '15px'}">呵呵哈哈哈</div>
<div :style="isActive ? {background: 'blue'}:''">呵呵哈哈哈</div>
<!--<div :style="[{background: 'blue'},{fontSize:'18px'}]">呵呵哈哈哈</div>报错-->

```

### 自动前缀

```html
<!--  自动前缀-->
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
  红红火火恍恍惚惚或或或或或或或或
</div>

```

## 条件渲染

### v-if

指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

### v-else

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

### v-else-if

`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>

```

### `<template>` 上的 `v-if`

因为 `v-if` 是一个指令，他必须依附于某个元素。但如果我们想要切换不止一个元素呢？在这种情况下我们可以在一个 `<template>`
元素上使用 `v-if`，这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 `<template>` 元素。

### v-show

可以用来按条件显示一个元素的指令。`v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS
属性。`v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。

### v-if VS v-show

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。

总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show`
较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

## 列表渲染

### v-for 与列表(数组)

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。

```vue
<template>
  <!--  列表遍历-->
  <template v-for="({ name, sex, age }, index) in data.list" :key="index">
    <div>{{ name }}</div>
    <div>{{ sex }}</div>
    <div>{{ age }}</div>
  </template>
</template>

<script setup lang="ts">
  const Mock = require('docs/blogs/mockJs');
  import { ref } from 'vue';

  const data = ref(
    Mock.mock({
      'list|5-10': [
        {
          name: '@ctitle',
          'sex|1': [0, 1],
          'age|0-100': 1,
        },
      ],
      bookObj: {
        name: '@ctitle',
        'pages|200-400': 1,
        author: '@cname',
      },
    })
  );
</script>

```

### v-for 与对象

```vue
<template>
  <!--  对象遍历-->
  <template v-for="(key, value, index) in data.bookObj" :key="index">
    <div>{{ key }} {{ value }} {{ index }}</div>
  </template>
</template>
<script setup lang="ts">
  const Mock = require('docs/blogs/mockJs');
  import { ref } from 'vue';

  const data = ref(
    Mock.mock({
      bookObj: {
        name: '@ctitle',
        'pages|200-400': 1,
        author: '@cname',
      },
    })
  );
</script>

```

> 注意
>
> 同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。当它们同时存在于一个节点上时，`v-if` 比 `v-for`
> 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名。
>
> ```html
> <!--
> 这会抛出一个错误，因为属性 todo 此时
> 没有在该实例上定义
> -->
> <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li>
> 
> ```
>
> 在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：
>
> ```html
> <template v-for="todo in todos">
> <li v-if="!todo.isComplete">{{ todo.name }}</li>
> </template>
> 
> ```

### 通过 key 管理状态

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM
元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

为了给 Vue
一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 `key`。

```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>

```

当你使用 `<template v-for>` 时，`key` 应该被放置在这个 `<template>` 容器上：

```html
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>

```

## 事件处理

### 监听事件

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="methodName"`
或 `@click="handler"`。

事件处理器的值可以是：

1. **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)。
2. **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径。

### 内联事件处理器

内联事件处理器通常用于简单场景，例如：

```vue
const count = ref(0)
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>

```

### 事件修饰符(所有事件(表单,鼠标,键盘事件都可以修饰))

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理
DOM 事件的细节会更好。

为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**。修饰符是用 `.` 表示的指令后缀，包含以下这些：

- `.stop`
- `.prevent`
- `.self`
- `.capture`
- `.once`
- `.passive`

```html
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>

```

> 使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 `@click.prevent.self` 会阻止**
> 元素及其子元素的所有点击事件的默认行为**而 `@click.self.prevent` 则只会阻止对元素本身的点击事件的默认行为。

`.capture`、`.once` 和 `.passive`
修饰符与[原生 `addEventListener` 事件](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options)
相对应：

```html
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>

<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>

```

### 按键修饰符(修饰 keydown,keyup 事件)

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

Vue 为一些常用的按键提供了别名：

- `.enter`
- `.tab`
- `.delete` (捕获“Delete”和“Backspace”两个按键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

系统按键

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

### 鼠标修饰符

- `.left`
- `.right`
- `.middle`

## 表单输入绑定

在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：

```html
<input :value="text" @input="event => text = event.target.value" />

```

`v-model` 指令帮我们简化了这一步骤：

```html
<input v-model="text" />

```

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` property 并侦听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` property 并侦听 `change` 事件；
- `<select>` 会绑定 `value` property 并侦听 `change` 事件。

```vue
<template>
  <h3>表单输入绑定</h3>
  <input :value="text" @input="(event) => (text = event.target.value)" />
  {{ text }}
  <h3>v-model{{ text }}</h3>
  <input v-model="text" />
  <h3>绑定复选框文本域</h3>
  <div>
    <input v-model="flag" type="checkbox" />
    {{ flag }}
    <div></div>
    <textarea v-model="text"></textarea>
  </div>
  <h3>单选按钮</h3>
  <div>
    <div>
      <label>
        <input type="radio" name="sex" value="男" v-model="sex" />
        男
      </label>
      <label>
        <input type="radio" name="sex" value="女" v-model="sex" />
        女
      </label>
      <div>{{ sex }}</div>
    </div>
  </div>
  <h3>下拉选择器</h3>
  <div>
    <p>{{ hobby }}</p>
    <select v-model="hobby">
      <option value="抽烟">抽烟</option>
      <option value="喝酒">喝酒</option>
      <option value="烫头">烫头</option>
    </select>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const text = ref();
  const flag = ref(true);
  const sex = ref('男');
  const hobby = ref('抽烟');
</script>

```

## 生命周期

```vue
<template>
  <button @click="flag = !flag">按钮{{ flag }}</button>
</template>
<script lang="ts" setup>
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
  } from 'vue';
  // 重要
  console.log('setup');
  // 一般在这里初始化变量
  const flag = ref(true);
  onBeforeMount(() => {
    console.log('onBeforeMount');
  });
  onMounted(() => {
    //重要
    console.log('onMounted');
    // 挂载完成,一般在这里发送http请求,完成数据渲染,绑定自定义事件
    // 这里可以获取dom,操作dom
  });
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
  });
  onUpdated(() => {
    console.log('onUpdated');
    // 数据更新后被调用
  });
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
  });
  onUnmounted(() => {
    // 重要
    console.log('onUnmounted');
    // 一般在这里清除定时器,取消消息订阅,解除绑定事件
  });
</script>

```

## 监听器

[`watch` 函数](https://cn.vuejs.org/api/reactivity-core.html#watch)在每次响应式状态发生变化时触发回调函数

```vue
<template>
  <button @click="flag = !flag">显示隐藏子组件</button>
  <Children v-if="flag"></Children>
</template>
<script lang="ts" setup>
  import Children from '@/component/Children.vue';
  import { ref, watch } from 'vue';

  const flag = ref(false);
  watch(flag, async (value, oldValue, onCleanup) => {
    console.log(value, oldValue, onCleanup);
  });
</script>

```

## 模板引用

```vue
<template>
  <input ref="input" />
  <Children ref="children"></Children>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import Children from '@/component/Children.vue';

  const children = ref(null);
  const input = ref<HTMLInputElement>();

  onMounted(() => {
    console.log(children.value); //获取组件实例
    (input.value as HTMLInputElement).focus(); //获取dom
  });
</script>

```

## 组件基础

### 组件概念

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构：

### 定义一个组件

当使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的 `.vue`
文件中，这被叫做[单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html) (简称 SFC)：

```vue
<template>
  <div>子组件</div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('子组件挂载完成');
  });
</script>
<style lang="less" scoped></style>

```

### 使用组件

```vue
<template>
  <child></child>
</template>
<script lang="ts" setup>
  import child from '@/component/Children.vue';
</script>

```

### 动态组件

有些场景会需要在两个组件间来回切换，比如 Tab 界面：

```vue
<!-- currentTab 改变时组件也改变 -->
<component :is="tabs[currentTab]"></component>

```

在上面的例子中，被传给 `:is` 的值可以是以下几种：

- 被注册的组件名
- 导入的组件对象

你也可以使用 `is` attribute 来创建一般的 HTML 元素。

当使用 `<component :is="...">`
来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 [`` 组件](https://cn.vuejs.org/guide/built-ins/keep-alive.html)
强制被切换掉的组件仍然保持“存活”的状态。

## 组件深入

### 注册

#### 全局注册

```js
import { createApp } from 'vue';

const app = createApp({});

app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
);

```

如果使用单文件组件，你可以注册被导入的 `.vue` 文件：

```js
import MyComponent from './App.vue';

app.component('MyComponent', MyComponent);

```

`app.component()` 方法可以被链式调用：

```js
app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
  .component('ComponentC', ComponentC);

```

全局注册的组件可以在此应用的任意组件的模板中使用：

```vue
<!-- 这在当前应用的任意组件中都可用 -->
<ComponentA />
<ComponentB />
<ComponentC />

```

#### 局部注册

全局注册虽然很方便，但有以下几个问题：

1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的
   JS 文件中。
2. 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性。

相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：

```vue
<script setup>
  import ComponentA from './ComponentA.vue';
</script>

<template>
  <ComponentA />
</template>

```

如果没有使用 `<script setup>`，则需要使用 `components` 选项来显式注册：

```js
import ComponentA from './ComponentA.js';

export default {
  components: {
    ComponentA,
  },
  setup() {
    // ...
  },
};

```

### ！组件通讯

#### props(父传子)

父组件使用子组件时，传自定义属性，子组件 props 接收：

```html
//父组件
<template>
  <Parent msg="父组件消息" :wgh="{name:'wgh',age: 18}" :title="title" />
</template>
<script lang="ts" setup>
  import Parent from '@/component/Parent.vue';
  import { ref } from 'vue';

  const title = ref('父传子通讯');
</script>

//子组件
<template>
  <div>
    <h3>{{title}}</h3>
    <div>子组件没有props接收的自定义属性：{{$attrs}}</div>
    <div>自定义属性是引用类型:{{wgh}}</div>
  </div>
</template>
<script lang="ts" setup>
  defineProps<{ wgh: { name: string; age: number }; title: string }>();
</script>

```

tips:子组件不定义 props 接收的属性，在 attr 中。

#### emit(子组件向父组件通讯)

子组件通过 emit 向父组件通讯，父组件通过自定义事件接收

```html
//父组件
<template>
  <Parent
    @getInputVal="msg => childInput = msg"
    @getChildMsg="String => childMsg = msg"
  />
  <h3>展示子组件的消息</h3>
  <div>{{childMsg}}</div>
  <div>{{childInput}}</div>
</template>
<script lang="ts" setup>
  import Parent from '@/component/Parent.vue';
  import { ref } from 'vue';

  const childMsg = ref<string>();
  const childInput = ref<string>();
</script>

//子组件
<template>
  <div>
    <h3>子组件向父级组件通讯</h3>
    <button @click="$emit('getChildMsg','你好,明天')">点击向父级通讯</button>
    <div>
      <input @input="e => $emit('getInputVal', e.target.value)" />
    </div>
  </div>
</template>

```

#### 组件上的 v-model

表单上的 v-model 都玩过，双向绑定用起来也很方便，组件添加 v-model 也是很重要的，实际上，这种通讯跟 props&emit 一样原理，只是通过 emit 修改 v-model 绑定的属性，可以省略父组件中自定义事件接收步骤，用起来很方便。

举个栗子：

```html
//父
<template>
  <div>{{value}}{{title}}{{name}}</div>
  --------------------------
  <vModelTest
    class="com"
    style="font-size: 10px"
    v-model="value"
    v-model:title="title"
    v-model:name="name"
  ></vModelTest>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import vModelTest from '@/components/vModelTest.vue';

  const value = ref<number>(1);
  const title = ref<string>('我系渣渣辉');
  const name = ref<string>('wgh');
</script>

//子
<template>
  <div>11</div>
  <div class="box" style="color: red">
    <div class="box">
      <p>{{$attrs.modelValue}}</p>
      <p>{{$attrs.title}}</p>
      <p>{{$attrs.name}}</p>
    </div>
    <button @click="fn">emit button</button>
  </div>
</template>
<script setup lang="ts">
  //v-model子组件向父组件通讯可以不用props接收,v-model默认绑定modelValue属性名,可以给v-model取别名,同一个组件可以绑定多个v-model属性
  const emits = defineEmits([
    'update:modelValue',
    'update:title',
    'update:name',
  ]);

  const fn = () => {
    emits('update:modelValue', 5);
    emits('update:title', '我系古天乐');
    emits('update:name', 'wughuanghui');
  };
</script>

```

#### 父组件访问子组件实例

- 子组件定义方法变量,并且用 defineExpose 暴露出去；
- 父组件中使用是给子组件添加 ref 属性,挂载完成即可访问到组件实例,包括暴露的变量方法。

```html
//子组件
<template>
  <div :style="'color:'+ color">你好</div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { mock } from 'docs/blogs/mockJs';

  const color = ref(mock('@color'));
  const reColor = () => {
    color.value = mock('@color');
  };
  defineExpose({ reColor });
</script>

//父组件
<template>
  <Parent ref="parentRef" />
  <button @click="parentRef.reColor()">按钮</button>
</template>
<script lang="ts" setup>
  import Parent from '@/component/Parent.vue';
  import { onMounted, ref } from 'vue';

  const parentRef = ref();

  onMounted(() => {
    console.log(parentRef);
  });
</script>

```

#### 依赖注入(跨级组件通讯)

- provide：提供一个值,可以被后代组件注入；
- inject:：注入一个由祖先组件或整个应用 (通过 `app.provide()`) 提供的值。

```vue
//祖先组件
<template>
  <Parent></Parent>
</template>
<script lang="ts" setup>
  import Parent from '@/component/Parent.vue';
  import { provide, ref } from 'vue';

  const msg = ref('消息');
  const sayHello = () => {
    console.log('我是祖先组件啦啦啦啦啦');
  };
  provide('provideObj', {
    msg,
    sayHi: sayHello,
  });
</script>

//父级组件
<template>
  <Children />
</template>
<script lang="ts" setup></script>

//注入组件
<template>
  <div>
    <div>子组件</div>
    <div>{{ msg }}</div>
    <button @click="sayHi">按钮</button>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, inject } from 'vue';

  const { msg, sayHi } = inject<any>('provideObj');

  onMounted(() => {
    console.log('子组件挂载完成');
  });
</script>

```

#### 异步组件

在开发中，为提高用户体验，需要时再从服务器加载相关组件。

```vue
<template>
  <h3>异步组件</h3>
  <div>
    <button @click="num = 0">0</button>
    <button @click="num = 1">1</button>
  </div>
  <component :is="[page1, page2][num]"></component>

  <!--  也可以直接用-->
  <page1></page1>
  <page2></page2>
</template>
<script lang="ts" setup>
  import { defineAsyncComponent, ref } from 'vue';

  const page1 = defineAsyncComponent(() => import('./1.模板语法.vue'));
  const page2 = defineAsyncComponent(() => import('./2.响应式基础.vue'));

  const num = ref<number>(0);
</script>

```

### 组合式函数

组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用**有状态逻辑**的函数。

栗子

```vue
<template>
  <h3>组合式函数</h3>
  <div>{{ x }}{{ y }}</div>
</template>
<script lang="ts" setup>
  import { useMouse } from '@/common/sueMouse';

  const { x, y } = useMouse();
</script>

```

```tsx
//useMouse
import { onMounted, onUnmounted, ref } from 'vue';

export const useEventListener = (
  target: Window | HTMLElement,
  event: string,
  callback: any
) => {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
};

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, 'mousemove', (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  });
  return { x, y };
};

```

### 自定义指令

栗子:简略拖拽指令 v-drag

```vue
<template>
  <div class="drag-test" v-drag></div>
</template>
<script lang="ts" setup>
  const vDrag = {
    mounted: (el: HTMLElement) => {
      el.onmousedown = (dowEv: MouseEvent) => {
        const x = dowEv.clientX - el.offsetLeft;
        const y = dowEv.clientY - el.offsetTop;
        document.onmousemove = (moveEv: MouseEvent) => {
          let left = moveEv.clientX - x;
          let top = moveEv.clientY - y;
          el.style.left = left + 'px';
          el.style.top = top + 'px';
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };
</script>
<style lang="less" scoped>
  .drag-test {
    width: 100px;
    height: 100px;
    background: red;
    padding: 10px;
    box-sizing: content-box;
    position: fixed;
  }
</style>

```

## 内置组件

### Transition

`<Transition>` 会在一个元素或组件进入和离开 DOM 时应用动画。

`<TransitionGroup>` 会在一个 `v-for` 列表中的元素或组件被插入，移动，或移除时应用动画。

#### 触发条件

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件

#### 栗子

```vue
<template>
  <h3 @click="flag = !flag">过渡组件</h3>
  <Transition>
    <div v-show="flag"></div>
  </Transition>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const flag = ref(true);
</script>
<style lang="less" scoped>
  div {
    width: 400px;
    height: 400px;
    background: pink;
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: scale(0);
  }
</style>

```

### TransitionGroup

`<TransitionGroup>` 支持和 `<Transition>` 基本相同的 props、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：

- 默认情况下，它不会渲染一个容器元素。但你可以通过传入 `tag` prop 来指定一个元素作为容器元素来渲染。
- [过渡模式](https://cn.vuejs.org/guide/built-ins/transition.html#transition-modes)在这里不可用，因为我们不再是在互斥的元素之间进行切换。
- 列表中的每个元素都**必须**有一个独一无二的 `key` attribute。
- CSS 过渡 class 会被应用在列表内的元素上，**而不是**容器元素上。

#### 栗子

```vue
<script setup>
  import { ref, computed } from 'vue';
  import gsap from 'gsap';

  const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' },
  ];

  const query = ref('');

  const computedList = computed(() => {
    return list.filter((item) => item.msg.toLowerCase().includes(query.value));
  });

  function onBeforeEnter(el) {
    el.style.opacity = 0;
    el.style.height = 0;
  }

  function onEnter(el, done) {
    gsap.to(el, {
      opacity: 1,
      height: '10px',
      delay: el.dataset.index * 0.15,
      onComplete: done,
    });
  }

  function onLeave(el, done) {
    gsap.to(el, {
      opacity: 0,
      height: 0,
      delay: el.dataset.index * 0.15,
      onComplete: done,
    });
  }
</script>

<template>
  <input v-model="query" />
  <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li
      v-for="(item, index) in computedList"
      :key="item.msg"
      :data-index="index"
    >
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>

```

### KeepAlive

`<KeepAlive>` 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。

栗子:

```vue
<template>
  <button @click="index ? (index = 0) : (index = 1)">按钮{{ index }}</button>
  <KeepAlive>
    <component :is="[comA, comB][index]"></component>
  </KeepAlive>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import comA from './9.事件修饰符.vue';
  import comB from './10.表单输入绑定.vue';

  const index = ref(0);
</script>

```

### Teleport

`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

```vue
<template>
  <!-- 传送到body中 -->
  <teleport to="body">
    <div>我系渣渣辉</div>
    <count></count>
  </teleport>
</template>
<script setup lang="ts">
  import count from '@/components/cont.vue';
</script>

```

## 组合式 API

### ref

接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`。

### computed

接受一个 getter 函数，返回一个只读的响应式 [ref](https://cn.vuejs.org/api/reactivity-core.html#ref) 对象。该 ref
通过 `.value` 暴露 getter 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象。

### reactive

返回一个对象的响应式代理。

### readonly

接受一个对象 (不论是响应式还是普通的) 或是一个 [ref](https://cn.vuejs.org/api/reactivity-core.html#ref)，返回一个原值的只读代理。

### watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

### watch

侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。

### isRef

检查某个值是否为 ref。

### unref

如果参数是 ref，则返回内部值，否则返回参数本身。这是 `val = isRef(val) ? val.value : val` 计算的一个语法糖。

### toRef

基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。

### toRefs

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref
都是使用 [`toRef()`](https://cn.vuejs.org/api/reactivity-utilities.html#toref) 创建的。

### isProxy

检查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)
、[`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly)
、[`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive)
或 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理。

### isReactive

检查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)
或 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 创建的代理。

### isReadonly

检查一个对象是否是由 [`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly)
或 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理。

### shallowRef

[`ref()`](https://cn.vuejs.org/api/reactivity-core.html#ref) 的浅层作用形式。

### triggerRef

强制触发依赖于一个[浅层 ref](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 的副作用，这通常在对浅引用的内部值进行深度变更后使用。

### customRef

创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。

### shallowReactive

[`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 的浅层作用形式。

### shallowReadonly

[`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly) 的浅层作用形式。

### toRaw

根据一个 Vue 创建的代理返回其原始对象。

### markRaw

将一个对象标记为不可被转为代理。返回该对象本身。

### effectScope

创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。

<git-talk />