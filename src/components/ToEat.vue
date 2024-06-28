<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue';
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">Place to Eat</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative -left-[20px]">
      <PlaceCardLoader />
    </div>
  </div>
</template>

<style></style>
