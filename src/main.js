import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

import { createMemoryHistory, createRouter } from 'vue-router';

import Home from './pages/Home.vue';
import HotelList from './pages/HotelList.vue';
import RestaurantList from './pages/RestaurantList.vue';
import AttractionList from './pages/AttractionList.vue';
import UserProfile from './pages/UserProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hotels', component: HotelList },
  { path: '/restaurants', component: RestaurantList },
  { path: '/attractions', component: AttractionList },
  { path: '/ai_itinerary', component: AIView },
  { path: '/userprofile', component: UserProfile },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.mount('#app');
