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
    class="relative z-50 transition duration-700 lp-blur"
  >
    <!-- TODO: element gets a shadow when menu is toggled -->
    <div class="container mx-auto w-full flex justify-between items-center px-4 py-3 shadow-md">
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
      <!-- LOGO -->
      <router-link to="/">
        <img
          src="@/assets/logo.svg"
          class="logo w-[37px] sm:w-[60px] md:w-[80px]"
          alt="LeapTour logo"
        />
      </router-link>

      <!-- Discover -->
      <ul class="hidden md:flex space-x-1" mode="horizontal">
        <n-menu mode="horizontal" :options="menuOptions" responsive icon-size="30" />
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
    </div>
  </nav>
</template>

<script setup>
import { useBaseStore } from '@/store/pinia'
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

const store = useBaseStore()

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
  store.sidebarOpen = !store.sidebarOpen
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

.lp-blur {
  background: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
