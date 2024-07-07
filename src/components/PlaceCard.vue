<script setup>
import { NRate } from 'naive-ui'
const props = defineProps(['place'])

const processedPhotoUrl = (url) => {
  if (url) {
    // 去掉最后的尺寸参数
    return url.slice(0, url.lastIndexOf('/'))
  } else {
    return 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'
  }
}
</script>

<template>
  <div v-if="place" class="group cursor-pointer">
    <!-- Place location_id is passed as parameter to place_type (hotels || restaurants || attractions) route for full place details -->
    <a href="/">
      <!-- Place Photo is render if found or a default image is renderedas fallback -->
      <img
        :src="processedPhotoUrl(place?.photo)"
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
</template>
