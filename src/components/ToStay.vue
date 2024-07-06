<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue'
import { useBaseStore } from '@/store/pinia'
const store = useBaseStore()
import { NCarousel, NRate } from 'naive-ui'

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
  <PlaceCardLoader v-if="store.hotels == [] || store.hotels.length < 1" />
  <!-- Places are ready, hence the element below is render -->
  <div v-else class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">住哪儿？🏨</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative">
      <!-- OwlCarousel to Render Places in Carousel -->
      <div class="relative">
        <n-carousel draggable :slides-per-view="slidesPerView">
          <div v-for="(place, i) in store.hotels" :key="i">
            <div v-if="place" class="group cursor-pointer">
              <!-- Place location_id is passed as parameter to place_type (hotels || restaurants || attractions) route for full place details -->
              <a href="/">
                <!-- Place Photo is render if found or a default image is renderedas fallback -->
                <img
                  :src="
                    place?.img
                      ? place?.img
                      : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'
                  "
                  :alt="place?.cnname"
                  class="w-full h-[250px] object-cover group-hover:brightness-125"
                />
                <!-- Place name -->
                <h2 class="font-semibold text-lg group-hover:underline">{{ place?.cnname }}</h2>

                <!-- Place Rating with place.rating value passed into component to render star rating -->
                <span class="flex items-center mb-2">
                  <n-rate readonly :default-value="Number(place?.grade) / 2" />
                  ~ {{ place?.commentCount }} Reviews
                </span>
              </a>
            </div>
          </div>
        </n-carousel>
      </div>
    </div>
  </div>
</template>
