<template>
  <div class="home">
    <n-row :gutter="20" justify="center">
      <n-col :span="20">
        <div id="father" class="grid-content bg-purple">
          <div
            id="swiper-box"
            class="swiper-box"
            :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
          >
            <swiper-item :width="width" v-for="i in 10" :key="i"></swiper-item>
          </div>
          <n-icon size="30" class="arrow left" @click="left">
            <arrow-left />
          </n-icon>
          <n-icon size="30" class="arrow right" @click="right">
            <arrow-right />
          </n-icon>
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import swiperItem from "@/components/CardForSwiper.vue";
import { NRow, NCol, NIcon } from "naive-ui";
import { ArrowLeft, ArrowRight } from "@vicons/fa";

export default defineComponent({
  name: "Home",
  components: {
    swiperItem,
    NRow,
    NCol,
    NIcon,
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      currentOffset: 0,
      width: "",
      fatherWith: 0,
    };
  },
  mounted() {
    this.setCardWidth();
    window.addEventListener("resize", this.setCardWidth);
  },
  methods: {
    setCardWidth() {
      const father = document.querySelector("#father");
      this.fatherWith = father.clientWidth;
      this.width = (this.fatherWith - 20) / 5 + "px";
    },
    right() {
      if (this.currentOffset <= (-(this.fatherWith - 20) / 5) * (10 - 5)) return;
      this.currentOffset -= (this.fatherWith - 20) / 5;
    },
    left() {
      if (this.currentOffset >= -2) return;
      this.currentOffset += (this.fatherWith - 20) / 5;
    },
  },
});
</script>

<style lang="scss" scoped>
.bg-purple {
  overflow: hidden;
  position: relative;
  padding-left: 10px;
}
.home {
  margin-top: 50px;
  .swiper-box {
    display: flex;
    width: auto;
    transition: all 0.2s;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 0;
  background-color: #999;
  cursor: pointer;
  font-size: 30px;
}
.left {
  left: -7px;
}
.right {
  right: -7px;
}
</style>
