import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import baiduMap from 'vue3-baidu-map-gl';
import axios from 'axios';
const pinia = createPinia();

import './style.css';

const app = createApp(App);
app.use(pinia);

import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';

import Home from './pages/Home.vue';
import HotelList from './pages/HotelList.vue';
import RestaurantList from './pages/RestaurantList.vue';
import AttractionList from './pages/AttractionList.vue';
import MapView from './pages/MapView.vue';
/* import TripBuild from './pages/TripBuild.vue'; */
import UserProfile from './pages/UserProfile.vue';
import { ref } from 'vue';
/* import AITripSearch from './pages/AITripSearch.vue' */
import AITripSearch from './pages/AITripSearch.vue'
import AITrip from './pages/AITripPage.vue'
import AILoading from './pages/AILoading.vue'
import Flights from './pages/Flights.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hotels', component: HotelList },
  { path: '/restaurants', component: RestaurantList },
  { path: '/attractions', component: AttractionList },
  { path: '/map_view', component: MapView },
  { path: '/ai_itinerary', component: AITrip },
  { path: '/aisearch', component: AITripSearch },
  { path: '/user_profile', component: UserProfile },
  { path: '/AIloading', component: AILoading },
  { path: '/flights', component: Flights },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


let open_sign = ref(false)
app.provide('openSign', open_sign)

router.beforeEach(async (to) => {

  if(to.path !== "/") {
    let response = await axios.post('http://192.168.1.145:8080/check/checkLogin')
    if(response.data.msg == "是否登录:false") {
      //未登录，打开登录弹窗
      console.log("未登录")
      open_sign.value = true
      return false
      }
  }
  return true
})

app.use(baiduMap, {
  ak: '40rN64E5W1CA7HiAYXSrxWFF2MHNa5eg',
});

app.use(router);
app.mount('#app');
