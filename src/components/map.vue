<template>
    <div ref="mapChart" style="width: 600px; height: 500px;"></div>
    <div style="padding-left: 200px; padding-right: 200px">
      <!-- 使用计算出的进度条百分比 -->
      <n-progress type="line" :percentage="progressPercentage" :indicator-placement="'inside'" :color="'#000000'" processing />
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
  import { onMounted, ref, computed, watch } from 'vue';
  import chinaJson from '@/assets/china.json';
  import { NProgress } from 'naive-ui';
  
  const mapChart = ref(null);
  const props = defineProps({
    tourList: {
      type: Array,
      default: () => []
    }
  });
  
  
  const progressPercentage = computed(() => {
    return Math.min((props.tourList.length / 34) * 100, 100); // 确保超过100%
  });
  
  function initChart() {
    var myChart = echarts.init(mapChart.value);
    echarts.registerMap('china', chinaJson);
  
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const index = props.tourList.indexOf(params.name);
          if (index === -1) {
            return '下一个想去的地方';
          } else {
            return `${params.name}<br/>第${index + 1}个到达的省份`;
          }
        }
      },
      series: [
        {
          name: '中国地图',
          type: 'map',
          map: 'china',
          roam: true,
          itemStyle: {
            areaColor: ' #F5F5F5',
            borderColor: '#111',
          },
          emphasis: {
            label: {
              show: true,
              color: '#FFFFFF'
            },
            itemStyle: {
              areaColor: '#000000',
              borderColor: '#404a59',
              borderWidth: 1,
            }
          },
          selectedMode: 'multiple',
          data: props.tourList.map((city, index) => ({
            name: city,
            value: index + 1,
            selected: true
          }))
        }
      ]
    };
  
    myChart.setOption(option);
  }
  
  onMounted(() => {
    initChart();
  });
  
  // 监听 tourList 的变化
  watch(() => props.tourList, () => {
    // 销毁之前的图表实例
    echarts.dispose(mapChart.value);
    
    // 重新初始化图表
    initChart();
  }, {
    deep: true
  });
  </script>
  