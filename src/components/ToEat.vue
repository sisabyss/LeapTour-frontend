<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue'
import { useBaseStore } from '@/store/pinia'
import PlaceCard from './PlaceCard.vue'
import { NCarousel } from 'naive-ui'
const store = useBaseStore()

import { ref, onMounted, onBeforeUnmount } from 'vue'

const slidesPerView = ref(getSlidesPerView())

function getSlidesPerView() {
  return window.innerWidth <= 768 ? 1 : 4
}

function updateSlidesPerView() {
  slidesPerView.value = getSlidesPerView()
}

onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>

<template>
  <!-- if places list is empty, render a Loader -->
  <PlaceCardLoader v-if="store.restaurants == null || store.restaurants.length < 1" />
  <!-- Places are ready, hence the element below is render -->
  <div v-else class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">去吃啥？🍲</h2>
    <p class="text-sm text-dark mb-2">你可能想尝试这些美食</p>

    <div class="relative">
      <!-- OwlCarousel to Render Places in Carousel -->
      <div class="relative">
        <n-carousel draggable="true" :slides-per-view="slidesPerView">
          <!-- n-carousel :slides-per-view="4" :space-between="10" :loop="false" draggable> -->
          <div v-for="(restaurant, i) in store.restaurants" :key="i">
            <PlaceCard :place="restaurant" />
          </div>
        </n-carousel>
      </div>
    </div>
  </div>
</template>
