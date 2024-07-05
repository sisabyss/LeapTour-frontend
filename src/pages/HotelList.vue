<template>
  <!-- Navigation Bar with Border -->
  <NavBar />

  <div class="pb-4">
    <div class="container mx-auto text-center my-10">
      <h1 class="font-semibold text-lg md:text-3xl">Hotels and Places to stay</h1>
    </div>

    <!-- Check In/Out and Guests Filter -->
    <div class="border-b mb-10 z-30 md:sticky-top bg-white -mt-4">
      <div
        class="container mx-auto block space-y-4 md:space-y-0 md:grid md:grid-cols-3 gap-2 px-4 py-5"
      >
        <!-- Check In -->
        <div class="w-full relative">
          <span class="absolute text-xs bg-white font-semibold px-2 -top-2 left-2"> Check In </span>
          <!-- Input Field for 'checkin' date -->
          <input
            type="date"
            name="checkin"
            :value="filterParams"
            class="w-full rounded border-y border-r shadow px-4 py-2 border-l-8 border-l-green-600 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          />
        </div>

        <!-- Check Out -->
        <div class="w-full relative">
          <span class="absolute text-xs bg-white font-semibold px-2 -top-2 left-2">
            Check Out
          </span>

          <!-- Input field for 'checkout' date -->
          <input
            type="date"
            name="checkout"
            :value="filterParams"
            class="w-full rounded border-y border-r shadow px-4 py-2 border-l-8 border-l-red-600 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
          />
        </div>

        <!-- Guests -->
        <div
          class="w-full rounded border-y border-r shadow px-4 py-2 border-l-8 border-l-gray-500 relative"
        >
          <!-- Click-enbaled Overlay, that toggles Guests Field -->
          <div
            class="absolute w-full h-full top-0 left-0 cursor-pointer bg-transparent z-10"
            @click="
              () => {
                guestsToggle = true
              }
            "
          />

          <span class="absolute text-xs bg-white font-semibold px-2 -top-2 left-0"> Guests </span>

          <!-- FilterParams 'rooms' and 'adults' properties displayed on input display -->
          <p class="w-full">{{ filterParams.rooms }} room, {{ filterParams.adults }} adults</p>

          <span class="absolute top-3 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>

          <!-- Dropdown is displayed If Guests Toggle is Clicked, hence 'guestsToggle' set to true -->
          <div v-if="guestsToggle" class="absolute z-20 w-full left-0 top-12">
            <div
              class="h-4 w-4 bg-white shadow transform rotate-45 mx-auto -mb-2 border border-gray-200"
            />
            <div class="bg-white shadow-md w-full p-4 space-y-2 relative">
              <!-- Close Button -->
              <p
                class="flex justify-end pb-2 relative"
                @click="
                  () => {
                    guestsToggle = false
                  }
                "
              >
                <svg
                  class="h-4 w-4 block cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>

              <!-- Rooms -->
              <div class="flex justify-between items-center">
                <p>Rooms</p>
                <!-- Input Field for 'rooms' -->
                <Input
                  type="number"
                  name="rooms"
                  :value="filterParams"
                  classProps="w-14 rounded border p-1 text-center focus:text-gray-700 focus:bg-white focus:outline-none"
                />
              </div>

              <!-- Adults -->
              <div class="flex justify-between items-center">
                <p>Adults</p>
                <!-- Input Field from 'adults' -->
                <Input
                  type="number"
                  name="adults"
                  :value="filterParams"
                  classProps="w-14 rounded border p-1 text-center focus:text-gray-700 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Check In/Out and Guests Filter -->

    <div class="container mx-auto px-4 lg:grid lg:grid-cols-12 gap-2">
      <!-- Map view with Route Link to map view -->
      <div class="lg:col-span-3">
        <div class="w-full border shadow mt-2 p-2">
          <div class="relative">
            <img src="../assets/map.png" alt="Map" class="w-full h-20 lg:h-full object-cover" />
            <div class="absolute w-full h-full top-0 flex items-center justify-center">
              <button
                class="bg-white rounded-sm border border-black py-2 px-4 hover:bg-black hover:text-white"
                onClick=""
              >
                <p class="font-semibold flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View On Map
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- / Map view -->

      <!-- Hotels Listing -->
      <div class="lg:col-span-9">
        <!-- Displays a loading if 'hotels' has no data in state or data fetching is in loading state -->
        <!-- <PlaceListLoader v-if="store.hotels == [] || store.isLoading" /> -->
        <HotelCard v-for="(hotel, i) in store.hotels" :key="i" :hotel="hotel"> </HotelCard>
        <!-- Maps through 'hotels' list when it is ready or data fetching is not in loading state -->
      </div>
    </div>
  </div>

  <!-- Footer Component -->
  <HomeFooter />
</template>

<style></style>

<script setup>
import NavBar from '../components/NavBar.vue'
import HomeFooter from '../components/HomeFooter.vue'
import HotelCard from '../components/HotelCard.vue'
// import PlaceListLoader from '../components/Loader/PlaceCardLoader.vue';
import { useBaseStore } from '../store/pinia'
import { watch } from 'vue'
import axios from 'axios'
import moment from 'moment/moment'
import { getPlacesByCity } from '../api/tripadvisor'

const store = useBaseStore()
const filterParams = {
  limit: 30,
  rooms: 1,
  adults: 1,
  hotel_class: '4, 5',
  checkin: moment(new Date()).format('YYYY-MM-DD'),
  checkout: '',
  nights: 1,
  pricesmax: '',
  pricesmin: ''
}

let guestsToggle = false

watch(
  () => store.coordinates,
  () => {
    let source = axios.CancelToken.source()

    // Loading state is set to true while data is being fetched from endpoint
    store.isLoading = true

    // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
    getPlacesByCity('hotels', store.coordinates.city, source).then((data) => {
      // Data is received and setstore to 'attractions' state list filtering out items with zero reviews, items with id '0' and items with no 'name' property
      console.log(data)
      store.hotels = data

      // Setting loading state back to false to stop loading
      store.isLoading = false
    })

    // Effect Cleanup
    return () => {
      source.cancel()
    }
  }
)
</script>
