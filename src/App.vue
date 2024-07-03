<script setup>
import { onMounted } from 'vue';
import { useMainContextStore } from './store/MainContext.js';
const store = useMainContextStore();

onMounted(() => {
  store.init();
});

import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
