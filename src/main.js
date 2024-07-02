import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import baiduMap from 'vue3-baidu-map-gl';

import { createPinia } from 'pinia';
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
import TripBuild from './pages/TripBuild.vue';
import UserProfile from './pages/UserProfile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/hotels', component: HotelList },
  { path: '/restaurants', component: RestaurantList },
  { path: '/attractions', component: AttractionList },
  { path: '/map_view', component: MapView },
  { path: '/ai_itinerary', component: TripBuild },
  { path: '/user_profile', component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { createMemoryHistory, createRouter } from 'vue-router';

import Home from './pages/Home.vue';
import HotelList from './pages/HotelList.vue';
import RestaurantList from './pages/RestaurantList.vue';
import AttractionList from './pages/AttractionList.vue';
import MapView from './pages/MapView.vue';


app.use(pinia);
app.use(router);
app.mount('#app');
