<template>
  <div class="flex-column" style="background: black;">
    <div id="barChart" style="width: 800px; height: 400px;"></div>
  </div>
</template>

<script>
import {barChart1} from '@/api/test.js'

export default {
  name: 'BarChart1',
  data () {
    return {
      updateTime: 30,
      updateInterval: '',
      barChart: {},
      option: {
        title: {
          text: '季度产量统计',
          padding: [10, 20],
          backgroundColor: 'rgba(129,216,207,0.5)',
          borderColor: 'rgba(129,216,207,1)',
          borderWidth: 3,
          borderRadius: 10,
          textStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        tooltip: {},
        grid: {
          top: 90,
          left: 45,
          height: 270
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            fontWeight: 'bold',
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#81D8CF',
              width: 2
            }
          },
          data: []
        },
        yAxis: {
          type: 'value',
          data: [],
          interval: 1,
          axisLabel: {
            fontWeight: 'bold',
            fontSize: 14,
            formatter: function (value, index) {
              if (index % 2 === 1) {
                return value
              } else {
                return ''
              }
            }
          },
          axisTick: { inside: true },
          axisLine: {
            lineStyle: {
              color: '#81D8CF',
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(129,216,207,0.4)',
              width: 1
            }
          },
          name: '架',
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            padding: [0, 30, 0, 0]
          }
        },
        series: [{
          type: 'bar',
          name: '季度产量统计',
          barMaxWidth: 60,
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
          },
          itemStyle: {
            color: '#81D8CF'
          }
        }]
      }
    }
  },
  mounted () {
    this.barChart = this.$echarts.init(document.getElementById('barChart'))
    this.updateChart()
    this.updateInterval = setInterval(() => {
      this.updateChart()
    }, this.updateTime * 1000)
  },
  beforeDestroy () {
    clearInterval(this.updateInterval)
  },
  methods: {
    updateChart () {
      barChart1().then(res => {
        this.option.xAxis.data = res.data.xData
        this.option.series[0].data = res.data.yData
        this.barChart.setOption(this.option)
      }).catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../styles/pages.css';

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
