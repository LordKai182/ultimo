<template>
  <div>
<el-row :gutter="10">
 
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12"><div class="grid-content bg-purple-light">
   <div id="chart">
        <apex type="pie"  height="250" :options="chartOptions" :series="series"></apex>
      </div>
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12"><div class="grid-content bg-purple">
  <ChartLine/>
  </div></el-col>
 </el-row>
 <p></p>
 <el-row :gutter="10">
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12">
  <div class="grid-content bg-purple">
   <ChartBar/>
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12">
  <div class="grid-content bg-purple ">
    <ChartBar/>
  </div>
  </el-col>
  
</el-row>
<p></p>
 <el-row :gutter="10">
  <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1">
  <div class="grid-content bg-purple-light seta">
  <i class="el-icon-arrow-right" style="font-size:2.99em !important;font-weight:bold;"></i>
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="11" :xl="11">
  <div class="grid-content bg-purple seta">
  
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="11" :xl="11">
  <div class="grid-content bg-purple seta">
  </div>
  </el-col>
  <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1">
  <div class="grid-content bg-purple-light seta">
  <i class="el-icon-arrow-left" style="font-size:2.99em !important;font-weight:bold;"></i>
  </div>
  </el-col>
</el-row>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import ChartLine from '@/componentes-genericos/ChartLine'
import ChartBar from '@/componentes-genericos/ChartBar'
import { Vue } from 'vue-property-decorator'
export default Vue.extend({
    name: 'DashBoard',
     components: {
         apex: VueApexCharts,
         ChartLine,
         ChartBar
        },
           data: () => ({
            series: [25, 15, 44, 55, 41, 17],
          chartOptions: {
            chart: {
              width: '100%',
              type: 'pie',
            },
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
            theme: {
              monochrome: {
                enabled: true
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -5
                }
              }
            },
            title: {
              text: "Base Semanal"
            },
            dataLabels: {
              formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
              }
            },
            legend: {
              show: true
            }
          },

    }),
})
</script>
<style>
  .seta{
        height:100px;
        display: flex;
        align-items: center;
        justify-content: center;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    opacity: 1.9;
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>