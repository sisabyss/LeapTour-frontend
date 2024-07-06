import TikTok from '../pages/TikTok/index.vue'
import Home from '../pages/Home.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },

  { path: '/tiktok', component: TikTok },

  { path: '/home', component: Home},

  // {path: '/album-detail', component: () => import('@/pages/other/AlbumDetail.vue')},

  {
    path: '/foods',
    component: () => import('@/pages/RestaurantList.vue')
  },

  {
    path: '/hotels',
    component: () => import('@/pages/HotelList.vue')
  },

  {
    path: '/sights',
    component: () => import('@/pages/AttractionList.vue')
  },

  {
    path: '/map_view',
    component: () => import('@/pages/MapView.vue')
  },

  {
    path: '/ai_itinerary',
    component: () => import('@/pages/AITripSearch.vue')
  },

  {
    path: '/profile',
    component: () => import('@/pages/UserProfile.vue')
  },

  {
    path: '/flight',
    component: () => import('@/pages/Flights.vue')
  },

  {
    path: '/ai_loading',
    component: () => import('@/pages/AILoading.vue')
  },

  {
    path: '/trip_build',
    component: () => import('@/components/TripBuild.vue')
  },

  {
    path: '/ai_page',
    component: () => import('@/pages/AITripPage.vue')
  }
]

export default routes
