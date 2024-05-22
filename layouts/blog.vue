<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div style="height: 20px; background-color: red"></div>
  <slot />
</template>
