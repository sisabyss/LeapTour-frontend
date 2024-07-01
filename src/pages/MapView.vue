<script setup>
import Header from '../components/Map/Header.vue';
import Map from '../components/Map/Map.vue';
import Sidebar from '../components/Map/SideBar.vue';
import Filter from '../components/Map/Filter.vue';
</script>

<template>
  <div class="w-full flex flex-wrap-reverse md:flex-nowrap md:h-screen">
    <div class="h-auto md:h-full w-full md:w-[35%] lg:w-[23%] md:overflow-y-scroll">
      <div class="w-full text-center">
        <!-- Close Map View Button -->
        <button class="bg-black text-white py-2 px-8 rounded my-2 hover:bg-gray-600 transition ease-in duration-100">
          <p>Close Map View</p>
        </button>
      </div>

      <!-- Sidebar Component Rendered with filteredPlaces (Determined by place type and rating from filter) if found or all places passed in prop to 'places' -->
      <Sidebar />
    </div>
    <div class="h-[50vh] md:h-full w-full md:w-[65%] lg:w-[79%] relative">
      <!-- Map Header Component, with setCoordinate State passed in as props -->
      <Header />

      <!-- Map Component with 'setBounds', 'setCoordinates', 'coordinates' and either 'filteredPlaces' or 'places' states passed in as props to component  -->
      <Map />

      <!-- Map Filter Component - renders componet to set place type and rating -->
      <Filter />
    </div>
  </div>
</template>
