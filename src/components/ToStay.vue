<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue';
</script>

<template>
  <div className="container mx-auto p-4">
    <h2 className="font-semibold text-lg md:text-2xl">Place to Stay</h2>
    <p className="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div className="relative -left-[20px]">
      <PlaceCardLoader />
    </div>
  </div>
</template>
