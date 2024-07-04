

<template>
  <div >
  <NavBar />


  <div class="container mx-auto grid grid-cols-4" style="height: 500px">
      <div class="col-span-4" style="padding:2%;">
          <n-carousel show-arrow>
              
              <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
              >
              <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
              >
              <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
              >
          </n-carousel>
      </div>
  </div>
  <div class="container mx-auto p-4" style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
      <span class="font-semibold text-2xl md:text-4xl" style="font-weight: 700;">Chongqing, China</span>
  </div>


  <div class="container mx-auto p-4" style="margin-top: 30px;">
      <h1 class="font-semibold text-lg md:text-2xl text-center">Plan your trip</h1>
  </div>


  <div class="container mx-auto p-4">
  <div class="absolute inset-x-0 w-[60%] md:w-3/12 mx-auto">
    <form class="flex items-center relative" @submit.prevent="handleSubmit">
      <svg class="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <n-auto-complete v-model="search" :options="options" placeholder="重庆" clearable @select="handleSelect">
        <template #default="{ handleInput, handleBlur, handleFocus }">
          <input
            type="text"
            placeholder="重庆"
            class="bg-white rounded-full w-full pl-12 py-3 shadow-xl focus:outline-none border border-black"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"
            v-model="search"
          />
        </template>
      </n-auto-complete>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full h-10 w-10 absolute right-0 mr-1 flex items-center justify-center">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  </div>
</div>


  <div class="container mx-auto p-4" style="margin-top: 50px; display: flex; justify-content: center; align-items: center;">
      <span>Get a personalized itinerary just for you, guided by traveler tips and reviews.</span>
  </div>
      


  <ToVisit />
  <ToEat />
  <ToStay />
  <!-- Traveler Choice Section -->
  <div class="bg-[#004f32]">
    <div class="container mx-auto mmd:grid mmd:grid-cols-12 h-[400px] sm:h-[500px] mmd:h-[600px] overflow-hidden">
      <div class="col-span-3 text-center py-6 flex flex-col items-center justify-center p-4 md:p-2">
        <img src="@/assets/botb_mark.svg" alt="" class="h-16 lg:h-20 mb-5 lg:mb-10" />
        <h2 class="text-white font-bold text-2xl md:text-[2.15em]">Travelers' Choice Best of the Best</h2>
        <button
          class="rounded-full bg-black hover:bg-gray-600 transition ease-out duration-200 text-white w-fit py-2 sm:py-3 px-3 sm:px-4 mt-5 lg:mt-14"
        >
          <p class="font-semibold text-sm">See the winners</p>
        </button>
      </div>
      <!-- Section Background Image - Displays only on Large devices, Like Desktop -->
      <div class="hidden mmd:block h-full col-span-9 bg-cover" :style="{ backgroundImage: '@/assets/tc_cards_desktop.jpeg' }" />
    </div>
  </div>

  <!-- Trending in Travel Section -->
  <div class="container mx-auto px-4 py-10">
    <h2 class="font-bold text-lg md:text-2xl my-5">Trending in Travel</h2>
    <div>
      <!-- Trending in Travel Toggles -->
      <div class="flex text-sm md:text-base space-x-4 md:space-x-8 whitespace-nowrap overflow-x-auto travel_toggle">
        <!-- Places to go toggle -->
        <h3 class="border-black font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer">Places to Go</h3>

        <!-- Things to Do toggle -->
        <h3 class="border-black font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer">Things to Do</h3>

        <!-- Places to Stay toggle -->
        <h3 class="border-black font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer">Places to Stay</h3>
      </div>
      <div>
        <!-- List of Places to Go - Display only if 'toGo'is true -->
        <div class="grid grid-cols-12">
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
        <div class="grid grid-cols-12">
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
        <div class="grid grid-cols-12">
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
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import ToVisit from '../components/ToVisit.vue';
import ToEat from '../components/ToEat.vue';
import ToStay from '../components/ToStay.vue';
import HomeFooter from '../components/HomeFooter.vue';
import{ NCarousel } from 'naive-ui';
import { ref, computed } from 'vue';
import { NAutoComplete } from 'naive-ui';

const search = ref('');

const options = computed(() => {
return [
  "香港",
"湄洲岛",
"邵阳",
"玛多",
"桑植",
"林州",
"盱眙",
"沙县"

].filter((city) =>
  city.toLowerCase().includes(search.value.toLowerCase())
).map((city) => {
  return {
    label: city,
    value: city
  };
});
});

const handleSelect = (value) => {
search.value = value;
};
function handleSubmit() {
// 处理提交逻辑
console.log("Search submitted:", search.value);
}
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
  'Mazatlan Hotels',
  'Amalfi Coast Hotels',
  'Miami Beach Hotels',
  'Fort Lauderdale Hotels',
  'South Padre Island Hotels',
  'Jackson Hotels',
  'Yosemite National Park Hotels',
  'South Lake Tahoe Hotels',
];

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
  'Things to Do in Fredericksburg',
  'Things to Do in California',
  'Things to Do in Puerto Rico',
  'Things to Do in Rome',
  'Things to Do in Venice',
  'Things to Do in Edinburgh',
  'Things to Do in Niagara Falls',
];

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
  'Barcelo Aruba',
  'Sheraton Waikiki',
  'Finest Playa Mujeres',
  'Hyatt Ziva Cap Cana',
  'JW Marriott Marco Island Beach Resort',
  'Wyndham Alltra Cancun',
  'Atelier Playa Mujeres',
  'Hotel Riu Palace Cabo San Lucas',
  'Grand Hyatt Baha Mar',
  'The Venetian Resort',
  'Hyatt Ziva Puerto Vallarta',
  'Barcelo Maya Riviera',
  'Grand Velas Riviera Maya',
  'Hard Rock Hotel Cancun',
  'The Ritz-Carlton Orlando, Grande Lakes',
  'Sandos Caracol Eco Resort',
  'Hyatt Ziva Los Cabos',
  'Grand Fiesta Americana Coral Beach',
  'Hard Rock Hotel Riviera Maya',
  'Andaz Maui At Wailea Resort',
  'Caribe Hilton',
  'Live Aqua Beach Resort Cancun',
  'Iberostar Selection Cancun',
  'Hyatt Zilara Cancun',
  'Hilton Playa del Carmen',
  "Ka'anapali Beach Hotel",
  'Paris Las Vegas',
  'Planet Hollywood Resort & Casino',
  'Club Med Sandpiper Bay',
  'Hyatt Zilara Cap Cana',
  'Beloved Playa Mujeres',
  'Hilton Hawaiian Village Waikiki Beach Resort',
];
</script>

<style>

.home {
  transition: background-color 0.3s ease;
}
.home.darken {
  background-color: rgba(0, 0, 0, 0.5);
}

.rounded {
  border-radius: 15px; 
}

.carousel-img {
width: 100%;
height: 490px;
object-fit: cover;
border-radius: 15px;

}
</style>



