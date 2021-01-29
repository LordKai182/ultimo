<template>
    <div>
        <apex type="bar" ref="demoChart" height="250" @dataPointSelection="dataPointSelectionHandler" :options="chartOpt" :series="ser"></apex>
      </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import { Vue } from 'vue-property-decorator'
export default  Vue.extend({
      name: 'ChartBar',
       props: {
        ser: [],
        chartOpt: Object
    },
     components: {
         apex: VueApexCharts,
        },
        data: () => ({
 
        }),
        methods: {
  dataPointSelectionHandler(e, chartContext, config) {
       console.log(this.ser[config.seriesIndex].data[config.dataPointIndex])

     

  }
}
})
</script>