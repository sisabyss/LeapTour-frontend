import { defineStore } from 'pinia';
import { getLatLngByIP } from '../api/tripadvisor';

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
      await getLatLngByIP().then((coordinates) => {
        this.coordinates = coordinates;
        console.log('Ur location init: ', this.coordinates.lat, this.coordinates.lng);
      });
    },
  },
});
