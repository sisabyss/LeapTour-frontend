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
  <PlaceCardLoader v-if="store.attractions == [] || store.attractions.length < 1" />
  <!-- Places are ready, hence the element below is render -->
  <div v-else class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">去哪儿？🧳</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative">
      <!-- OwlCarousel to Render Places in Carousel -->
      <div class="relative">
        <n-carousel draggable="true" :slides-per-view="slidesPerView">
          <div v-for="(attraction, i) in store.attractions" :key="i">
            <PlaceCard :place="attraction" />
          </div>
        </n-carousel>
      </div>
    </div>
  </div>
</template>
