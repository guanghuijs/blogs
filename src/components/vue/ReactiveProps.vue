<script setup lang="ts">
  import { watchEffect } from 'vue';

  const { name, age } = defineProps<{
    name: number;
    age: number;
  }>();

  watchEffect(() => {
    console.log(name, age);
  });
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>
