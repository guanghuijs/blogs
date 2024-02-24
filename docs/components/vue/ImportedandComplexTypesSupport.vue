<script setup lang="ts">
  type Props = {
    name: string;
    age: number;
  };
  import { Props } from './type';
  // imported + intersection type
  defineProps<Props & { extraProp: string }>();
</script>
<template></template>
