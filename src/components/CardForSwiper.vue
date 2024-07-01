<!--Swiper传参用法举例 by CYH：
<template>
  <div id="app">
    <Swiper :items="cards" width="20%"/*！！！决定一个框里一次性能放多少张！！！*/></Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swiper from '@/components/Swiper.vue'

const cards = ref([
  {
    ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1',
    PlaceName: 'Discover Darwin',
    Ifo: 'Find out why travelers like you are raving about Darwin'
  },
  {
    ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1',
    PlaceName: 'Scenic Autumn Spot',
    Ifo: 'Best of the Best tours, attractions & activities you won’t want to miss.'
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
])
</script>

<style>
/* 添加你的样式 */
</style>

-->
<script setup>
import { defineProps } from 'vue'
import { NRate } from 'naive-ui';
const props = defineProps({
    ImgSrc: {
        type: String,
        default: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1'
    },
    Width: {
        type: String,
        default: "20%"
    },
    PlaceName: {
        type: String,
        default: 'PlaceName'
    },
    Ifo: {
        type: String,
        default: 'information'
    }
})
</script>

<template>
    <div class="card-item" :style="{ minWidth: Width }">
        <n-card>
            <img :src="props.ImgSrc" class="CardSwiperImg">
            <div class="CardSwiperContent">
                <span class="CardSwiperTitle">{{ PlaceName }}</span>
                <div class="CardSwiperRate">
                    <n-rate size='10'></n-rate>
                </div>
                <div CLASS="CardSwiperIfo">{{ Ifo }}</div>
            </div>
        </n-card>
    </div>
</template>


<style lang="scss" scoped>
.card-item {
    padding: 10px;
    box-sizing: border-box;
}

.CardSwiperImg {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.CardSwiperTitle {
    font-weight: bold;
    font-size: 0.8em;
}

.CardSwiperContent {
    padding: 3px;
}

.CardSwiperRate {
    left: 0px;
    width: 50%;
    height: auto;
}

.CardSwiperIfo {
    color: darkgray;
    font-size: 0.5em;
}
</style>