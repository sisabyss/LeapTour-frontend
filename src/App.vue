<template>
  <header>
    <NavBar />
    <SideBar />
  </header>
  <main :style="{ opacity: store.sidebarOpen ? 0.3 : 1 }">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <keep-alive :exclude="store.excludeNames">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <Call />
  </main>
</template>
<script setup lang="ts">
/*
* try {navigator.control.gesture(false);} catch (e) {} //UC浏览器关闭默认手势事件
try {navigator.control.longpressMenu(false);} catch (e) {} //关闭长按弹出菜单
* */
import NavBar from '@/components/NavBar.vue'
import routes from './router/routes'
import Call from './components/Call.vue'
import { useBaseStore } from '@/store/pinia.js'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { BASE_URL } from '@/config'
import SideBar from './components/SideBar.vue'

const store = useBaseStore()
const route = useRoute()
const transitionName = ref('go')

// watch $route 决定使用哪种过渡
watch(
  () => route.path,
  (to, from) => {
    store.setMaskDialog({ state: false, mode: store.maskDialogMode })
    //底部tab的按钮，跳转是不需要用动画的
    let noAnimation = [
      '/',
      '/home',
      '/slide',
      '/me',
      '/shop',
      '/message',
      '/publish',
      '/home/live',
      'slide',
      '/test'
    ]
    if (noAnimation.indexOf(from) !== -1 && noAnimation.indexOf(to) !== -1) {
      return (transitionName.value = '')
    }
    const toDepth = routes.findIndex((v: RouteRecordRaw) => v.path === to)
    const fromDepth = routes.findIndex((v: RouteRecordRaw) => v.path === from)
    transitionName.value = toDepth > fromDepth ? 'go' : 'back'
  }
)

function resetVhAndPx() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  //document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 + 'px'
}

onMounted(() => {
  store.init()
  resetVhAndPx()
  // 监听resize事件 视图大小发生变化就重新计算1vh的值
  window.addEventListener('resize', () => {
    location.href = BASE_URL + '/'
    resetVhAndPx()
  })
})
</script>
