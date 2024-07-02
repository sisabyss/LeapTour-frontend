<script setup>
import NavBar from '../components/NavBar.vue';
import RatingCard from '../components/RatingCard.vue';
import { NButton, NCollapse, NCollapseItem } from 'naive-ui';
import { NDivider } from 'naive-ui';
import { Map, Calendar } from '@vicons/carbon';
import { BMap, BZoom } from 'vue3-baidu-map-gl';
import { ref } from 'vue'
import Swiper from '@/components/Swiper.vue'
import { useRouter } from "vue-router";
import { reactive } from 'vue';


const router = useRouter();

//AI生成内容
const AIGC = JSON.parse(router.currentRoute._rawValue.query.AIGC);
//页面数据
const Data = reactive({
    //旅游地点
    addr: router.currentRoute._rawValue.query.addr,
    
    //旅游地点介绍
    introduction: AIGC.introduce,

    //一天的行程
    OneDay: [AIGC.Day_1,AIGC.Day_2,AIGC.Day_3]

    //AIGC.Day_x  --> JSON对象 {}
    //格式为：
    /*
    "Day_1": {
    "attraction_1": {
      "name": "天山天池",
      "description": "天山天池是新疆著名的自然景观，位于博格达峰下，是一处高山湖泊，湖水清澈，四周雪山环绕，是登山和观光的绝佳地点。"
    },
    "attraction_2": {
      "name": "乌鲁木齐国际大巴扎",
      "description": "乌鲁木齐国际大巴扎是新疆最大的集市，集购物、餐饮、娱乐于一体，可以体验到新疆的民族风情和品尝地道的新疆美食。"
    },
    "attraction_3": {
      "name": "红山公园",
      "description": "红山公园位于乌鲁木齐市中心，可以俯瞰整个城市，是了解新疆城市文化和自然风光的好地方。"
    } 
     */
    //!!!数目不固定

});

console.log(AIGC)
console.log(Data.introduction)
console.log(Data.OneDay)

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
    ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1',
    PlaceName: 'Scenic Autumn Spot',
    Ifo: 'Best of the Best tours, attractions & activities you won’t want to miss.'
  },
  {
    ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1',
    PlaceName: 'Stunning Places in India',
    Ifo: '11 beautiful places in India that have to be seen to be believed'
  },
  {
    ImgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1',
    PlaceName: 'Scenic Autumn Spot',
    Ifo: 'Best of the Best tours, attractions & activities you won’t want to miss.'
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
const day1Places = [
  { name: "E'ling Park" },
  { name: 'XiaoTianE (JianXin North Road)' },
  { name: 'Jiefang Monument' },
  { name: 'Latitude 29' },
  { name: 'Loquat Hill Park' },
];

const day2Places = [{ name: 'Place Name 1' }, { name: 'Place Name 2' }, { name: 'Place Name 3' }];

const day3Places = [{ name: 'Place Name 1' }, { name: 'Place Name 2' }, { name: 'Place Name 3' }];
</script>

<template>
  <div>
    <NavBar />

    <div class="AITripMap">
      <BMap>
        <BZoom />
      </BMap>
    </div>

    <div class="AITripLeft">
      <div class="header">
        <div class="container">
          <div class="box1">
            <n-icon>
              <Map style="color: #7446af"></Map>
            </n-icon>
          </div>
          <div class="box2" style="padding: 5px">
            <p style="color: darkgray; font-size: smaller">This Trip is Powered by AI</p>
          </div>
        </div>
        <div class="buttoncontainer">
          <NButton class="SaveItinerary"> ❤ Save Itinerary </NButton>
        </div>
      </div>
      <h1 class="AITripTitle">Your Trip To {{ Data.addr }} for 3 days</h1>
      <div class="Pagedescription">
        {{ Data.introduction }}
      </div>
      <n-divider class="AITripdivider" />
      <p class="AITripSubTitle">Places To Stay</p>
      <div class="AITripSwiper">
        <div id="app">
          <Swiper :items="cards" width="50%"></Swiper>
        </div>
      </div>
      <n-divider class="AITripdivider" />
      <!--               <div class="app-bar">
            <div class="logo-container">
                <img class="logo" src="./icons8-map-marker-96_1.png" alt="logo">
                <a href="/" class="title">TravelMate</a>
            </div>
            <div class="search-container">
                <span>🔍</span>
                <input type="text" placeholder="Search">
            </div>
        </div> -->
      <p class="AITripSubTitle">Itinerary For You</p>
      <div class="ItineraryAll">
        <div title="Day 1">
          <div class="container">
            <div class="Daybox1">
              <n-icon>
                <Calendar style="color: #7446af"></Calendar>
              </n-icon>
            </div>
            <p class="AITripSubSubTitle">Day1</p>
          </div>
          <div class="day-description">
            Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining experiences.
            Start your day at E'ling Park,
            where you can enjoy stunning views of the city and relax in nature. For lunch, head to XiaoTianE on JianXin
            North Road for some authentic
            local cuisine. After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
            Then, treat yourself to a
            delightful meal at Latitude 29. End the day at Loquat Hill Park, a serene spot perfect for unwinding. Get
            ready for a day filled with
            exploration and memorable moments!
          </div>
          <view v-for="(place, index) in day1Places" :key="'day1-' + index">
            <n-collapse arrow-placement="right">
              <n-collapse-item :title="place.name" :name="'day1-place' + index">
                <div class="AITripRatingCard">
                  <RatingCard />
                </div>
              </n-collapse-item>
            </n-collapse>
          </view>
        </div>

        <div title="Day 2" name="day2">
          <div class="container">
            <div class="Daybox1">
              <n-icon>
                <Calendar style="color: #7446af"></Calendar>
              </n-icon>
            </div>
            <p class="AITripSubSubTitle">Day2</p>
          </div>
          <div class="day-description">
            Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining experiences.
            Start your day at E'ling Park,
            where you can enjoy stunning views of the city and relax in nature. For lunch, head to XiaoTianE on JianXin
            North Road for some authentic
            local cuisine. After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
            Then, treat yourself to a
            delightful meal at Latitude 29. End the day at Loquat Hill Park, a serene spot perfect for unwinding. Get
            ready for a day filled with
            exploration and memorable moments!
          </div>
          <view v-for="(place, index) in day2Places" :key="'day2-' + index">
            <n-collapse arrow-placement="right">
              <n-collapse-item :title="place.name" :name="'day2-place' + index">
                <div class="AITripRatingCard">
                  <RatingCard />
                </div>
              </n-collapse-item>
            </n-collapse>
          </view>
        </div>

        <div title="Day 3" name="day3">
          <div class="container">
            <div class="Daybox1">
              <n-icon>
                <Calendar style="color: #7446af"></Calendar>
              </n-icon>
            </div>
            <p class="AITripSubSubTitle">Day3</p>
          </div>
          <div class="day-description">
            Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining experiences.
            Start your day at E'ling Park,
            where you can enjoy stunning views of the city and relax in nature. For lunch, head to XiaoTianE on JianXin
            North Road for some authentic
            local cuisine. After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
            Then, treat yourself to a
            delightful meal at Latitude 29. End the day at Loquat Hill Park, a serene spot perfect for unwinding. Get
            ready for a day filled with
            exploration and memorable moments!
          </div>
          <view v-for="(place, index) in day3Places" :key="'day3-' + index">
            <n-collapse arrow-placement="right">
              <n-collapse-item :title="place.name" :name="'day3-place' + index">
                <div class="AITripRatingCard">
                  <RatingCard />
                </div>
              </n-collapse-item>
            </n-collapse>
          </view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AITripdivider {
  width: 40vw;
}

.Pagedescription {
  margin: 30px;
  width: 40vw;
  height: auto;
}

.ItineraryAll {
  margin: 30px;
  height: auto;
  width: 40vw;
}

.day-description {
  margin-bottom: 10px;
  font-size: 16px;
  height: auto;
  width: 40vw;
}

.AITripRatingCard {
  margin-top: 10px;
  height: auto;
  width: 35vw;
}

.AITripTitle {
  width: 40vw;
  font-size: 2em;
  /* 设置字体大小 */
  font-weight: bold;
  /* 设置字体粗细 */
  color: #333;
  /* 设置字体颜色 */
  margin-left: 30px;
  /* 设置边距 */
  text-align: left;
  /* 设置文本对齐方式 */
  padding-bottom: 10px;
  /* 设置内边距 */
}

.AITripSubTitle {
  width: 40vw;
  font-size: 1.3em;
  /* 设置字体大小 */
  font-weight: bold;
  /* 设置字体粗细 */
  color: #333;
  /* 设置字体颜色 */
  margin: 30px;
  /* 设置边距 */
  text-align: left;
  /* 设置文本对齐方式 */
  padding-bottom: 0px;
  /* 设置内边距 */
}

.AITripSubSubTitle {
  width: 40vw;
  font-size: 1.2em;
  /* 设置字体大小 */
  font-weight: bold;
  /* 设置字体粗细 */
  color: #333;
  /* 设置字体颜色 */
  padding-bottom: 0px;
  /* 设置内边距 */
  padding: 5px;
}

.AITripSwiper {
  margin: 30px;
  width: 36vw;
  align: center;
  height: auto;
}

.AITripMap {
  position: fixed;
  top: 40px;
  right: 0px;
  width: 40vw;
  height: 800px;
  margin: 30px;
  padding-right: 30px;
  float: right;
}

.SaveItinerary {
  border-radius: 10px;
  background-color: #dfd3ee;
  color: #7446af;
  float: right;
  margin-right: 100px;
}

.container {
  display: flex;
  margin: 30px;
  bottom: 0px;
}

.buttoncontainer {
  display: flex;
  margin: 30px;
  bottom: 0px;
}

.box {
  height: auto;
  /* 默认高度，根据内容自动调整 */
  border: 1px solid #ccc;
  /* 边框样式，可选 */
}

.box1 {
  width: 20px;
  height: 20px;
}

.Daybox1 {
  width: 20px;
  height: 20px;
  padding-top: 10px;
}

.box2 {
  width: 55%;
}

.box1,
.box2 {
  align-self: stretch;
}

.Daybox1,
.AITripSubSubTitle {
  align-self: stretch;
}

.header {
  width: 45vw;
  display: flex;
  justify-content: space-between;
  margin: 0px;
}

.AITripLeft {
  width: 50vw;
  margin-left: 120px;
}
</style>
