<template>
  <MainContext.Provider :value="contextValue">
    <slot />
  </MainContext.Provider>
</template>

<script>
// import { reactive, onMounted, provide, watch } from 'vue';
import { onMounted, reactive, provide, watch } from 'vue';
import { getPlacesByLatLng } from '../api/tripadvisor.js';
import axios from 'axios';

export const MainContext = Symbol('MainContext');

export default {
  name: 'MainContextProvider',
  setup() {
    const state = reactive({
      places: null,
      filteredPlaces: null,
      coordinates: {},
      bounds: {},
      rating: 0,
      type: 'restaurants',
      isLoading: false,
      restaurants: null,
      hotels: null,
      attractions: null,
    });

    // Get Current User Location
    onMounted(() => {
      console.log('Hello, mainContext Mounted');
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        state.coordinates = { lat: latitude, lng: longitude };
        console.log('Ur location: ', state.coordinates.lat, state.coordinates.lng);
      });
    });

    // Get Places for Map View
    // watch(
    // () => [state.type, state.bounds],
    // ([type, bounds]) => {
    // let source = axios.CancelToken.source();
    // state.isLoading = true;
    //
    // if (bounds.sw && bounds.ne) {
    // getPlacesByBounds(type, bounds.sw, bounds.ne, source)
    // .then((data) => {
    // state.places = data?.filter((place) => place.name);
    // state.isLoading = false;
    // })
    // .catch((error) => {
    // console.error(error);
    // });
    //
    // return () => {
    // source.cancel();
    // };
    // }
    // }
    // );

    // Get Places for Homepage
    watch(
      () => state.coordinates,
      (coordinates) => {
        console.log(`MainContext::watch(): new coordinates is is { lat: ${coordinates.lat}, lng: ${coordinates.lng} }`);
        let source = axios.CancelToken.source();
        state.isLoading = true;

        if (coordinates.lat && coordinates.lng) {
          const fetchData = async () => {
            try {
              const restaurantData = await getPlacesByLatLng('restaurants', coordinates.lat, coordinates.lng, { limit: 20, min_rating: 4 }, source);
              state.restaurants = restaurantData?.filter((restaurant) => restaurant.name && restaurant.location_id != 0);

              const attractionData = await getPlacesByLatLng('attractions', coordinates.lat, coordinates.lng, { limit: 20, min_rating: 4 }, source);
              state.attractions = attractionData?.filter((attraction) => attraction.name && attraction.location_id != 0 && attraction.rating > 0);

              const hotelData = await getPlacesByLatLng('hotels', coordinates.lat, coordinates.lng, { limit: 20, min_rating: 4 }, source);
              state.hotels = hotelData?.filter((hotel) => hotel.name && hotel.location_id != 0 && hotel.rating > 0);
            } catch (error) {
              console.error(error);
            }
          };

          fetchData();

          return () => {
            source.cancel();
          };
        }
      }
    );

    //   // Get Filtered Places by Rating
    //   watch(
    //     () => state.rating,
    //     (rating) => {
    //       state.filteredPlaces = state.places?.filter((place) => Number(place.rating) >= rating);
    //     }
    //   );

    const contextValue = reactive({
      ...state,
      setPlaces: (places) => (state.places = places),
      setCoordinates: (coordinates) => (state.coordinates = coordinates),
      setBounds: (bounds) => (state.bounds = bounds),
      setRating: (rating) => (state.rating = rating),
      setType: (type) => (state.type = type),
      setIsLoading: (isLoading) => (state.isLoading = isLoading),
    });

    provide(MainContext, contextValue);

    return {
      contextValue,
    };
  },
};
</script>
