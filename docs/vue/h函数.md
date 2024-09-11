
## 定义

创建虚拟 DOM 节点 (vnode)。

## 类型

```ts
// 完整参数签名
function h(
  type: string | Component, //可以创建原生dom,也可以创建组件
  props?: object | null, // 可以给组件(原生dom)插入文字,添加事件等
  children?: Children | Slot | Slots
): VNode;

// 省略 props
function h(type: string | Component, children?: Children | Slot): VNode;
type Children = string | number | boolean | VNode | null | Children[];
type Slot = () => Children;
type Slots = { [name: string]: Slot };
```

## 渲染原生 dom

:::demo
```vue
<template>
  <div id="ele"></div>
</template>

<script setup lang="ts">
  import { h, onMounted, render } from 'vue';

  onMounted(() => {
    hDom();
  });

  const hDom = () => {
    const box = document.createElement('div');
    const container = document.querySelector('#ele');
    container.appendChild(box);
    render(
      h('div', {
        innerHTML: 'h函数666',
        style: {
          color: 'red',
        },
        class: 'test',
      }),
      box
    );
  };
</script>

<style lang="less" scoped>
  #test {
    :deep(h3) {
      margin: 15px 0 10px 0;
    }
  }
</style>
```
:::

## 渲染组件

:::demo
```vue
<template>
  <div id="com"></div>
</template>

<script setup lang="ts">
  import { h, onMounted, render } from 'vue';
  import { Button as AButton } from 'ant-design-vue'

  onMounted(() => {
    hComp();
  });

  const hComp = () => {
    const box = document.createElement('div');
    const container = document.querySelector('#com');
    container.appendChild(box);
    render(
      h(AButton, {
        innerHTML: '按钮',
        onClick: () => {
          alert('按钮点击了');
        },
      }),
      box
    );
  };
</script>

<style lang="less" scoped>
  #test {
    :deep(h3) {
      margin: 15px 0 10px 0;
    }
  }
</style>
```
:::


## h 函数中的 双向数据绑定

:::demo
```vue
<template>
  <div>
    {{ switchValue }}
    <div id="vmodel"></div>
  </div>
</template>

<script setup lang="ts">
  import { h, onMounted, ref, render } from 'vue';
  import { Switch as ASwitch } from 'ant-design-vue'

  onMounted(() => {
    hVModel();
  });

  const switchValue = ref(false);

  const hVModel = () => {
    const box = document.createElement('div');
    const container = document.querySelector('#vmodel');
    container.appendChild(box);
    render(
        h(ASwitch, {
          checked: switchValue,
          ['onUpdate:checked']: (checked) => {
            switchValue.value = checked;
          },
        }),
        box
    );
  };
</script>

<style lang="less" scoped>
  #test {
    :deep(h3) {
      margin: 15px 0 10px 0;
    }
  }
</style>
```
:::

## 使用场景(ant design 表格自定义渲染为例)

:::demo
```vue
<template>
  <a-table :columns="columns" :data-source="list">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
  import { h } from 'vue';
  import  mockJs from 'mockjs';
  import { Tag as ATag } from 'ant-design-vue';
  
  const list = Array.from({ length: 50 }, () => ({
    name: mockJs.mock('@cname'),
    age: mockJs.Random.integer(8, 12),
    score: mockJs.Random.integer(55, 95),
  }));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Score',
      dataIndex: 'score',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      customRender: (a) => {
        console.log(a);
        const score = a.record['score'];
        if (score >= 90) {
          return h(ATag, { innerText: '优', color: '#108EE9' });
        } else if (score >= 80 && score < 90) {
          return h(ATag, { innerText: '良', color: '#2DB7F5' });
        } else if (score < 80 && score >= 60) {
          return h(ATag, { innerText: '中', color: '#87D068' });
        } else {
          return h(ATag, { innerText: '差', color: '#FF5500' });
        }
      },
    },
  ];
</script>
```
:::

<git-talk></git-talk>
