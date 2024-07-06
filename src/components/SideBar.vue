<template>
  <div class="sidebar" :class="{ 'sidebar-open': store.sidebarOpen }">
    <!-- 侧边栏内容 -->
    <div class="flex overflow-auto m-0">
      <div class="pt-10">
        <n-menu :options="menuOptions" />
      </div>
    </div>

    <div class="right-2 top-2 absolute">
      <n-button circle quaternary size="large" color="#8a2be2" @click="toggleSidebar">
        <n-icon size="25px" color="#D1A6FE">
          <Close />
        </n-icon>
      </n-button>
    </div>

    <div class="sidebar-footer">
      <img src="@/assets/ayaya.png" alt="sidebar image" class="sidebar-image" />
    </div>
  </div>
</template>

<script setup>
import { NButton, NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  AiResults,
  Buoy,
  Close,
  Forum,
  Home,
  Hotel,
  Map,
  Music,
  Plane,
  RestaurantFine
} from '@vicons/carbon'
import { useBaseStore } from '@/store/pinia'

const store = useBaseStore()

function toggleSidebar() {
  store.sidebarOpen = !store.sidebarOpen
}

import { h } from 'vue'
import { NIcon } from 'naive-ui'
// import { RouterLink } from 'vue-router'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/home'
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
    icon: renderIcon(Home)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
        width: '220px'
      }
    }
  },
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
  },
  {
    key: 'divider-2',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
        width: '220px'
      }
    }
  },
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
        { default: () => '机票预定' }
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
  },
  {
    key: 'divider-3',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
        width: '220px'
      }
    }
  },
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
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => '论坛' }
      ),
    key: 'forum',
    icon: renderIcon(Forum)
  },
  {
    key: 'divider4',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
        width: '220px'
      }
    }
  }
]
</script>

<style>
/* 侧边栏样式 */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 384px;
  max-width: calc(100vw - 64px);
  height: 100%;
  background-color: white;
  padding: 15px;
  z-index: 1000;
  box-sizing: border-box;
  margin: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.hr-sidebar {
  width: 300px;
  max-width: 58vw;
  padding-top: 16;
}

.sidebar.sidebar-open {
  transform: translateX(0);
}

.sidebar-footer {
  position: absolute;
  bottom: 1px;
  left: 1px;
  width: 90%; /* 控制图片区域的宽度 */
  text-align: center; /* 图片居中 */
}

.sidebar-image {
  width: 100%; /* 图片宽度适应容器宽度 */
  height: auto; /* 高度自动 */
  max-width: 150px; /* 图片最大宽度，可根据需要调整 */
  max-height: 150px; /* 图片最大高度，可根据需要调整 */
}
</style>
