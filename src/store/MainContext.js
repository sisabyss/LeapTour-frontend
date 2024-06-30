import { defineStore } from 'pinia';

export const useMainContextStore = defineStore('mainContext', {
  state: () => {
    return {
      coordinates: {},
      rating: 0,
      isLoading: false,
      restaurants: [],
      hotels: [],
      attractions: [],
    };
  },
  getters: {
    getRestaurants() {
      return this.restaurants;
    },
    getHotels() {
      return this.hotels;
    },
    getAttractions() {
      return this.attractions;
    },
  },
  actions: {
    async init() {
      console.log('Hello, mainContext Mounted');
      await navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        this.coordinates = { lat: latitude, lng: longitude };
        console.log('Ur location init: ', this.coordinates.lat, this.coordinates.lng);
      });
    },
  },
});
