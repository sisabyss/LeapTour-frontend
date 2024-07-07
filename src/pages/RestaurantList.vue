<template>
  <div class="container mx-auto pb-4">
    <div class="text-center my-10">
      <h1 class="font-semibold text-lg md:text-3xl">Restaurants near you</h1>
    </div>

    <div class="px-4 lg:grid lg:grid-cols-12 lg:gap-2">
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

      <!-- {/* Restaurants List */} -->
      <div class="lg:col-span-9">
        <!-- <PlaceListLoader v-if="!mainContext.restaurants || mainContext.isLoading" /> -->
        <div
          v-for="(restaurant, i) in store.restaurants"
          :key="i"
          class="grid grid-cols-12 my-2 border border-gray-200 rounded shadow hover:shadow-xl cursor-pointer"
        >
          <!-- Restaurant Image -->
          <div class="col-span-12 md:col-span-4 h-[180px]">
            <!-- Link that routes to the placeDetails route with the current restaurant 'location_id' passed into the url parameter -->
            <a href="restaurants/">
              <!-- Attraction Image - display if Image is found in result object, else a default image is displayed as fallback -->
              <img
                :src="processedPhotoUrl(restaurant.photo)"
                alt="{restaurant?.name}"
                class="w-full h-full object-cover"
              />
            </a>
          </div>
          <!-- /Restaurant Image -->
          <!-- Restaurant Details -->
          <div class="col-span-12 md:col-span-8 px-2 md:px-4 py-2">
            <!-- Restaurant Name -->
            <h2 class="font-semibold text-lg md:text-xl">
              {{ restaurant?.cnname }}
            </h2>
            <p class="flex items-center my-1">
              <!-- Restaurant Rating with 'rating' property passed to generate a React Stars Rating element - displays only if found in result object  -->
              <span class="flex items-center mr-1">
                <n-rate readonly :default-value="Number(restaurant?.grade) / 2" />
              </span>

              <!-- Restaurant Reviews Count -->
              <span class="text-sm mr-3"> {{ restaurant?.commentCount }} Reviews </span>

              <!-- Restaurant Open or Close Button - Displayed with specific colors based on status -->
              <button
                class="rounded-full py-1 px-2 md:px-3 my-1 shadow-md"
                :class="
                  restaurant?.open_now_text?.includes('Closed') ? 'bg-red-400' : 'bg-green-400'
                "
              >
                <p class="text-sm flex items-center">
                  <svg
                    class="h-4 md:h-5 w-4 md:w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <!-- Place Close/Open Status Diplay with an Open now fallback just incase no text is found in object -->
                  {{ restaurant.open_now_text ? restaurant.open_now_text : '正在营业' }}
                </p>
              </button>
            </p>

            <!-- Cuisines/Special Diets - Section display only if either cusine or diet restriction is found in place details -->
            <p v-if="restaurant?.cuisine?.length > 0" class="text-xs my-2">
              <!-- Mapping through list of cuisines -->
              <span
                v-for="(item, i) in restaurant?.cuisine"
                :key="i"
                class="bg-gray-300 rounded-full inline-block px-2 py-1 mr-1 mb-1"
              >
                {{ item?.name }}
              </span>

              <!-- Restaurant Price Level - Displays only if found -->
              <span v-if="restaurant?.price_level"> ~ {{ restaurant?.price_level }} </span>
            </p>

            <!-- Restaurant Review Snippet - Render section if 'reviews' is found on restaurant object, if 'reviews' first item has value that is not 'NULL' and if 'reviews' length is greater than 0 -->
            <div
              v-if="
                restaurant?.comments &&
                restaurant?.comments[0] !== null &&
                restaurant?.comments?.length > 0
              "
            >
              <div v-for="(comment, i) in restaurant?.comments" :key="i">
                <div class="h-[1px] bg-gray-300 my-3" />

                <p class="flex items-center text-sm font-medium">
                  <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M2 11h5l-3 5h4l3-5V2H2zM13 2v9h5l-3 5h4l3-5V2z"></path>
                  </svg>
                  “{{ comment }}”
                </p>
              </div>
            </div>
          </div>
          <!-- /Restaurant Details -->
        </div>
      </div>
      <!-- / Restaurants List -->
    </div>
  </div>

  <!-- {/* Footer Component */} -->
  <HomeFooter />
</template>

<script setup>
import HomeFooter from '../components/HomeFooter.vue'
// import PlaceListLoader from '../components/Loader/PlaceCardLoader.vue';
import { NRate } from 'naive-ui'
import { useBaseStore } from '../store/pinia'
import { watch } from 'vue'
import axios from 'axios'
import { getPlacesByCity } from '../api/tripadvisor'

const store = useBaseStore()

watch(
  () => store.coordinates,
  () => {
    let source = axios.CancelToken.source()

    // Loading state is set to true while data is being fetched from endpoint
    store.isLoading = true

    // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
    getPlacesByCity('foods', store.coordinates.city, source).then((data) => {
      // Data is received and set to 'attractions' state list filtering out items with zero reviews, items with id '0' and items with no 'name' property
      store.restaurants = data

      // Setting loading state back to false to stop loading
      store.isLoading = false
    })

    // Effect Cleanup
    return () => {
      source.cancel()
    }
  }
)

const processedPhotoUrl = (url) => {
  if (url) {
    // 去掉最后的尺寸参数
    return url.slice(0, url.lastIndexOf('/'))
  } else {
    return 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'
  }
}
</script>
