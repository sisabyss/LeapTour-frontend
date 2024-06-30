<script setup>
//import PlaceCard from './components/PlaceCard.vue';
/* import Carousel from './components/Carousel.vue'; */
// import AITripPage from './pages/AITripPage.vue';
// import { RouterView } from 'vue-router';
// import MainContext from './context/MainContext.vue';
import AttractionList from './pages/AttractionList.vue';

import { onMounted } from 'vue';
import { useMainContextStore } from './store/MainContext.js';
const store = useMainContextStore();

onMounted(() => {
  store.init();
});
</script>

<template>
  <!-- <AITripPage /> -->
  <main>
    <!-- <RouterView /> -->
    <AttractionList />
    <!-- <MainContext>Hello world</MainContext> -->
  </main>
</template>
