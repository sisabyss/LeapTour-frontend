<script setup>
// import AttractionLoader from '../components/Loader/AttractionLoader.vue';
import HomeFooter from '../components/HomeFooter.vue'
import { useBaseStore } from '../store/pinia'
import { watch } from 'vue'
import axios from 'axios'
import { getPlacesByCity } from '../api/tripadvisor'
import { NRate } from 'naive-ui'

const store = useBaseStore()
watch(
  () => store.coordinates,
  () => {
    let source = axios.CancelToken.source()

    // Loading state is set to true while data is being fetched from endpoint
    store.isLoading = true

    // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
    // getPlacesByLatLng('attractions', mainContext.coordinates.lat, mainContext.coordinates.lng, { limit: 30 }, source).then((data) => {
    getPlacesByCity('sights', store.coordinates.city, source).then((data) => {
      // Data is received and set to 'attractions' state list filtering out items with zero reviews, items with id '0' and items with no 'name' property
      store.attractions = data

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

<template>
  <div class="container mx-auto pb-4">
    <div class="text-center my-10">
      <h1 class="font-semibold text-lg md:text-3xl">Attractions near you</h1>
    </div>

    <!-- <AttractionLoader v-if="mainContext.attractions == [] || mainContext.isLoading" /> -->
    <!-- <div v-else> -->
    <div>
      <!-- Renders Section If 'attractions' list is ready or data fetching is not in loading state -->
      <div class="block md:grid md:grid-cols-12 md:px-4 my-2 gap-3">
        <!-- Mapping through list of attractions object  -->
        <div
          v-for="(attraction, i) in store.attractions"
          :key="i"
          class="md:col-span-6 lg:col-span-4 mb-4"
        >
          <div class="w-full h-[250px] md:h-[400px] object-cover">
            <!-- Link that routes to the placeDetails route with the current attraction 'location_id' passed into the url parameter -->
            <router-link to="/">
              <!-- Attraction Image - display if Image is found in result object, else a default image is displayed as fallback -->
              <img
                :src="processedPhotoUrl(attraction.photo)"
                alt=""
                class="w-full h-full object-cover cursor-pointer"
              />
            </router-link>
          </div>
          <div class="px-4 md:px-0 py-2 space-y-1">
            <!-- Attraction Name -->
            <h2 class="font-semibold md:text-lg">
              {{ attraction.cnname }}
            </h2>

            <p class="flex items-center text-xs">
              <!-- Attraction Rating with 'rating' property passed to generate a React Stars Rating element - displays only if found in result object  -->
              <span class="flex items-center mr-1">
                <n-rate readonly :default-value="Number(attraction?.grade) / 2" />
              </span>

              <!-- Attraction Reviews Count -->
              {{ attraction.commentCount }} Reviews
            </p>
            <p class="text-sm">
              <!-- Mapping thought Attraction Subtype List  -->
              <span v-for="(comment, i) in attraction.comments" :key="i">
                {{ comment }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer Component -->
  <HomeFooter />
</template>

<style></style>
