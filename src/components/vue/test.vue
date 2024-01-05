<script lang="ts" setup>
  import type { Props } from './type';
  import ImportedAndComplexTypesSupport from './ImportedandComplexTypesSupport.vue';
  import FenericComponents from './FenericComponents.vue';
</script>

<template>
  <ImportedAndComplexTypesSupport
    :age="18"
    name="哈哈哈"
    extra-prop=""
  ></ImportedAndComplexTypesSupport>
  <FenericComponents :generic="Props"></FenericComponents>
</template>
