<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
   <UI-head id="accueil" isBlack></UI-head>
  <slot />
</template>
