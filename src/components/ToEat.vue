<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue'
import { useBaseStore } from '@/store/pinia'
import PlaceCard from './PlaceCard.vue'
import { NCarousel } from 'naive-ui'
const store = useBaseStore()
</script>

<template>
  <!-- if places list is empty, render a Loader -->
  <PlaceCardLoader v-if="store.restaurants == null || store.restaurants.length < 1" />
  <!-- Places are ready, hence the element below is render -->
  <div v-else class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">Place to Eat</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative">
      <!-- OwlCarousel to Render Places in Carousel -->
      <div class="relative">
        <n-carousel draggable="true">
          <!-- n-carousel :slides-per-view="4" :space-between="10" :loop="false" draggable> -->
          <div v-for="(restaurant, i) in store.restaurants" :key="i">
            <PlaceCard :place="restaurant" />
          </div>
        </n-carousel>
      </div>
    </div>
  </div>
</template>
