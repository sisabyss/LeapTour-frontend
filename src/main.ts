import { createApp, ref } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/less/index.less'
import { startMock } from '@/mock'
import router from './router'
import mixin from './utils/mixin'
import VueLazyload from '@jambonn/vue-lazyload'
import baiduMap from 'vue3-baidu-map-gl'
import { createPinia } from 'pinia'
import { useClick } from '@/utils/hooks/useClick'
import bus, { EVENT_KEY } from '@/utils/bus'
import './style.css'
import { useBaseStore } from './store/pinia'

window.isMoved = false
window.isMuted = true
window.showMutedNotice = true
HTMLElement.prototype.addEventListener = new Proxy(HTMLElement.prototype.addEventListener, {
  apply(target, ctx, args) {
    const eventName = args[0]
    const listener = args[1]
    if (listener instanceof Function && eventName === 'click') {
      args[1] = new Proxy(listener, {
        apply(target1, ctx1, args1) {
          // console.log('e', args1)
          // console.log('click点击', window.isMoved)
          if (window.isMoved) return
          try {
            return target1.apply(ctx1, args1)
          } catch (e) {
            console.log(`[proxyPlayerEvent][${eventName}]`, listener, e)
          }
        }
      })
    }
    return target.apply(ctx, args)
  }
})

const vClick = useClick()
const pinia = createPinia()
const app = createApp(App)

const open_sign = ref(false)
app.provide('openSign', open_sign)

router.beforeEach(async (to) => {
  if (to.path !== '/home') {
    const store = useBaseStore()
    console.log(store.email, store.token)
    const para_email = store.email ? store.email : 'undefined'
    const para_token = store.token ? store.token : 'undefined'
    const response = await axios.get(
      `http://192.168.1.145:8080/check/checkLogin?email=${para_email}&token=${para_token}`
    )
    console.log(response.data)
    if (response.data.data == 'false') {
      //未登录，打开登录弹窗
      open_sign.value = true
      return false
    }
  }
  return true
})

app.mixin(mixin)
const loadImage = new URL('./assets/img/icon/img-loading.png', import.meta.url).href
app.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadImage,
  attempt: 1
})
app.use(pinia)
app.use(baiduMap, {
  ak: '40rN64E5W1CA7HiAYXSrxWFF2MHNa5eg'
})
app.use(router)
app.mount('#app')
// app.directive('click', vClick)

//放到最后才可以使用pinia
startMock()
setTimeout(() => {
  bus.emit(EVENT_KEY.HIDE_MUTED_NOTICE)
  window.showMutedNotice = false
}, 2000)
bus.on(EVENT_KEY.REMOVE_MUTED, () => {
  window.isMuted = false
})
