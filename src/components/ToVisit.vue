<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue';
import { useMainContextStore } from '../store/MainContext';
import PlaceCard from './PlaceCard.vue';
import { NCarousel } from 'naive-ui';
const mainContext = useMainContextStore();
</script>

<template>
  <!-- if places list is empty, render a Loader -->
  <PlaceCardLoader v-if="mainContext.attractions == [] || mainContext.attractions.length < 1" />
  <!-- Places are ready, hence the element below is render -->
  <div v-else class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">Place to Visit</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative -left-[20px]">
      <!-- OwlCarousel to Render Places in Carousel -->
      <div className="relative -left-[20px]">
        <n-carousel :slides-per-view="4" :space-between="10" :loop="false" draggable autoplay interval="2000">
          <div v-for="(attraction, i) in mainContext.attractions" :key="i">
            <PlaceCard :place="attraction" />
          </div>
        </n-carousel>
      </div>
    </div>
  </div>
</template>
