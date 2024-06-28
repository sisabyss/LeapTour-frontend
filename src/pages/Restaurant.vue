<template>
    <NavBar />

            <div class="container mx-auto pb-4">
                <div class="text-center my-10">
                    <h1 class="font-semibold text-lg md:text-3xl">
                        Restaurants near you
                    </h1>
                </div>

                <div class="px-4 lg:grid lg:grid-cols-12 lg:gap-2">
                    <!-- {/* Map view with Route Link to map view */} -->
                    <div class="lg:col-span-3">
                        <div class="w-full border shadow mt-2 p-2">
                            <div class="relative">
                                <img src="../assets/logo.svg" alt="Map" class="w-full h-20 lg:h-full object-cover" />
                                <div class="absolute w-full h-full top-0 flex items-center justify-center">
                                    <button class="bg-white rounded-sm border border-black py-2 px-4 hover:bg-black hover:text-white"
                                        onClick=''    
                                    >
                                        <p class="font-semibold flex items-center text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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
                        
                            <PlaceListLoader />
                       
                                
                    </div>
                    <!-- {/* / Restaurants List */} -->
                </div>

            </div>

            <!-- {/* Footer Component */} -->
            <HomeFooter />
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';
  import HomeFooter from '../components/HomeFooter.vue';
  

  </script>