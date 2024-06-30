<script setup>
import PlaceCardLoader from './Loader/PlaceCardLoader.vue';
import { ref, onMounted } from 'vue';
import Swiper from '@/components/Swiper.vue';

const cards = ref([]);
const loading = ref(true);

// 模拟数据加载
onMounted(() => {
  setTimeout(() => {
    cards.value = [
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1',
        PlaceName: 'Discover Darwin',
        Ifo: 'Find out why travelers like you are raving about Darwin'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1',
        PlaceName: 'Scenic Autumn Spot',
        Ifo: 'Best of the Best tours, attractions & activities you won‘t want to miss.'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1',
        PlaceName: 'Beautiful Hill Station',
        Ifo: '5 beautiful hill stations in South India'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1',
        PlaceName: 'Stunning Places in India',
        Ifo: '11 beautiful places in India that have to be seen to be believed'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1',
        PlaceName: 'Best Time to Visit Dubai',
        Ifo: 'Best time to visit Dubai for great weather and deals'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1',
        PlaceName: 'Beautiful Hill Station',
        Ifo: '5 beautiful hill stations in South India'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1',
        PlaceName: 'Stunning Places in India',
        Ifo: '11 beautiful places in India that have to be seen to be believed'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1',
        PlaceName: 'Best Time to Visit Dubai',
        Ifo: 'Best time to visit Dubai for great weather and deals'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1',
        PlaceName: 'Beautiful Hill Station',
        Ifo: '5 beautiful hill stations in South India'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1',
        PlaceName: 'Stunning Places in India',
        Ifo: '11 beautiful places in India that have to be seen to be believed'
      },
      {
        ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1',
        PlaceName: 'Best Time to Visit Dubai',
        Ifo: 'Best time to visit Dubai for great weather and deals'
      }
    ];
    loading.value = false;
  }, 2000); // 模拟2秒的加载时间
});
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="font-semibold text-lg md:text-2xl">Place to Visit</h2>
    <p class="text-sm text-dark mb-2">These are some places you might want to visit</p>

    <div class="relative -left-[20px]" style="width:100%;height: 100%;">
      <PlaceCardLoader v-if="loading" />
      <Swiper v-else :items="cards" width="25%"></Swiper>
    </div>
  </div>
</template>

<style></style>
