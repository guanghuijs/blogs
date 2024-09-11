<script setup lang="ts">
  import mock from 'mockjs';
  import { ref } from 'vue';
  const order = ref(0);
  const flexGrow = ref(0);
  const flexShrink = ref(1);
  const align_self = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
  const alignSelf = ref('auto');
</script>

<template>
  <div class="css-flex-item-item" :style="{ alignSelf }">
    <div class="prop-item">
      <div>order</div>
      <a-input title="order" v-model:value="order" placeholder="order" style="width: 100px" />
    </div>
    <div class="prop-item">
      <div>flexGrow</div>
      <a-input
        title="flex-grow"
        v-model:value="flexGrow"
        placeholder="flexGrow"
        style="width: 100px"
      />
    </div>
    <div class="prop-item">
      <div>flexShrink</div>
      <a-input
        title="flex-grow"
        v-model:value="flexShrink"
        placeholder="flexShrink"
        style="width: 100px"
      />
    </div>
    <div class="prop-item">
      <div>alignSelf</div>
      <a-select v-model:value="alignSelf" style="width: 100px">
        <a-select-option v-for="item in align_self" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </div>
    <div class="prop-item">
      <div>下标</div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
  .css-flex-item-item {
    width: 180px;
    background: pink;
    text-align: center;
    order: v-bind(order);
    flex-grow: v-bind(flexGrow);
    flex-shrink: v-bind(flexShrink);
    > .prop-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 50px;
      }
    }
  }
</style>
