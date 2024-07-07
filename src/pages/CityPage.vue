<template>
  <div
    class="container mx-auto p-4"
    style="margin-top: 10px; display: flex; justify-content: center; align-items: center"
  >
    <span class="font-semibold text-2xl md:text-4xl" style="font-weight: 700">{{
      store.coordinates.city
    }}</span>
  </div>
  <div class="container mx-auto grid grid-cols-4" style="height: 300px">
    <div class="col-span-4" style="padding: 2%">
      <n-carousel show-arrow>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
    </div>
  </div>

  <div class="container mx-auto p-4" style="margin-top: 20px">
    <h1 class="font-semibold text-lg md:text-2xl text-center">计划你的旅行</h1>
  </div>

  <div class="container mx-auto p-4">
    <div class="absolute inset-x-0 w-[60%] md:w-3/12 mx-auto">
      <form class="flex items-center relative" @submit.prevent="handleSubmit">
        <svg
          class="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <n-auto-complete
          v-model="search"
          :options="options"
          placeholder="重庆"
          clearable
          @select="handleSelect"
        >
          <template #default="{ handleInput, handleBlur, handleFocus }">
            <input
              type="text"
              placeholder="输入城市"
              class="bg-white rounded-full w-full pl-12 py-3 shadow-xl focus:outline-none border border-black"
              @input="handleInput"
              @blur="handleBlur"
              @focus="handleFocus"
              v-model="search"
            />
          </template>
        </n-auto-complete>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full h-10 w-10 absolute right-0 mr-1 flex items-center justify-center"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  </div>

  <div
    class="container mx-auto p-4"
    style="margin-top: 50px; display: flex; justify-content: center; align-items: center"
  >
    <span>让AI助手帮忙定制你的三天旅游计划</span>
  </div>
  <ToVisit />
  <ToEat />
  <ToStay />
  <!-- Traveler Choice Section -->
  <div class="bg-[#D1A6FE]">
    <div
      class="container mx-auto mmd:grid mmd:grid-cols-12 h-[400px] sm:h-[500px] mmd:h-[600px] overflow-hidden"
    >
      <div class="col-span-3 text-center py-6 flex flex-col items-center justify-center p-4 md:p-2">
        <img src="@/assets/logo.svg" alt="" class="h-16 lg:h-20 mb-5 lg:mb-10" />
        <h2 class="text-white font-bold text-2xl md:text-[2.15em]">旅行者的至尊之选🐐</h2>
        <button
          class="rounded-full bg-black hover:bg-gray-600 transition ease-out duration-200 text-white w-fit py-2 sm:py-3 px-3 sm:px-4 mt-5 lg:mt-14"
        >
          <p class="font-semibold text-sm">查看有哪些</p>
        </button>
      </div>
      <!-- Section Background Image - Displays only on Large devices, Like Desktop -->
      <div
        class="hidden mmd:block h-full col-span-9 bg-cover bg-[url('/src/assets/tc_cards_desktop.png')]"
      ></div>
      <!-- Section Background Image - Displays only on Small Devices, Mobile -->
      <div
        class="block mmd:hidden h-full bg-contain bg-top bg-[url('/src/assets/tc_cards_tablet.png')] bg-no-repeat"
      />
    </div>
  </div>

  <!-- Trending in Travel Section -->
  <div class="container mx-auto px-4 py-10">
    <h2 class="font-bold text-lg md:text-2xl my-5">Trending in Travel</h2>
    <div>
      <!-- Trending in Travel Toggles -->
      <div
        class="flex text-sm md:text-base space-x-4 md:space-x-8 whitespace-nowrap overflow-x-auto travel_toggle"
      >
        <!-- Places to go toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toGo')"
          :class="{
            'border-black': activeToggle === 'toGo',
            'border-transparent': activeToggle !== 'toGo'
          }"
        >
          Places to Go
        </h3>

        <!-- Things to Do toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toDo')"
          :class="{
            'border-black': activeToggle === 'toDo',
            'border-transparent': activeToggle !== 'toDo'
          }"
        >
          Things to Do
        </h3>

        <!-- Places to Stay toggle -->
        <h3
          class="font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer"
          @click="toggle('toStay')"
          :class="{
            'border-black': activeToggle === 'toStay',
            'border-transparent': activeToggle !== 'toStay'
          }"
        >
          Places to Stay
        </h3>
      </div>
      <div>
        <!-- List of Places to Go - Display only if 'toGo'is true -->
        <div v-if="activeToggle === 'toGo'" class="grid grid-cols-12">
          <!-- Mapping throughlist of items to render -->
          <a
            v-for="item in place_to_go"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>

        <!-- List of Things to Do - Displays only if 'toDo' is true -->
        <div v-if="activeToggle === 'toDo'" class="grid grid-cols-12">
          <!-- Mapping through List of Items to render -->
          <a
            v-for="item in things_to_do"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>

        <!-- List of Places to Stay - Displays only if 'toStay' is true -->
        <div v-if="activeToggle === 'toStay'" class="grid grid-cols-12">
          <!-- Mapping through list of Items to render -->
          <a
            v-for="item in place_to_stay"
            :key="item.key"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
            href="#"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <HomeFooter />
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import ToVisit from '../components/ToVisit.vue'
import ToEat from '../components/ToEat.vue'
import ToStay from '../components/ToStay.vue'
import HomeFooter from '../components/HomeFooter.vue'
import { NCarousel } from 'naive-ui'
import { ref, computed } from 'vue'
import { NAutoComplete } from 'naive-ui'
// import { watch } from 'vue';
const search = ref('')
// watch(() => store.coordinates.city, (newCity) => {
//   if (newCity) {
//     store.fetchPlacesByCity(newCity);
//   }
// });
const options = computed(() => {
  return [
    '香港',
    '澳门',
    '台北',
    '台湾',
    '北京',
    '上海',
    '成都',
    '广州',
    '杭州',
    '南京',
    '厦门',
    '深圳',
    '重庆',
    '三亚',
    '苏州',
    '珠海',
    '西安',
    '武汉',
    '大连',
    '垦丁',
    '天津',
    '济南',
    '青岛',
    '丽江',
    '桂林',
    '长沙',
    '无锡',
    '高雄市',
    '昆明',
    '常州',
    '沈阳',
    '哈尔滨',
    '大理',
    '花莲',
    '长春',
    '都江堰',
    '峨眉山',
    '台中市',
    '福州',
    '开封',
    '扬州',
    '海口',
    '郑州',
    '宁波',
    '银川',
    '九寨沟',
    '威海',
    '太原',
    '兰州',
    '乌鲁木齐',
    '台南',
    '九份',
    '烟台',
    '连云港',
    '洛阳',
    '武夷山',
    '南通',
    '南投',
    '平遥',
    '南昌',
    '淡水',
    '拉萨',
    '佛山',
    '绍兴',
    '清远',
    '屏东',
    '合肥',
    '婺源',
    '石家庄',
    '黄山市',
    '敦煌',
    '阳朔',
    '嘉兴',
    '秦皇岛',
    '腾冲',
    '南宁',
    '中山',
    '稻城',
    '张家界市',
    '温州',
    '西宁',
    '泉州',
    '香格里拉',
    '徐州',
    '保定',
    '贵阳',
    '东莞',
    '承德',
    '北海',
    '镇江',
    '肇庆',
    '安吉',
    '满洲里',
    '呼和浩特',
    '宜昌',
    '桃园',
    '台东',
    '西双版纳',
    '大同',
    '湖州',
    '日照',
    '昆山',
    '呼伦贝尔',
    '景德镇',
    '台州',
    '乐山',
    '凤凰',
    '林芝',
    '丽水',
    '嘉义',
    '金华',
    '太鲁阁国家公园',
    '惠州',
    '上饶',
    '平溪',
    '基隆市',
    '泰安',
    '吉林市',
    '恒春',
    '九江',
    '舟山',
    '宜兰',
    '阿坝州',
    '嵊泗',
    '湘西',
    '嘉峪关',
    '神农架',
    '晋中',
    '丹东',
    '漳州',
    '保山',
    '韶关',
    '张掖',
    '甘孜州',
    '大邑',
    '日喀则',
    '葫芦岛',
    '乌镇',
    '康定',
    '金瓜石',
    '新竹',
    '桐乡',
    '牡丹江',
    '西塘',
    '黔东南州',
    '酒泉',
    '宜春',
    '额尔古纳',
    '彰化',
    '青海湖',
    '鹿港',
    '工布江达',
    '迪庆州',
    '临安',
    '漠河',
    '梅里雪山',
    '朱家尖',
    '北戴河',
    '青城山',
    '蓬莱',
    '金门',
    '四姑娘山',
    '甘南',
    '千岛湖',
    '喀纳斯',
    '阿里',
    '延边',
    '昌黎',
    '泸沽湖',
    '波密',
    '喀什',
    '余姚',
    '汕头',
    '伊犁',
    '周庄',
    '宏村镇',
    '宜兴',
    '理县',
    '常熟',
    '溧阳',
    '苗栗',
    '长白山',
    '莫干山',
    '海西州',
    '长岛县',
    '江孜',
    '荣成',
    '江阴',
    '景洪',
    '义乌',
    '延吉',
    '绿岛',
    '瑞安',
    '阿勒泰',
    '嵩山',
    '汶川',
    '歙县',
    '镇远',
    '海盐',
    '涠洲岛',
    '同里',
    '象山',
    '华山',
    '晋江',
    '禾木',
    '庐山',
    '吐鲁番',
    '顺德',
    '黟县',
    '夹江',
    '海螺沟',
    '色达',
    '海宁',
    '平潭',
    '雁荡山',
    '长乐',
    '浪卡子',
    '易县',
    '潮州',
    '克拉玛依',
    '万宁',
    '邛崃',
    '乐清',
    '当雄',
    '泰顺',
    '建德',
    '黄果树',
    '布尔津',
    '仙居',
    '东阳',
    '茂县',
    '荔波',
    '埔里',
    '桐庐',
    '云林县',
    '澎湖',
    '宁海',
    '延安',
    '石林',
    '阳澄湖',
    '巩义',
    '连州',
    '石狮',
    '三清山',
    '德钦',
    '墨脱',
    '理塘',
    '栾川',
    '东海县',
    '惠东',
    '泸定',
    '礁溪',
    '五台山',
    '慈溪',
    '慈溪',
    '廊坊',
    '张家口',
    '丰宁',
    '若尔盖',
    '武功山',
    '龙脊梯田',
    '格尔木',
    '新都桥',
    '安顺',
    '米林',
    '湟中',
    '陈巴尔虎旗',
    '琉球屿',
    '瑞穗乡',
    '太仓',
    '平湖',
    '雪乡',
    '湛江',
    '阿尔山',
    '登封',
    '雅安',
    '潍坊',
    '博乐',
    '张家港',
    '新沂',
    '塔什库尔干',
    '普兰',
    '龙门',
    '恩施',
    '东极岛',
    '温岭',
    '桃花岛',
    '中卫',
    '瓜州',
    '双廊',
    '丹巴',
    '丰城',
    '包头',
    '巢湖',
    '临海',
    '夏河',
    '珠穆朗玛峰自然保护区',
    '诸暨',
    '昌都',
    '扎兰屯',
    '仪征',
    '楠溪江',
    '松潘',
    '根河',
    '武义',
    '巴音布鲁克',
    '湟源',
    '库尔勒',
    '正定',
    '库车',
    '兰屿',
    '凯里',
    '马祖',
    '崂山',
    '启东',
    '沙坡头',
    '乳源',
    '犍为',
    '额济纳旗',
    '兴城',
    '揭阳',
    '柳州',
    '江门',
    '太湖',
    '八宿',
    '盐城',
    '黄龙',
    '遵义',
    '黑水县',
    '曲阜',
    '赤峰',
    '郎木寺',
    '阳江',
    '德清',
    '英德',
    '郴州',
    '梵净山',
    '山南',
    '灌云',
    '山海关',
    '文昌',
    '如皋',
    '如皋',
    '井陉',
    '临汾',
    '那曲',
    '可可西里',
    '乌兰察布',
    '金川',
    '海拉尔',
    '新昌',
    '休宁',
    '番禺',
    '陵水',
    '农安',
    '吉首',
    '喜洲',
    '迭部',
    '咸阳',
    '龙海',
    '拉孜',
    '建水',
    '淳安',
    '绵阳',
    '西岭雪山',
    '束河',
    '兴隆',
    '连南',
    '阿拉善盟',
    '新源',
    '天水',
    '剑川',
    '睢宁',
    '涞水',
    '普洱',
    '巽寮湾',
    '德令哈',
    '南靖',
    '勐腊',
    '岳阳',
    '阿克苏',
    '红原',
    '霞浦',
    '汕尾',
    '野三坡',
    '野三坡',
    '普者黑',
    '唐山',
    '宽甸',
    '聂拉木',
    '西昌',
    '南戴河',
    '元阳',
    '牙克石',
    '榆林',
    '甘孜县',
    '察隅',
    '平山',
    '吐鲁番市',
    '鄂尔多斯',
    '札达',
    '洱源',
    '新郑',
    '澄江',
    '西江苗寨',
    '连江',
    '闽侯',
    '巴塘',
    '哈密',
    '宝鸡',
    '南浔',
    '安图',
    '南澳岛',
    '大兴安岭',
    '冈仁波齐',
    '大兴安岭',
    '昭苏',
    '德阳',
    '徽州',
    '宜宾',
    '永嘉',
    '惠安',
    '伊宁市',
    '亚丁神山',
    '雨崩',
    '哈巴河',
    '肇兴侗寨',
    '黔西南州',
    '永泰',
    '宁蒗',
    '武当山',
    '福清',
    '安溪',
    '汉中',
    '铜仁',
    '如东',
    '芜湖',
    '无锡灵山',
    '武隆',
    '鲁朗',
    '小金县',
    '和顺',
    '德天瀑布',
    '从化',
    '门源',
    '青岩古镇',
    '锡林郭勒盟',
    '本溪',
    '永康',
    '崇左',
    '木兰围场',
    '赵县',
    '特克斯',
    '永登',
    '雅江',
    '芒康',
    '衡山',
    '广元',
    '赣州',
    '襄阳',
    '芒市',
    '眉山',
    '衡阳',
    '东营',
    '嵊州',
    '抚松',
    '庐江',
    '兰溪',
    '平阳',
    '双流',
    '祁连',
    '黎平',
    '崇州',
    '五常',
    '弥勒市',
    '浏阳',
    '河源',
    '衢州',
    '长兴',
    '长海',
    '井冈山',
    '龙口',
    '花都',
    '然乌',
    '瑞丽',
    '龙岩',
    '灵石',
    '齐齐哈尔',
    '阿克塞',
    '阿拉善左旗',
    '遂昌',
    '旅顺',
    '毕节',
    '忻州',
    '茂名',
    '泰州',
    '和田',
    '宁德',
    '德格',
    '渭南',
    '梅州',
    '龙井市',
    '百色',
    '临沂',
    '邯郸',
    '淮安',
    '宁安',
    '庄河',
    '仲巴',
    '南安',
    '合作',
    '巍山',
    '萧山',
    '祁县',
    '防城港',
    '海北州',
    '霍林郭勒',
    '乳山',
    '长治',
    '兴义',
    '昌吉',
    '阜康',
    '武威',
    '莆田',
    '介休',
    '增城',
    '阆中',
    '灵武',
    '沙溪',
    '安阳',
    '盘锦',
    '罗平',
    '绥芬河市',
    '碌曲',
    '黄姚古镇',
    '云台山',
    '宣城',
    '荆州',
    '珲春',
    '锦州',
    '枣庄',
    '宁乡',
    '诸葛八卦村',
    '句容',
    '萍乡',
    '开平',
    '和静',
    '连山',
    '韶山',
    '金堂',
    '湖口县',
    '四会',
    '永定',
    '东山岛',
    '浮梁',
    '清新',
    '高邮',
    '霍城',
    '楚雄',
    '莱阳',
    '从江',
    '运城',
    '十堰',
    '朔州',
    '新乡',
    '秀林乡',
    '海阳',
    '漳浦',
    '芙蓉镇',
    '六盘水',
    '蒙自',
    '日土',
    '曲靖',
    '梧州',
    '鹰潭',
    '岱山',
    '敦化',
    '富春江',
    '贺州',
    '营口',
    '奉化',
    '巴音郭楞',
    '榕江',
    '赤水',
    '东台',
    '广汉',
    '浦江县',
    '勐海',
    '济宁',
    '剑河县',
    '丙中洛',
    '色达县',
    '屯溪',
    '伊春',
    '焦作',
    '龙胜',
    '巴丹吉林沙漠',
    '玉树',
    '株洲',
    '怀化',
    '六安',
    '自贡',
    '信阳',
    '图们',
    '儋州',
    '云龙',
    '余杭',
    '安庆',
    '贡嘎山',
    '富阳',
    '邳州',
    '德化',
    '奎屯',
    '抚顺',
    '胶州',
    '怒江州',
    '常德',
    '克什克腾旗',
    '攀枝花',
    '南雄',
    '大庆',
    '云浮',
    '罗布泊',
    '鄯善',
    '云和',
    '吉安',
    '南阳',
    '长泰',
    '湘潭',
    '施秉',
    '道孚',
    '鞍山',
    '玉林',
    '南充',
    '玉林',
    '临夏',
    '室韦',
    '通州',
    '红河州',
    '塔城',
    '泸州',
    '尚志',
    '磐安',
    '郭亮',
    '张北',
    '修水',
    '东兴',
    '马鞍山',
    '三明',
    '龙山',
    '丹阳',
    '池州',
    '黄龙溪古镇',
    '盐源',
    '青田',
    '蛟河市',
    '莎车',
    '巴中',
    '海门',
    '宿迁',
    '尼玛',
    '轮台',
    '绩溪',
    '丁青',
    '蚌埠',
    '三门峡',
    '晋城',
    '佳木斯',
    '东江湖',
    '叶城',
    '武宁',
    '天柱',
    '简阳',
    '左贡',
    '石林彝族自治县',
    '沧州',
    '凉山州',
    '沈家门',
    '弋阳',
    '绥中',
    '木渎',
    '班戈',
    '永修',
    '新安江',
    '许昌',
    '黄石',
    '贵德',
    '台山',
    '兴化',
    '德州',
    '安康',
    '塔公',
    '惠山古镇',
    '泾县',
    '永春',
    '惠山古镇',
    '闽清',
    '墨竹工卡',
    '东方',
    '都匀',
    '措勤',
    '南平',
    '五大连池市',
    '秭归',
    '长阳',
    '沛县',
    '克孜勒苏',
    '库布齐沙漠',
    '巴彦淖尔',
    '黄冈',
    '昭通',
    '溪口',
    '恩和俄罗斯民族乡',
    '比如',
    '聊城',
    '亚东',
    '上林',
    '山丹',
    '黔南州',
    '江山',
    '涿州',
    '萨迦',
    '阳山',
    '德宏州',
    '白银',
    '徐闻',
    '罗源',
    '滁州',
    '格聂',
    '辽阳',
    '奉新',
    '万年县',
    '钦州',
    '莒县',
    '凭祥',
    '乐昌',
    '邢台',
    '兴安盟',
    '内江',
    '文山州',
    '咸宁',
    '靖边',
    '丰都',
    '吕梁',
    '牛背山',
    '海安',
    '广安',
    '余干',
    '龙陵',
    '达州',
    '抚远',
    '遂宁',
    '天台',
    '玉环',
    '蓟县',
    '宁国',
    '狮泉河',
    '崇明岛',
    '富蕴',
    '巫山',
    '白玉',
    '铜鼓',
    '乌海',
    '雷山',
    '镜泊湖',
    '卧龙',
    '铜陵',
    '八美',
    '河池',
    '抚州',
    '商丘',
    '羊八井',
    '五指山市',
    '永州',
    '若羌',
    '靖西',
    '青州',
    '江油',
    '锡林浩特',
    '资兴',
    '荆门',
    '奉节',
    '通化',
    '炉霍',
    '三江侗族自治县',
    '果洛州',
    '龙泉市',
    '樟树市',
    '驻马店',
    '资阳',
    '玛曲',
    '临沧',
    '榆社',
    '铅山',
    '黑河市',
    '淮南',
    '南屏',
    '广丰',
    '孝感',
    '太白山',
    '赤坎古镇',
    '黑龙江鹤岗',
    '诏安',
    '滨海',
    '封开',
    '安宁市',
    '西沙群岛',
    '蔚县',
    '平顶山',
    '宾县',
    '石河子',
    '陇南',
    '塘沽',
    '东川',
    '当阳',
    '亳州',
    '阜平',
    '万州',
    '天门',
    '涪陵',
    '新巴尔虎左旗',
    '三水',
    '石柱',
    '临江',
    '商洛',
    '松原',
    '娄底',
    '碛口',
    '元谋',
    '康平',
    '肥东',
    '浑源',
    '乌兰',
    '阜阳',
    '昌江',
    '六横岛',
    '吴忠',
    '年保玉则',
    '朗县',
    '靖安',
    '达坂城',
    '平凉',
    '乐东',
    '鄱阳县',
    '千山',
    '菏泽',
    '郫县',
    '贵港',
    '海南州',
    '华阴',
    '铁岭',
    '庆元',
    '土默特左旗',
    '高安',
    '阳泉',
    '龙游',
    '玉山县',
    '湄洲岛',
    '邵阳',
    '玛多',
    '桑植',
    '林州',
    '盱眙',
    '沙县'
  ]
    .filter((city) => city.toLowerCase().includes(search.value.toLowerCase()))
    .map((city) => {
      return {
        label: city,
        value: city
      }
    })
})
import { useBaseStore } from '../store/pinia'
const store = useBaseStore()
const handleSelect = (value) => {
  search.value = value
}
function handleSubmit() {
  // 处理提交逻辑
  router.push('/ai_loading')
  console.log('Search submitted:', search.value)
  searchAI(search.value)
}

import { reactive } from 'vue'
import { OpenAI } from 'openai'
import { useRouter } from 'vue-router'

const router = useRouter()
//页面数据
const Data = reactive({
  searchContent: ''
})

async function searchAI(search) {
  Data.searchContent = search
  console.log(Data.searchContent)
  let AIGC = await getPlanFromAI(Data.searchContent)
  console.log('before:')
  console.log(router)
  router.push({
    path: '/ai_page',
    query: {
      AIGC: AIGC,
      addr: Data.searchContent
    }
  })
  console.log('after:')
  console.log(router)
  router.go(1)
  console.log('end')
}

async function getPlanFromAI(addr) {
  console.log('开始获取...')

  const client = new OpenAI({
    apiKey:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcyNzY4NjcwMiwiaWF0IjoxNzE5OTEwNzAyLCJqdGkiOiJjcTFzMmJocDJrMTIycjAzZDA1MCIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjb3ZvNnFpdG5uMHF0MzRqNWZjMCIsInNwYWNlX2lkIjoiY292bzZxaXRubjBxdDM0ajVmYmciLCJhYnN0cmFjdF91c2VyX2lkIjoiY292bzZxaXRubjBxdDM0ajVmYjAifQ.rr2TZbstwoT6Ts2Ce8yh4gLDR9zUO9SCHmLO2tp9Z76v4YhNwD3SNUgbHu6uJ8T0yycjXrluuQ9_n1gYhrwzOw',
    baseURL: 'http://192.168.1.152:8000/v1',
    dangerouslyAllowBrowser: true
  })

  try {
    const completion = await client.chat.completions.create({
      model: 'moonshot-v1-128k',
      messages: [
        {
          role: 'system',
          content:
            '你是一个旅游向导，熟悉世界各地的旅游景点。请你根据用户的旅游地点，帮助用户制订一个详细的旅游计划。请将整个回答放在一个JSON对象里面，首先对用户旅游地点做不少于400字的介绍，放在introduce里面，然后的请你给出三天的旅游计划，每天去三个景点，并且给出对每天行程250字左右的总结，尽量每一天的景点相关且靠近放在这样的JSON格式里面：{Day_1:{attraction_1:{name:"",description:""}, Conclusion: "一段对当天行程的总结"}, Day_2:{}, Day_3:{}}。'
        },
        {
          role: 'user',
          content: '你好，我希望在这几天去' + addr + '旅游，你能帮我制订一个旅游计划吗？'
        },
        { role: 'assistant', content: '{', partial: true }
      ],
      temperature: 0.3
    })
    console.log(completion.choices[0].message.content)
    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error fetching plan from AI: ', error)
    return error
  }
}
const place_to_go = [
  'Las Vegas Hotels',
  'Destin Hotels',
  'Myrtle Beach Hotels',
  'Gatlinburg Hotels',
  'Walt Disney World Hotels',
  'Orlando Hotels',
  'Ocean City Hotels',
  'Panama City Beach Hotels',
  'Branson Hotels',
  'Seattle Hotels',
  'Turks and Caicos Hotels',
  'Mazatlan Hotels'
]

const things_to_do = [
  'Things to Do in Atlanta',
  'Things to Do in Austin',
  'Things to Do in Denver',
  'Things to Do in Kansas City',
  'Things to Do in Gatlinburg',
  'Things to Do in Asheville',
  'Things to Do in Pigeon Forge',
  'Things to Do in Philadelphia',
  'Things to Do in Santa Barbara',
  'Things to Do in Myrtle Beach',
  'Things to Do in Jacksonville',
  'Things to Do in Colorado',
  'Things to Do in Lake Tahoe (California)',
  'Things to Do in Fredericksburg'
]

const place_to_stay = [
  'Beaches Turks & Caicos',
  'Moon Palace Cancun',
  'Majestic Elegance Costa Mujeres',
  'Hyatt Ziva Cancun',
  'Moon Palace Jamaica',
  'Dreams Punta Cana Resort & Spa',
  "Disney's Grand Floridian Resort & Spa",
  'Majestic Mirage Punta Cana',
  'Planet Hollywood Cancun',
  'Barcelo Aruba'
]

// 状态变量
const activeToggle = ref('toGo')

const toggle = (selection) => {
  activeToggle.value = selection
}
</script>

<style>
.home {
  transition: background-color 0.3s ease;
}
.home.darken {
  background-color: rgba(0, 0, 0, 0.5);
}

.rounded {
  border-radius: 15px;
}

.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
}
</style>
