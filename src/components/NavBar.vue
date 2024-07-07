<template>
  <div :class="{ 'absolute -z-1 w-full': store.isTiktok }">
    <modal :open="open_sign_in" @closeSignFromModal="closeSign">
      <div class="NavBarSignIn" v-if="sign_in_or_up == 1">
        <SignIn @closeModalFromSignIn="closeSign" @openSignUp="toSignUp" @openReset="toReset" />
      </div>
      <div v-else-if="sign_in_or_up == 2">
        <SignUp @closeModalFromSignUp="closeSign" @openSignIn="toSignIn"></SignUp>
      </div>
      <div v-else-if="sign_in_or_up == 3">
        <ResetPSWD
          @closeModalFromReset="closeSign"
          @openSignIn="toSignIn"
          @openSignUp="toSignUp"
        ></ResetPSWD>
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

        <div>
          <n-dropdown trigger="hover" :options="options" @select="handleSelect">
            <div class="rounded-full cursor-pointer">
              <div class="flex font-medium items-center">
                <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
                  <img :src="myavatar" alt="avatar-image" />
                </span>
              </div>
            </div>
          </n-dropdown>
        </div>
        <n-modal v-model:show="showLogoutModal" title="确认退出登录？" preset="dialog" maskClosable>
          <template #action>
            <n-button @click="confirmLogout">确认</n-button>
            <n-button @click="showLogoutModal = false">取消</n-button>
          </template>
        </n-modal>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useBaseStore } from '@/store/pinia'
import axios from 'axios'
import Modal from './Modal.vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
import ResetPSWD from './ResetPSWD.vue'
import { NMenu, NIcon, NDropdown, NModal, NButton } from 'naive-ui'
import { ref, onMounted, onUnmounted, h, inject } from 'vue'
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
import router from '@/router'

const store = useBaseStore()
const myavatar = ref(localStorage.getItem('saavatar'))
const showLogoutModal = ref(false)

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const open_sign_in = inject('openSign')

console.log('dgyfud' + open_sign_in)

const limitPosition = ref(500)
const scrolled = ref(true)
const lastPosition = ref(0)

/* function clickProfile() {

} */

// 1 -- 登录 2 -- 注册 3 -- 重设密码
const sign_in_or_up = ref(1)

//关闭弹窗
function closeSign() {
  toSignIn()
  open_sign_in.value = false
}

// 弹出注册页
function toSignUp() {
  sign_in_or_up.value = 2
}
// 弹出登录页
function toSignIn() {
  sign_in_or_up.value = 1
}
// 弹出重设密码页
function toReset() {
  sign_in_or_up.value = 3
}

const options = [
  {
    label: '个人主页',
    key: 'userprofile'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
]
async function handleSelect(key) {
  if (key == 'userprofile') {
    router.push('/profile')
  } else if (key == 'logout') {
    console.log('退出')
    const satoken = localStorage.getItem('satoken')
    const response = await axios.get(`http://192.168.1.145:8080/check/checkLogin`, {
      headers: {
        satoken: `${satoken}`
      }
    })
    console.log(response)
    if (response.data.data == false) {
      //未登录，打开登录弹窗
      open_sign_in.value = true
      toSignIn()
    } else {
      showLogoutModal.value = true
    }
  }
}

async function confirmLogout() {
  try {
    await logout()
    localStorage.setItem(
      'saavatar',
      'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg'
    )
    showLogoutModal.value = false
    router.push('/')
  } catch (error) {
    console.log('logout出错')
    console.log(error)
  }
}
async function logout() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/user/logout')
    const message = response.data
    if (message.code == 200) {
      console.log('退出登录成功')
      alert(message.msg)
      localStorage.removeItem('satoken')
    } else if (message == 500) {
      console.log('退出登录失败')
      alert(message.msg)
    }
  } catch (error) {
    console.error('获取失败', error)
    alert('退出登录失败')
  }
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
