<script setup>
const itemList = [
  'Terms of Use',
  'Privacy and Cookies Statement',
  'Cookie consent',
  'Site Map',
  'How the site works'
]
</script>

<template>
  <div class="bg-[#faf1ed]">
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-12 text-gray-800">
        <div class="col-span-12 lg:col-span-8 space-y-2 text-dark">
          <div class="flex space-x-3">
            <img src="@/assets/logo.svg" alt="" class="h-10 w-10" />
            <div class="w-fit">
              <p class="text-xs">© 2024 旅兔 LeapLLC All rights reserved.</p>
              <div class="flex flex-wrap">
                <a
                  v-for="item in itemList"
                  :key="item.id"
                  href="#"
                  className="text-[0.8em] md:text-sm font-bold underline mr-2"
                >
                  {{ item }}
                </a>
              </div>
            </div>
          </div>
          <div class="text-[0.7em] md:text-xs w-full space-y-3">
            <p>
              此版本的网站面向中国大陆的中文使用者。如果您是来自其他国家或地区的用户，请在下拉菜单中选择适合您所在国家或地区的旅兔（LeapTour）版本。
            </p>
            <p>
              旅兔（LeapTour）对我们网站和应用程序上广告的价格不做任何保证。列出的价格可能需要特定时长的住宿，或者有黑名单日期、资格或其他适用的限制。对于非由旅兔（LeapTour）拥有或运营的外部网站内容，旅兔（LeapTour）不承担任何责任。“探索”页面上显示的酒店价格为根据历史定价数据推算的估计值。
            </p>
            <p>
              旅兔（LeapTour）不是预订代理或旅游运营商。当您与我们的合作伙伴预订时，请务必查看他们网站上关于所有适用费用的完整披露。
            </p>
          </div>
        </div>
        <div class="col-span-8"></div>
      </div>
    </div>
  </div>
</template>
