<template>
  <modal :open="open_sign_in" @closeSignFromModal="closeSign">
    <div class="NavBarSignIn" v-if="sign_in_or_up">
      <SignIn @closeModalFromSignIn="closeSign" @openSignUp="toSignUp" />
    </div>
    <div v-else>
      <SignUp @closeModalFromSignUp="closeSign" @openSignIn="toSignIn"></SignUp>
    </div>
  </modal>
  <!-- NavBar adds scrolled class to nav element when window's scroll down is greater than 20 -->
  <nav
    v-show="handleScroll"
    :class="{ 'border-b-2 sticky top-0': scrolled }"
    class="relative z-50 transition duration-700 bg-white"
  >
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

      <!-- Discover -->
      <ul class="hidden md:flex space-x-1" mode="horizontal">
        <n-menu mode="horizontal" :options="menuOptions" responsive icon-size="30" />

        <!--
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
      -->

        <!-- <li class="rounded-full cursor-pointer" @click="clickProfile">
            <div class="flex font-medium items-center">
              <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
                <img src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg" alt="avatar-image" />
              </span>
            </div>
        </li> -->
      </ul>

      <router-link v-if="true" to="/profile">
        <div class="rounded-full cursor-pointer">
          <div class="flex font-medium items-center">
            <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg"
                alt="avatar-image"
              />
            </span>
          </div>
        </div>
      </router-link>
      <router-link v-else="false" to="/sign_in">
        <n-button color="#ff69b4"> 登陆 </n-button>
      </router-link>

      <!-- Menu toggle button -->
      <div class="md:hidden rounded-full hover:bg-gray-200 p-2 cursor-pointer" @click="toggle">
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
import Modal from './Modal.vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
import { NMenu, NIcon } from 'naive-ui'
import { ref, onMounted, onUnmounted, h } from 'vue'
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import {
  AiResults,
  Buoy,
  Forum,
  Hotel,
  Map,
  Music,
  PalmTree,
  Plane,
  RestaurantFine,
  Review,
  Sunny
} from '@vicons/carbon'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '发现',
    key: 'discover',
    icon: renderIcon(Sunny),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/hotels'
              }
            },
            { default: () => '民宿旅馆' }
          ),
        key: 'hotels',
        icon: renderIcon(Hotel)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/foods'
              }
            },
            { default: () => '餐厅美食' }
          ),
        key: 'foods',
        icon: renderIcon(RestaurantFine)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/sights'
              }
            },
            { default: () => '景点推荐' }
          ),
        key: 'sights',
        icon: renderIcon(Buoy)
      }
    ]
  },
  {
    label: '旅行',
    key: 'trips',
    icon: renderIcon(PalmTree),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/ai_itinerary'
              }
            },
            { default: () => 'AI旅行规划' }
          ),
        key: 'ai_itinerary',
        icon: renderIcon(AiResults)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/flight'
              }
            },
            { default: () => '机票' }
          ),
        key: 'flight',
        icon: renderIcon(Plane)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/map_view'
              }
            },
            { default: () => '查看地图' }
          ),
        key: 'map_view',
        icon: renderIcon(Map)
      }
    ]
  },
  {
    label: '评论',
    key: 'reviews',
    icon: renderIcon(Review),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/tiktok'
              }
            },
            { default: () => '短视频' }
          ),
        key: 'tiktok',
        icon: renderIcon(Music)
      },
      {
        label: '论坛',
        key: 'forum',
        icon: renderIcon(Forum)
      }
    ]
  }
]

const open_sign_in = inject('openSign')

console.log('dgyfud' + open_sign_in)

const limitPosition = ref(500)
const scrolled = ref(true)
const lastPosition = ref(0)

// 默认 true 为登录
const sign_in_or_up = ref(true)
const isMenuToggled = ref(false)

//打开登录弹窗
function closeSign() {
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
    scrolled.value = true
  }

  if (lastPosition.value > window.scrollY) {
    scrolled.value = false
    // move down
  }

  lastPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggle = () => {
  isMenuToggled.value = !isMenuToggled.value
  console.log(this.isMenuToggled)
}
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
