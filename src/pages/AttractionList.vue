<script setup>
import AttractionLoader from '../components/Loader/AttractionLoader.vue';
import Navbar from '../components/NavBar.vue';
import HomeFooter from '../components/HomeFooter.vue';
import { useMainContextStore } from '../store/MainContext';
import { watch } from 'vue';
import axios from 'axios';
import { getPlacesByLatLng } from '../api/tripadvisor';
// import { RouterLink } from 'vue-router';

const mainContext = useMainContextStore();
watch(
  () => mainContext.coordinates,
  () => {
    let source = axios.CancelToken.source();

    // Loading state is set to true while data is being fetched from endpoint
    mainContext.isLoading = true;

    // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
    // getPlacesByLatLng('attractions', mainContext.coordinates.lat, mainContext.coordinates.lng, { limit: 30 }, source).then((data) => {
    getPlacesByLatLng('restaurants', mainContext.coordinates.lat, mainContext.coordinates.lng, { limit: 30 }, source).then((data) => {
      // Data is received and set to 'attractions' state list filtering out items with zero reviews, items with id '0' and items with no 'name' property
      console.log(data);
      mainContext.attractions = data.filter((item) => item.num_reviews !== 0 && item.location_id !== 0 && item.name);

      // Setting loading state back to false to stop loading
      mainContext.isLoading = false;
    });

    // Effect Cleanup
    return () => {
      source.cancel();
    };
  }
);
</script>

<template>
  <!-- Navbar with Border -->
  <Navbar />

  <div className="container mx-auto pb-4">
    <div className="text-center my-10">
      <h1 className="font-semibold text-lg md:text-3xl">Attractions near you</h1>
    </div>

    <AttractionLoader v-if="mainContext.attractions == [] || mainContext.isLoading" />
    <div v-else>
      <!-- Renders Section If 'attractions' list is ready or data fetching is not in loading state -->
      <div class="block md:grid md:grid-cols-12 md:px-4 my-2 gap-3">
        <!-- Mapping through list of attractions object  -->
        <div v-for="(attraction, i) in mainContext.attractions" :key="i" class="md:col-span-6 lg:col-span-4 mb-4">
          <div class="w-full h-[250px] md:h-[400px] object-cover">
            <!-- Link that routes to the placeDetails route with the current attraction 'location_id' passed into the url parameter -->
            <!-- <RouterLink to="`/attractions/${attraction.location_id}`"> -->
            <div>
              <!-- Attraction Image - display if Image is found in result object, else a default image is displayed as fallback -->
              <img
                :src="
                  attraction.photo
                    ? attraction.photo.images.large.url
                    : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'
                "
                alt=""
                class="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <!-- </RouterLink> -->
          </div>
          <div class="px-4 md:px-0 py-2 space-y-1">
            <!-- Attraction Name -->
            <h2 class="font-semibold md:text-lg">
              {{ attraction.name }}
            </h2>

            <p class="flex items-center text-xs">
              <!-- Attraction Rating with 'rating' property passed to generate a React Stars Rating element - displays only if found in result object  -->
              <span class="flex items-center mr-1">
                <!-- <ReactStarsRating -->
                <!-- :value="Number(attraction.rating)" -->
                <!-- :size="18" -->
                <!-- class="flex mr-2" -->
                <!-- :is-edit="false" -->
                <!-- primary-color="#00afef" -->
                <!-- secondary-color="#e5e7eb" -->
                <!-- /> -->
              </span>

              <!-- Attraction Reviews Count -->
              {{ attraction.num_reviews }} Reviews
            </p>
            <p class="text-sm">
              <!-- Mapping thought Attraction Subtype List  -->
              <span v-for="(type, i) in attraction.subtype" :key="i">
                {{ type.name }}
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
