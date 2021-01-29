<template>
    <div>
        <apex type="line" height="240" :options="chartOptions" :series="series"></apex>
      </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import { Vue } from 'vue-property-decorator'
export default  Vue.extend({
      name: 'ChartLine',
     components: {
         apex: VueApexCharts,
        },
        data: () => ({
 series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148,69, 91, 148]
          }],
   chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
             theme: {
              monochrome: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Pedidos Por Mês',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            }
          },
          
          
        })
})
</script>