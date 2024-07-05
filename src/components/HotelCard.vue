<script setup>
import { NRate } from 'naive-ui'
const props = defineProps(['hotel'])
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
  <div class="grid grid-cols-12 my-2 border border-gray-200 hover:shadow-xl h-fit">
    <!-- Hotel Image -->
    <div class="col-span-12 mmd:col-span-4 min-h-[180px] max-h-[230px]">
      <a to="/hotels/">
        <img
          :src="processedPhotoUrl(hotel?.img)"
          alt=""
          class="w-full h-full object-cover cursor-pointer"
        />
      </a>
    </div>

    <!-- Hotel Details -->
    <div class="col-span-12 mmd:col-span-8 p-3">
      <!-- Name -->
      <a to="hotels/">
        <h2 class="font-semibold md:text-lg">
          {{ hotel?.cnname }}
        </h2>
      </a>

      <div class="flex flex-col-reverse mmd:grid mmd:grid-cols-12">
        <!-- Main Booking Offer -->
        <div
          class="flex flex-wrap justify-between items-center mmd:block col-span-4 mmd:text-center space-y-2 mmd:border-r mmd:border-dotted mmd:pr-3"
        >
          <!-- Offer Provider Logo -->
          <img
            :src="
              hotel?.hac_offers?.all_booking_offers?.length > 0
                ? hotel?.hac_offers?.all_booking_offers[0]?.logo ||
                  'hotel.hac_offers.offers[0].provider_display_name'
                : hotel?.hac_offers?.offers[0]?.logo || ''
            "
            alt=""
            class="h-12 m-auto object-cover hidden mmd:block"
          />

          <p>
            <!-- Offer Price -->
            <span class="font-semibold text-lg mmd:text-2xl">
              {{
                hotel?.hac_offers?.all_booking_offers?.length > 0
                  ? hotel?.hac_offers?.all_booking_offers[0]?.display_price
                  : hotel?.hac_offers?.offers[0]?.display_price
              }}
            </span>

            <!-- Offer Provider Display Name -->
            <span class="flex items-center mmd:hidden text-xs">
              {{
                hotel?.hac_offers?.all_booking_offers?.length > 0
                  ? hotel?.hac_offers?.all_booking_offers[0]?.provider_display_name
                  : hotel?.hac_offers?.offers[0]?.provider_display_name
              }}
              <svg
                class="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                />
              </svg>
            </span>
          </p>

          <!-- Offer Booking Link -->
          <a
            target="_blank"
            class="block"
            :href="
              hotel?.hac_offers?.all_booking_offers?.length > 0
                ? hotel?.hac_offers?.all_booking_offers[0]?.link
                : hotel?.hac_offers?.offers[0]?.link
            "
          >
            <button
              class="bg-yellow-500 hover:bg-yellow-400 text-sm mmd:text-base w-full px-3 mmd:px-4 py-2 rounded-full font-semibold"
            >
              <p>View deal</p>
            </button>
          </a>

          <div class="border-b border-gray-300 w-full mmd:hidden" />
        </div>

        <!-- Other Booking Offers -->
        <div
          class="col-span-3 text-center space-y-2 mmd:border-r mmd:border-dotted px-3 relative hidden mmd:block"
        >
          <!-- Maps through a List of Offers but Onlt redners 4 total with the rest hidden behind a show more state -->

          <a
            v-for="(offer, i) in hotel?.hac_offers?.offers?.slice(0, 3)"
            :key="i"
            target="_blank"
            :href="offer.link"
            class="text-[11px] block group"
          >
            <!-- Offer Provider Diplaname Name -->
            <p class="flex items-center justify-center">
              {{ offer?.provider_display_name }}
              <svg
                class="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                />
              </svg>
            </p>

            <!-- Offer Price -->
            <p class="font-semibold group-hover:underline">
              <svg
                v-if="offer?.display_price"
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 m-auto text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </a>

          <!-- Show more offer button renders only if there's more offer after the 5th items -->
          <div
            v-if="hotel?.hac_offers?.offers?.slice(4, hotel?.hac_offers?.offers?.length).length > 1"
          >
            <div class="border-b" />
            <p class="text-[11px] font-bold cursor-pointer">
              View all other
              {{ hotel?.hac_offers?.offers?.slice(3, hotel?.hac_offers?.offers?.length).length }}
              deals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>

          <div class="absolute -bottom-4/5 -left-2 z-20 hidden mmd:block">
            <!-- Rendering all other offers in the a Show more component - if there's more offer after the 5th items -->
            <div v-if="false">
              <div
                class="w-6 h-6 bg-white m-auto shadow border border-gray-200 origin-center rotate-45 -mb-5"
              />
              <div class="bg-white w-fit p-5 shadow relative space-y-2">
                <!-- Maps through a List of Offers but Onlt redners 4 total with the rest hidden behind a show more state -->
                <a
                  v-for="(offer, i) in hotel?.hac_offers?.offers?.slice(
                    4,
                    hotel?.hac_offers?.offers?.length
                  )"
                  :key="i"
                  target="_blank"
                  :href="offer.link"
                  class="text-[11px] block group relative"
                >
                  <div
                    class="flex whitespace-nowrap justify-between nobreak space-x-10 before:content[''] before:absolute before:w-full before:bottom-1 before:border-b before:border-black before:border-dotted"
                  >
                    <!-- Offer Provider Diplaname Name -->
                    <span class="flex items-center bg-white relative">
                      {{ offer?.provider_display_name }}
                      <svg
                        class="h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                        />
                        <path
                          d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                        />
                      </svg>
                    </span>

                    <!-- Offer Price -->
                    <span
                      class="flex items-center bg-white relative font-semibold group-hover:underline"
                    >
                      <svg
                        v-if="offer?.display_price"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- / Other Booking Offers -->
        <!-- Rating -->
        <div class="col-span-12 mmd:col-span-5 space-y-2 mmd:pl-3">
          <!-- Ratings Star Area -->
          <p class="flex items-center text-xs">
            <span class="flex items-center mr-1">
              <n-rate readonly :default-value="Number(hotel?.grade) / 2" />
            </span>
            {{ hotel?.review_num }} Reviews
          </p>

          <!-- Hotel Ranking -->
          <p class="text-xs">
            {{ hotel?.ranking }}
          </p>

          <p class="hidden mmd:flex items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Free Wifi
          </p>
        </div>
        <!-- / Rating -->
      </div>
    </div>
  </div>
</template>
