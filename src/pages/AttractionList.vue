<script setup>
import AttractionLoader from '../components/Loader/AttractionLoader.vue';
import Navbar from '../components/NavBar.vue';
import HomeFooter from '../components/HomeFooter.vue';
</script>

<template>
  <!-- Navbar with Border -->
  <Navbar />

  <div className="container mx-auto pb-4">
    <div className="text-center my-10">
      <h1 className="font-semibold text-lg md:text-3xl">Attractions near you</h1>
    </div>

    <AttractionLoader />
  </div>

  <!-- Footer Component -->
  <HomeFooter />
</template>

<style></style>
