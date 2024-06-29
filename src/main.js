import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './pages/Home.vue';
import AIView from './pages/AITripPage.vue';
import HotelList from './pages/HotelList.vue';
import Restaurant from './pages/Restaurant.vue';
import AttractionList from './pages/AttractionList.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/ai_itinerary', component: AIView },
  { path: '/hotel', component: HotelList },
  { path: '/restaurant', component: Restaurant },
  { path: '/attraction', component: AttractionList },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router).mount('#app');
