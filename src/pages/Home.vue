<template>
  <WhereTo />
  <ToVisit />
  <ToEat />
  <ToStay />
  <!-- Traveler Choice Section -->

  <HomeFooter />
</template>

<script setup>
import WhereTo from '../components/WhereTo.vue'
import ToVisit from '../components/ToVisit.vue'
import ToEat from '../components/ToEat.vue'
import ToStay from '../components/ToStay.vue'
import HomeFooter from '../components/HomeFooter.vue'

const place_to_go = [
  'Las Vegas Hotels',
  'Destin Hotels',
  'Myrtle Beach Hotels',
  'Gatlinburg Hotels',
  'Walt Disney World Hotels',
  'Orlando Hotels',
  'Ocean City Hotels',
  'Panama City Beach Hotels',
  'Branson Hotels',
  'Seattle Hotels',
  'Turks and Caicos Hotels',
  'Mazatlan Hotels'
]

const things_to_do = [
  'Things to Do in Atlanta',
  'Things to Do in Austin',
  'Things to Do in Denver',
  'Things to Do in Kansas City',
  'Things to Do in Gatlinburg',
  'Things to Do in Asheville',
  'Things to Do in Pigeon Forge',
  'Things to Do in Philadelphia',
  'Things to Do in Santa Barbara',
  'Things to Do in Myrtle Beach',
  'Things to Do in Jacksonville',
  'Things to Do in Colorado',
  'Things to Do in Lake Tahoe (California)',
  'Things to Do in Fredericksburg'
]

const place_to_stay = [
  'Beaches Turks & Caicos',
  'Moon Palace Cancun',
  'Majestic Elegance Costa Mujeres',
  'Hyatt Ziva Cancun',
  'Moon Palace Jamaica',
  'Dreams Punta Cana Resort & Spa',
  "Disney's Grand Floridian Resort & Spa",
  'Majestic Mirage Punta Cana',
  'Planet Hollywood Cancun',
  'Barcelo Aruba'
]

import { ref } from 'vue'

// 状态变量
const activeToggle = ref('toGo')

const toggle = (selection) => {
  activeToggle.value = selection
}
</script>
