<script setup>
import { onMounted } from 'vue'
import { useBaseStore } from './store/pinia'
const store = useBaseStore()

onMounted(() => {
  store.init()
})

import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
