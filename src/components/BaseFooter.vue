<template>
  <div v-if="visible" class="footer" :class="{ isWhite }">
    <div class="l-button" @click="refresh(1)">
      <span v-if="!isRefresh1" :class="{ active: currentTab === 1 }">首页</span>
      <img v-if="isRefresh1" src="../assets/img/icon/refresh1.png" alt="" class="refresh" />
    </div>
    <div class="l-button" @click="refresh(2)">
      <span v-if="!isRefresh2" :class="{ active: currentTab === 2 }">商城</span>
      <img v-if="isRefresh2" src="../assets/img/icon/refresh1.png" alt="" class="refresh" />
    </div>
    <div class="l-button" @click="tab(3)">
      <div class="add-ctn">
        <img src="../assets/img/icon/add-light.png" alt="" class="add" />
      </div>
    </div>
    <div class="l-button" @click="tab(4)">
      <span :class="{ active: currentTab === 4 }">消息</span>
      <div class="badge">2</div>
    </div>
    <div class="l-button" @click="tab(5)">
      <span :class="{ active: currentTab === 5 }">我</span>
    </div>
  </div>
</template>

<script>
import bus, { EVENT_KEY } from '../utils/bus'

export default {
  name: 'BaseFooter',
  props: ['initTab', 'isWhite'],
  data() {
    return {
      isRefresh1: false,
      isRefresh2: false,
      currentTab: this.initTab,
      visible: true
    }
  },
  created() {
    bus.on('setFooterVisible', (e) => (this.visible = e))
    bus.on(EVENT_KEY.ENTER_FULLSCREEN, () => (this.visible = false))
    bus.on(EVENT_KEY.EXIT_FULLSCREEN, () => (this.visible = true))
  },
  unmounted() {
    bus.off(EVENT_KEY.ENTER_FULLSCREEN)
    bus.off(EVENT_KEY.EXIT_FULLSCREEN)
  },
  methods: {
    $nav(path) {
      this.$router.push(path)
    },
    tab(index) {
      switch (index) {
        case 1:
          this.$nav('/')
          break
        case 2:
          this.$nav('/shop')
          break
        case 3:
          this.$nav('/publish')
          break
        case 4:
          this.$nav('/message')
          break
        case 5:
          this.$nav('/me')
          break
      }
    },
    refresh(index) {
      if (this.currentTab === index) {
        this['isRefresh' + index] = !this['isRefresh' + index]
        setTimeout(() => {
          this['isRefresh' + index] = !this['isRefresh' + index]
        }, 2000)
      } else {
        this.tab(index)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/less/index';

.footer {
  font-size: 0.9rem;
  position: fixed;
  width: 100%;
  height: var(--footer-height);
  //border-top: 1px solid #7b7878;
  z-index: 2;
  //不用bottom：0是因为，在进行页面切换的时候，vue的transition
  // 会使footer的bottom：0失效，不能准确定位
  top: calc(var(--vh, 1vh) * 100 - var(--footer-height));
  //bottom: 0;
  background: var(--footer-color);
  color: white;
  display: flex;
  //justify-content: space-between;

  &.isWhite {
    background: white !important;
    color: #000 !important;
  }

  .l-button {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 0.9rem;

    .refresh {
      width: 25%;
      animation: rotate 0.5s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(-360deg);
      }
    }

    .add-ctn {
      cursor: pointer;
      @height: 2.1rem;
      @width: 2.7rem;
      height: @height;
      width: @width;
      border-radius: 0.6rem;
      box-sizing: border-box;
      padding: 0 0.3rem;
      border: 0.2rem solid white;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50rem;
      }
    }

    span {
      cursor: pointer;

      font-weight: bold;
      opacity: 0.7;

      &.active {
        opacity: 1;
      }
    }

    .badge {
      right: 23rem;
      top: 17rem;
      position: absolute;
    }
  }
}
</style>
