<template>
    <div>echart界面</div>
    <div class="hello">
      <div id="main" style="width: 600px; height: 400px;"></div>
      <div id="main2" style="width: 600px; height: 400px;"></div>
      <div id="main3" style="width: 600px; height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'App',
  mounted() { // 在 mounted 钩子中初始化图表 确保 DOM 已渲染完成
    this.initChart();
    this.initChart2();
    this.initChart3();
  },
  methods: {
    initChart() {
      // 1. 获取 DOM 容器
      const chartDom = document.getElementById('main');
      if (!chartDom) return; // 容错处理

      // 2. 初始化 ECharts 实例
      const myChart = echarts.init(chartDom, 'dark');

      // 3. 配置图表
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [30, 35, 30, 50, 45, 40, 35],
          type: 'line'
        }]
      };

      // 4. 渲染图表
      myChart.setOption(option);
    },
    initChart2() {
      const chartDom = document.getElementById('main2');
      const myChart = echarts.init(chartDom);

      const option = {
        title: {
          text: 'Basic Radar Chart'
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '吃饭', max: 3000 },
            { name: '健身', max: 1000 },
            { name: '旅游', max: 10000 },
            { name: '游泳', max: 300 },
            { name: '买衣服', max: 1000 },
            { name: '日常开销', max: 1000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [3000, 1000, 10000, 300, 1000, 1000],
                name: 'Allocated Budget'
              },
              {
                value: [3500, 0, 13000, 100, 500, 800],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    initChart3() {
      const chartDom = document.getElementById('main3');
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: '游泳对比'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['自由泳', '蛙泳', '蝶泳', '仰泳']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [5, 10, 30, 10, 7, 25]
          },
          {
            name: '2012',
            type: 'bar',
            data: [0, 60, 40, 12, 71, 45]
          }
        ]
      };

      option && myChart.setOption(option);

    }
  }
}
</script>