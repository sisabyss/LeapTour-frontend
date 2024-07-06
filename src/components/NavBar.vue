<template>
  <modal :open="open_sign_in" @closeSignFromModal="closeSign">
    <div class="NavBarSignIn" v-if="sign_in_or_up">
      <SignIn @closeModalFromSignIn="closeSign" @openSignUp="toSignUp"/>
    </div>
    <div v-else>
      <SignUp @closeModalFromSignUp="closeSign" @openSignIn="toSignIn"></SignUp>
    </div>
  </modal>
  <!-- NavBar adds scrolled class to nav element when window's scroll down is greater than 20 -->
  <nav v-show="handleScroll" :class="{ 'border-b-2 sticky top-0': scrolled }"
    class="relative z-50 transition duration-700 bg-white">
    <!-- TODO: element gets a shadow when menu is toggled -->
    <div class="container mx-auto w-full flex justify-between items-center px-4 py-3 shadow-md">
      <!-- LOGO -->
      <router-link to="/">
        <img
          src="@/assets/logo.svg"
          class="logo w-[30px] sm:w-[60px] md:w-[80px]"
          alt="LeapTour logo"
        />
      </router-link>

      <ul class="hidden mmd:flex space-x-1">
        <!-- router to `Hotels` -->
        <router-link to="/hotels">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M9.5 15A1.5 1.5 0 1 1 8 16.5A1.5 1.5 0 0 1 9.5 15m0-2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 9.5 13z"
                  fill="currentColor"
                ></path>
                <path
                  d="M25 14h-8a2 2 0 0 0-2 2v6H4V10.6l12-6.46l12.53 6.74l.94-1.76l-13-7a1 1 0 0 0-.94 0l-13 7A1 1 0 0 0 2 10v20h2v-6h24v6h2V19a5 5 0 0 0-5-5zm-8 8v-6h8a3 3 0 0 1 3 3v3z"
                  fill="currentColor"
                ></path>
              </svg>
              Hotels
            </p>
          </li>
        </router-link>

        <!-- router to `Restaurants` -->
        <router-link to="/restaurants">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path d="M9 2h2v10H9z" fill="currentColor"></path>
                <path
                  d="M14 11a4 4 0 0 1-8 0V2H4v9a6 6 0 0 0 5 5.91V30h2V16.91A6 6 0 0 0 16 11V2h-2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22 2h-1v28h2V20h3a2 2 0 0 0 2-2V8a5.78 5.78 0 0 0-6-6zm4 16h-3V4.09c2.88.56 3 3.54 3 3.91z"
                  fill="currentColor"
                ></path>
              </svg>
              Restaurants
            </p>
          </li>
        </router-link>

        <!-- router to `Attractions` -->
        <router-link to="/attractions">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M30 30h-2a4.932 4.932 0 0 1-4-1.987a5.02 5.02 0 0 1-8 0a5.02 5.02 0 0 1-8 0A4.932 4.932 0 0 1 4 30H2v-2h2a3.44 3.44 0 0 0 3.053-2.321A.971.971 0 0 1 8 25a1.007 1.007 0 0 1 .949.684A3.438 3.438 0 0 0 12 28a3.44 3.44 0 0 0 3.053-2.321A.99.99 0 0 1 16 25a1.007 1.007 0 0 1 .949.684A3.438 3.438 0 0 0 20 28a3.44 3.44 0 0 0 3.053-2.321a1 1 0 0 1 1.896.005A3.438 3.438 0 0 0 28 28h2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M28 6v4h-2.5l-2.1-2.8A3.013 3.013 0 0 0 21 6h-6a3.003 3.003 0 0 0-3 3v1H8.618l-.724-1.447l-1-2A1 1 0 0 0 6 6H3a1 1 0 0 0-1 1v6a3.003 3.003 0 0 0 3 3h6.82l-.667 4H7a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2h-4.153l-.667-4h.163a4.966 4.966 0 0 0 3.535-1.465L28 12.415V16h2V6zM14 9a1 1 0 0 1 1-1h6a1.004 1.004 0 0 1 .8.4L23 10h-9zm6.82 11h-7.64l.667-4h6.306zm1.524-6H5a1 1 0 0 1-1-1V8h1.382l.724 1.447L7.381 12h18.204l-1.122 1.121a2.979 2.979 0 0 1-2.12.879z"
                  fill="currentColor"
                ></path>
              </svg>
              Attractions
            </p>
          </li>
        </router-link>

        <router-link to="/sign_in">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M30 30h-2a4.932 4.932 0 0 1-4-1.987a5.02 5.02 0 0 1-8 0a5.02 5.02 0 0 1-8 0A4.932 4.932 0 0 1 4 30H2v-2h2a3.44 3.44 0 0 0 3.053-2.321A.971.971 0 0 1 8 25a1.007 1.007 0 0 1 .949.684A3.438 3.438 0 0 0 12 28a3.44 3.44 0 0 0 3.053-2.321A.99.99 0 0 1 16 25a1.007 1.007 0 0 1 .949.684A3.438 3.438 0 0 0 20 28a3.44 3.44 0 0 0 3.053-2.321a1 1 0 0 1 1.896.005A3.438 3.438 0 0 0 28 28h2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M28 6v4h-2.5l-2.1-2.8A3.013 3.013 0 0 0 21 6h-6a3.003 3.003 0 0 0-3 3v1H8.618l-.724-1.447l-1-2A1 1 0 0 0 6 6H3a1 1 0 0 0-1 1v6a3.003 3.003 0 0 0 3 3h6.82l-.667 4H7a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2h-4.153l-.667-4h.163a4.966 4.966 0 0 0 3.535-1.465L28 12.415V16h2V6zM14 9a1 1 0 0 1 1-1h6a1.004 1.004 0 0 1 .8.4L23 10h-9zm6.82 11h-7.64l.667-4h6.306zm1.524-6H5a1 1 0 0 1-1-1V8h1.382l.724 1.447L7.381 12h18.204l-1.122 1.121a2.979 2.979 0 0 1-2.12.879z"
                  fill="currentColor"
                ></path>
              </svg>
              Sign In
            </p>
          </li>
        </router-link>

        <!-- router to `AI Itinerary` -->
        <router-link to="/ai_itinerary">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M16 8a5.99 5.99 0 0 0 9.471 4.885L28.586 16L30 14.586l-3.115-3.115A5.997 5.997 0 1 0 16 8zm2 0a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4z"
                  fill="currentColor"
                ></path>
                <path d="M13 28h6v2h-6z" fill="currentColor"></path>
                <path
                  d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.005 8.005 0 0 1 6-7.737L13.614 2.3A10.009 10.009 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z"
                  fill="currentColor"
                ></path>
                <path
                  d="M23.05 16a9.6 9.6 0 0 1-1.872 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386a10.966 10.966 0 0 0 2.369-2.833z"
                  fill="currentColor"
                ></path>
              </svg>
              AI Itinerary
            </p>
          </li>
        </router-link>
        <!-- router to `Flights` -->
        <router-link to="/flights">
          <li class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M16 8a5.99 5.99 0 0 0 9.471 4.885L28.586 16L30 14.586l-3.115-3.115A5.997 5.997 0 1 0 16 8zm2 0a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4z"
                  fill="currentColor"
                ></path>
                <path d="M11 24h10v2H11z" fill="currentColor"></path>
                <path d="M13 28h6v2h-6z" fill="currentColor"></path>
                <path
                  d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.005 8.005 0 0 1 6-7.737L13.614 2.3A10.009 10.009 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z"
                  fill="currentColor"
                ></path>
                <path
                  d="M23.05 16a9.6 9.6 0 0 1-1.872 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386a10.966 10.966 0 0 0 2.369-2.833z"
                  fill="currentColor"
                ></path>
              </svg>
              Flights
            </p>
          </li>
        </router-link>

        <li
          class="rounded-full hover:bg-gray-200 py-2 px-3 cursor-pointer"
          @click="$refs.modal.openModal()"
        >
          <p class="flex font-medium items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              class="w-6 h-6 mr-2"
            >
              <path
                d="M16 8a5.99 5.99 0 0 0 9.471 4.885L28.586 16L30 14.586l-3.115-3.115A5.997 5.997 0 1 0 16 8zm2 0a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4z"
                fill="currentColor"
              ></path>
              <path d="M11 24h10v2H11z" fill="currentColor"></path>
              <path d="M13 28h6v2h-6z" fill="currentColor"></path>
              <path
                d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.005 8.005 0 0 1 6-7.737L13.614 2.3A10.009 10.009 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z"
                fill="currentColor"
              ></path>
              <path
                d="M23.05 16a9.6 9.6 0 0 1-1.872 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386a10.966 10.966 0 0 0 2.369-2.833z"
                fill="currentColor"
              ></path>
            </svg>
            SignIn
          </p>
        </li>

        <!-- router to `MapView` -->
        <router-link to="/map_view">
          <li class="rounded-full bg-black text-white py-2 px-3 cursor-pointer">
            <p class="flex font-medium items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4z"
                  fill="currentColor"
                ></path>
                <circle cx="16" cy="9" r="2" fill="currentColor"></circle>
                <path
                  d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z"
                  fill="currentColor"
                ></path>
              </svg>
              Map View
            </p>
          </li>
        </router-link>

        <router-link to="/user_profile">
          <li class="rounded-full cursor-pointer">
            <div class="flex font-medium items-center">
              <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg"
                  alt="avatar-image"
                />
              </span>
            </div>
          </li>
        </router-link>

        <!-- <li class="rounded-full cursor-pointer" @click="clickProfile">
            <div class="flex font-medium items-center">
              <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
                <img src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg" alt="avatar-image" />
              </span>
            </div>
        </li> -->
      </ul>

      <!-- Menu toggle button -->
      <div class="mmd:hidden rounded-full hover:bg-gray-200 p-2 cursor-pointer" @click="toggle">
        <svg
          v-if="!isMenuToggled"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <!-- Menu For Only Mobile -->
    <div
      v-if="isMenuToggled"
      class="flex flex-col mmd:hidden bg-white shadow-md absolute animate-slide-in right-0"
    >
      <!-- Link to hotel Route -->
      <router-link to="/hotels">
        <p class="flex items-center cursor-pointer px-4 py-3 hover:bg-gray-200">
          <svg viewBox="0 0 24 24" class="w-6 h-6 mr-2">
            <path
              d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z"
            ></path>
          </svg>
          Hotels 🏨
        </p>
      </router-link>

      <!-- Link to Restaurants Route -->
      <router-link to="/restaurants">
        <p class="flex font-medium items-center cursor-pointer px-4 py-3 hover:bg-gray-200">
          <svg viewBox="0 0 24 24" class="w-6 h-6 mr-2">
            <path
              d="M18.753 21.459l-5.502-5.504-2.85 2.851-1.663-1.662-4.315 4.315-1.343-1.344 4.316-4.316-4.004-4.003A4.718 4.718 0 012 8.438c0-1.269.494-2.461 1.392-3.358l.834-.835 7.362 7.362.866-.866c-1.099-1.719-.777-3.972.912-5.661l2.538-2.538 1.343 1.344-2.538 2.537c-.785.787-1.254 1.903-.852 2.916l4.423-4.422 1.343 1.344-4.429 4.428c.31.13.64.188.977.164.646-.043 1.299-.364 1.838-.904a630.937 630.937 0 002.642-2.653L22 8.631s-1.241 1.255-2.647 2.66c-.865.865-1.951 1.383-3.057 1.456a4.027 4.027 0 01-2.501-.66l-.864.862 7.166 7.166-1.344 1.344zM4.291 6.995A2.835 2.835 0 003.9 8.438c0 .762.296 1.478.835 2.015l5.666 5.667 1.506-1.507-7.616-7.618z"
            ></path>
          </svg>
          Restaurants 🍔
        </p>
      </router-link>

      <!-- Link to attractions Route -->
      <router-link to="/attractions">
        <p class="flex font-medium items-center cursor-pointer px-4 py-3 hover:bg-gray-200">
          <svg viewBox="0 0 24 24" class="w-6 h-6 mr-2">
            <circle cx="12" cy="8.5" r="1"></circle>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="15.5" r="1"></circle>
            <path
              d="M20 6.5V8c-1.5.7-2.5 2.3-2.5 4 0 1.8 1 3.3 2.5 4v1.5H4V16c1.5-.7 2.5-2.3 2.5-4 0-1.8-1-3.3-2.5-4V6.5h16m2-2H2v5c1.4 0 2.5 1.1 2.5 2.5S3.4 14.5 2 14.5v5h20v-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5v-5z"
            ></path>
          </svg>
          Attractions 🌊
        </p>
      </router-link>

      <!-- Lint to Mapview Route -->
      <router-link to="/map_view">
        <p class="flex font-medium items-center cursor-pointer px-4 py-3 bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
              clipRule="evenodd"
            />
          </svg>
          Switch to Map View 🗺
        </p>
      </router-link>

      <!-- Lint to TikTok Route -->
      <router-link to="/tiktok">
        <p class="flex font-medium items-center cursor-pointer px-4 py-3 bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
              clipRule="evenodd"
            />
          </svg>
          Switch to TikTok 🎶
        </p>
      </router-link>
    </div>
  </nav>
</template>


<script setup>
import Modal from './Modal.vue';
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { inject } from 'vue'


const open_sign_in = inject('openSign')

console.log("dgyfud" + open_sign_in)

const limitPosition = ref(500);
const scrolled = ref(true);
const lastPosition = ref(0);

/* function clickProfile() {

} */

// 默认 true 为登录
const sign_in_or_up = ref(true)

//打开登录弹窗
function closeSign(){
  open_sign_in.value = false
}
//关闭登录弹窗
/* function openSign() {
  open_sign_in.value = true
} */

// 弹出注册页
function toSignUp() {
  sign_in_or_up.value = false
}
// 弹出登录页
function toSignIn() {
  sign_in_or_up.value = true
}

function handleScroll() {
  if (lastPosition.value < window.scrollY && limitPosition.value < window.scrollY) {
    scrolled.value = true;
  }

  if (lastPosition.value > window.scrollY) {
    scrolled.value = false;
    // move down
  }

  lastPosition.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
/*
=======


export default {
  name: 'NavBar',
  components: {
    Modal,
    SignIn
  },
  data() {
    return {
      limitPosition: 500,
      scrolled: true,
      lastPosition: 0,
      isMenuToggled: false
    }
  },
  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false
        // move down
      }

      this.lastPosition = window.scrollY
    },
    toggle() {
      this.isMenuToggled = !this.isMenuToggled
      console.log(this.isMenuToggled)
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
>>>>>>> 1cad6a4 (migrate to android, merg tiktok)
*/
</script>

<style scoped>
.kjIqZ {
  margin-left: 10px;
  /* Increase spacing between avatar and text */
}

.large {
  width: 40px;
  /* Adjust size for better alignment */
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
