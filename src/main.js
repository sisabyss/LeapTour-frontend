import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

import Home from './pages/Home.vue';
import HotelList from './pages/HotelList.vue';
import RestaurantList from './pages/RestaurantList.vue';
import AttractionList from './pages/AttractionList.vue';
import TripBuild from './pages/TripBuild.vue';
import AITripPage from './pages/AITripPage.vue';
import UserProfile from './pages/UserProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hotels', component: HotelList },
  { path: '/restaurants', component: RestaurantList },
  { path: '/attractions', component: AttractionList },
  { path: '/ai_itinerary', component: TripBuild },
  { path: '/aitrip', component: AITripPage },
  { path: '/ai_itinerary', component: AIView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  let flag = true
  let response = await axios.post('http://192.168.1.145:8080/check/checkLogin')
  if(response.data.msg == "是否登录:false")
  {
    if(to.path !== "/" && to.path !== "/sign_in")
      {
        console.log("请先登录")
        alert("请先登录")
        flag = false
      }
  }
  return flag
})


app.use(pinia);
app.use(router);
app.mount('#app');
