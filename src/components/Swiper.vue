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

<style scoped>
/* 添加你的样式 */
</style>

-->

<template>
  <div class="Swiper">
    <n-row :gutter="20" justify="center">
      <n-col :span="24">
        <div id="father" class="grid-content bg-purple">
          <div id="swiper-box" class="swiper-box" :style="{ transform: 'translateX(' + currentOffset + 'px)' }">
            <swiper-item v-for="(item, index) in items" :key="index" :ImgSrc="item.ImgSrc" :PlaceName="item.PlaceName"
              :Ifo="item.Ifo" :Width="width"></swiper-item>
          </div>
          <n-icon size="30" class="arrow left" @click="left">
            <ArrowAltCircleLeftRegular />
          </n-icon>
          <n-icon size="30" class="arrow right" @click="right">
            <ArrowAltCircleRightRegular />
          </n-icon>
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NRow, NCol, NIcon } from 'naive-ui'
import swiperItem from '@/components/CardForSwiper.vue'
import { ArrowAltCircleLeftRegular, ArrowAltCircleRightRegular } from '@vicons/fa'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  width: {
    type: String,
    default: '20%'
  }
})

const currentOffset = ref(0)
const fatherWidth = ref(0)

const setCardWidth = () => {
  const father = document.querySelector('#father')
  fatherWidth.value = father.clientWidth
}

const right = () => {
  if (currentOffset.value <= -(parseInt(props.width) / 100 * fatherWidth.value) * (props.items.length - 5)) return
  currentOffset.value -= parseInt(props.width) / 100 * fatherWidth.value
}

const left = () => {
  if (currentOffset.value >= -2) return
  currentOffset.value += parseInt(props.width) / 100 * fatherWidth.value
}

onMounted(() => {
  setCardWidth()
  window.addEventListener('resize', setCardWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', setCardWidth)
})
</script>

<style scoped>
.bg-purple {
  overflow: hidden;
  position: relative;
  padding-left: 10px;
}

.Swiper {
  margin-top: 50px;

  .swiper-box {
    display: flex;
    width: auto;
    transition: all 0.2s;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 10px;
  padding: 0px;
  cursor: pointer;
  font-size: 30px;
  /*   border: 2px solid black;
  background-color: white; */
  color: black;
  transition: background-color 0.3s, color 0.3s;
}

.arrow:hover {
  /*   background-color: black; */
  color: white;
}

.left {
  left: -7px;
}

.right {
  right: -7px;
}
</style>