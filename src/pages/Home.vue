<template>
  <WhereTo />
  <ToVisit />
  <ToEat />
  <ToStay />
  <!-- Traveler Choice Section -->
  <div class="bg-[#D1A6FE]">
    <div
      class="container mx-auto md:grid md:grid-cols-12 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
    >
      <div class="col-span-3 text-center py-6 flex flex-col items-center justify-center p-4 md:p-2">
        <img src="@/assets/logo.svg" alt="" class="h-16 lg:h-20 mb-5 lg:mb-10" />
        <h2 class="text-white font-bold text-2xl md:text-[2.15em]">旅行者的至尊之选🐐</h2>
        <button
          class="rounded-full bg-black hover:bg-gray-600 transition ease-out duration-200 text-white w-fit py-2 sm:py-3 px-3 sm:px-4 mt-5 lg:mt-14"
        >
          <p class="font-semibold text-sm">查看有哪些</p>
        </button>
      </div>
      <!-- Section Background Image - Displays only on Large devices, Like Desktop -->
      <div
        class="hidden md:block h-full col-span-9 bg-cover bg-[url('/src/assets/tc_cards_desktop.png')]"
      ></div>
      <!-- Section Background Image - Displays only on Small Devices, Mobile -->
      <div
        class="block md:hidden h-full bg-contain bg-top bg-[url('/src/assets/tc_cards_tablet.png')] bg-no-repeat"
      />
    </div>
  </div>

  <!-- Trending in Travel Section -->
  <div class="container mx-auto px-4 py-10">
    <h2 class="font-bold text-lg md:text-2xl my-5">Trending in Travel</h2>
    <div>
      <!-- Trending in Travel Toggles -->
      <div
        class="flex text-sm md:text-base space-x-4 md:space-x-8 whitespace-nowrap overflow-x-auto travel_toggle"
      >
        <!-- Places to go toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toGo')"
          :class="{
            'border-black': activeToggle === 'toGo',
            'border-transparent': activeToggle !== 'toGo'
          }"
        >
          Places to Go
        </h3>

        <!-- Things to Do toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toDo')"
          :class="{
            'border-black': activeToggle === 'toDo',
            'border-transparent': activeToggle !== 'toDo'
          }"
        >
          Things to Do
        </h3>

        <!-- Places to Stay toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toStay')"
          :class="{
            'border-black': activeToggle === 'toStay',
            'border-transparent': activeToggle !== 'toStay'
          }"
        >
          Places to Stay
        </h3>
      </div>
      <div>
        <!-- List of Places to Go - Display only if 'toGo'is true -->
        <div v-if="activeToggle === 'toGo'" class="grid grid-cols-12">
          <!-- Mapping throughlist of items to render -->
          <a
            v-for="item in place_to_go"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>

        <!-- List of Things to Do - Displays only if 'toDo' is true -->
        <div v-if="activeToggle === 'toDo'" class="grid grid-cols-12">
          <!-- Mapping through List of Items to render -->
          <a
            v-for="item in things_to_do"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>

        <!-- List of Places to Stay - Displays only if 'toStay' is true -->
        <div v-if="activeToggle === 'toStay'" class="grid grid-cols-12">
          <!-- Mapping through list of Items to render -->
          <a
            v-for="item in place_to_stay"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </div>

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
