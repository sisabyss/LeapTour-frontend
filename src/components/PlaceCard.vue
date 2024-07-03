<script setup>
import { NRate } from 'naive-ui';
const props = defineProps(['place']);

console.log(props.place);
</script>

<template>
  <div v-if="place" class="group cursor-pointer">
    <!-- Place location_id is passed as parameter to place_type (hotels || restaurants || attractions) route for full place details -->
    <a href="/">
      <!-- Place Photo is render if found or a default image is renderedas fallback -->
      <img
        :src="
          place?.photo
            ? place?.photo?.images?.large?.url
            : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'
        "
        alt="{place?.name}"
        class="w-full h-[250px] object-cover group-hover:brightness-125"
      />
      <!-- Place name -->
      <h2 class="font-semibold text-lg group-hover:underline">{{ place?.name }}</h2>

      <!-- Place Rating with place.rating value passed into component to render star rating -->
      <span class="flex items-center mb-2">
        <n-rate readonly :default-value="Number(place?.rating)" />
        ~ {{ place?.num_reviews }} Reviews
      </span>
    </a>
  </div>
</template>
