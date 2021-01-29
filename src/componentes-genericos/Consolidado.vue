<template>
 <div>
 <p id="version"></p>
 <button @click="consultarEmpresasDoGrupo">Listar</button>
 <el-select v-model="value1"  multiple placeholder="Selecione uma Empresa">
    <el-option
      v-for="item in empresasDoGrupo"
      :key="item.id"
      :label="item.empresa"
      :value="item.id">
    </el-option>
  </el-select>

    <el-date-picker
      v-model="dataRange"
      type="monthrange"
      range-separator="A"
      format="MM/yyyy"
      start-placeholder="Inicio"
      end-placeholder="Fim">
    </el-date-picker>
 
<el-collapse v-model="activeNames" accordion="true">
  <el-collapse-item title="Faturamento" name="1">
    <el-row :gutter="12">
 
  <el-col :xl="12">
  <div class="bg-purple-light">
  
      <apex type="bar" height="250" :options="chartOptionsd" :series="seriesd"></apex>
      
  </div>
  </el-col>
 </el-row>
  </el-collapse-item>
  <el-collapse-item title="Recebimentos e Pagamentos" name="2">
    <el-switch
  v-model="value2"
   @change="decisaoDash();"
   inactive-color="#13ce66"
  active-color="#ff4949"
  active-text="Pagamentos"
  inactive-text="Recebimentos">
</el-switch>
  <el-button style="margin-left:10px;" @click="decisaoDash();"  type="primary">Bang!!</el-button>
   <p></p>
   <el-row :gutter="12">
 
  <el-col :xl="12">
  <div class="bg-purple-light">
  
       <apex  type="bar" ref="demoChart" height="250" @dataPointSelection="dataPointSelectionHandler" :options="chartOptions" :series="series"></apex>
      
  </div>
  </el-col>
 </el-row>
 <p></p>
 <el-row :gutter="10">
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12">
  <div class="grid-content bg-purple">
     <span style="font-size:1.50em !important;font-weight:bold;margin-left:10px;">{{dashReceberPagar}}</span>
    <apex type="pie" ref="Pizza" height="250" :options="chartOptionsPie" :series="seriesPie"></apex>
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="12" :xl="12">
  <div class="grid-content bg-purple ">
      <span style="font-size:1.50em !important;font-weight:bold;margin-left:10px;">{{dashRecebidoPago}}</span>
       <apex type="pie" ref="Pizza2" height="250" :options="chartOptionsPieRecebido" :series="seriesPieRecebidos"></apex>
  </div>
  </el-col>
  
</el-row>
  </el-collapse-item>
  <el-collapse-item title="Outra Aba" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
</el-collapse>


<p></p>
 <el-row :gutter="10">
  <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1">
  
  <div class="grid-content bg-purple-light seta">
  <i class="el-icon-arrow-right" style="font-size:2.99em !important;font-weight:bold;color:#F45B08"></i>
  </div>
 
  
  
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="11" :xl="11">
  <div class="grid-content bg-purple seta">
   <p style="font-size:1.50em !important;font-weight:bold;margin-right:20px;color:#3C3B3A;">Titulos Vencendo Hoje (A Pagar)</p>
   <div>
     <el-progress type="circle" width="90" :percentage="10" color="#F45B08"  :format="format"></el-progress>

  </div>
  </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="11" :xl="11">
  <div class="grid-content bg-purple seta">
   <p style="font-size:1.50em !important;font-weight:bold;margin-right:20px;color:#3C3B3A;">Titulos Vencendo Hoje (A Receber)</p>
   <div>
     <el-progress type="circle" width="90" :percentage="10" color="#789B4C"  :format="format"></el-progress>

  </div>
  </div>
  </el-col>
  <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1">
  <div class="grid-content bg-purple-light seta">
  <i class="el-icon-arrow-left" style="font-size:2.99em !important;font-weight:bold;color:#789B4C"></i>
  </div>
  </el-col>
</el-row>
</div>
</template>
<style>
.el-select {
  width: 40.5%!important;
  margin-right:10px;
  margin-bottom:10px;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #409EFF!important;
}

.el-input.el-input-group.el-input-group--append .el-select .el-input__suffix {
  display: none;
}
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

<script>
import { Vue } from 'vue-property-decorator'
import VueApexCharts from 'vue-apexcharts'
import TutorialDataService from '../service/sag-service'

export default Vue.extend({
    name: 'Consolidado',
     components: {
         apex: VueApexCharts,
  },
    data: () => ({

            seriesd: [{
            name: 'Receita Bruta Operacional',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 88, 11, 22]
          }, {
            name: 'Despesas Operacionais',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 300, 78, 120]
          }, {
            name: 'Lucro Operacional',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41,66,33,11 ]
          },
          {
            name: 'Percentual de Lucratividade',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 33,77,11]
          }
          
          
          ],
          chartOptionsd: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['jan', 'fev', 'mar', 'abr', 'maio' ,'jun', 'jul', 'ago', 'set', 'out','nov', 'dez'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
           activeNames: ['1'],
          dashReceberPagar: '% A Receber ',
          dashRecebidoPago: '% Recebidos ',
          options: [],
          value1: [],
          value2: false,
          dataRange: '',
          seriesPie: [0,0,0,0,0,0,0,0,0,0,0,0],
          seriesPieRecebidos: [0,0,0,0,0,0,0,0,0,0,0,0],
          chartOptionsPieRecebido: {
            chart: {
              width: '100%',
              type: 'pie',
            },
            labels: ['jan', 'fev', 'mar', 'abr', 'maio' ,'jun', 'jul', 'ago', 'set', 'out','nov', 'dez'],
            theme: {
              monochrome: {
                enabled: false
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
              text: ""
            },
            dataLabels: {
              formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
              }
            },
            legend: {
              show: false
            }
          },
          chartOptionsPie: {
            chart: {
              width: '100%',
              type: 'pie',
            },
            labels: ['jan', 'fev', 'mar', 'abr', 'maio' ,'jun', 'jul', 'ago', 'set', 'out','nov', 'dez'],
            theme: {
              monochrome: {
                enabled: false
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
              text: ""
            },
            dataLabels: {
              formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
              }
            },
            legend: {
              show: false
            }
          },
         series: [{
            name: 'A Receber',
            data: [0,0,0,0,0,0,0,0,0,0,0,0]
          },
          {
            name: 'Recebido',
            data: [0,0,0,0,0,0,0,0,0,0,0,0]
          }
          ],
        chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
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
              show: true,
              width: 2,
              //colors: ['blue','green']
            },
            xaxis: {
              categories:['jan', 'fev', 'mar', 'abr', 'maio' ,'jun', 'jul', 'ago', 'set', 'out','nov', 'dez'],
            },
            yaxis: {
              title: {
                text: 'R$ (Financeiro)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "R$" + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                }
              }
              }
              },
         loading: false,
         labelTeste: 'oiii',
        dataemp: JSON.stringify({"nome":"JOAO","senha":"JOAO"}),
       config: {
       method: 'post',
       url: 'http://192.168.0.130:9090/sag/Login/Autenticar',
       headers: { 
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
       },
      data :  JSON.stringify({"login":"SAG","senha":"708015"}),
       },
       usuario:{
          token: ''
        },
        dialogTableVisible: false,
        outerVisible: false,
        tableData: [],
        tableDataRecebidos: [],
        tableReceber: [],
        search: '',
        
        
    }),
     computed:{
       contasReceber(){
         
        return this.$store.state.DashReceber
      },
      contasRecebidos(){
        return this.$store.state.DashRecebidos
      },
       empresasDoGrupo(){
        return this.$store.state.EmpresasDoGrupo
      }
      },
      methods: {
         format(percentage) {
           return percentage;
      },
        decisaoDash(){
          this.loading = true;
          if(this.value2 == false){

            this.consultarContasReceber();
            this.consultarContasRecebidos();
            this.loading = false;
          }
           if(this.value2 == true){

            this.consultarContasPagas();
            this.consultarContasPagar();
            this.loading = false
          }

        },
        consultarEmpresasDoGrupo(){
            this.config.data = JSON.stringify({"nome":"JOAO","senha":"JOAO"});
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
            TutorialDataService.chamadaAxios(this.config)
            .then((r) => {
                  this.$store.commit('setarEmpresasDoGrupo',r.data.data)
            })
        },
        consultarContasReceber(){
             this.dashReceberPagar = '% A Receber ',
             //dashRecebidoPago: '% Recebidos ',
            this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
            this.config.data = JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "Receber", "empresas": this.value1, "dataRange": this.dataRange}),
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
            this.series[1].name = "A Receber"
            TutorialDataService.chamadaAxios(this.config)
            .then((r) => {
                 this.series[1].data = [0,0,0,0,0,0,0,0,0,0,0,0]
                 this.seriesPie = [0,0,0,0,0,0,0,0,0,0,0,0]
                  r.data.data.map(
                  i => {
                       this.seriesPie[i.mesReal - 1] = i.valorReal
                       this.series[1].data[i.mesReal - 1] = i.valorReal
                      return  i.valorReal
                }
              );
              this.$refs.demoChart.updateOptions({ colors: 'red' })
            })
        },
        consultarContasRecebidos(){
            this.dashRecebidoPago =  '% Recebidos '
            this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
            this.config.data = JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "Recebidos", "empresas": this.value1, "dataRange": this.dataRange}),
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
            this.series[0].name = "Recebidos"
             this.chartOptionsPieRecebido.title.title = "% Contas Recebidas"
            TutorialDataService.chamadaAxios(this.config)
            .then((r) => {
                 this.series[0].data = [0,0,0,0,0,0,0,0,0,0,0,0]
                 this.seriesPieRecebidos = [0,0,0,0,0,0,0,0,0,0,0,0]
                 r.data.data.map(
                  i => {
                       
                       this.seriesPieRecebidos[i.mesReal - 1] = i.valorReal
                       this.series[0].data[i.mesReal - 1] = i.valorReal
                      return  i.valorReal
                }
              );
              this.$refs.demoChart.updateOptions({ colors: 'red' })
              
            })
        },
         consultarContasPagas(){
           
            this.dashRecebidoPago = '% A Pagar '
            this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
            this.config.data = JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "ContasPagas", "empresas": this.value1, "dataRange": this.dataRange}),
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
            this.series[1].name = "Pagas"
            this.chartOptionsPieRecebido.title.text = "% Contas Pagas"
            TutorialDataService.chamadaAxios(this.config)
            .then((r) => {
                 
                 this.series[1].data = [0,0,0,0,0,0,0,0,0,0,0,0]
                 this.seriesPie = [0,0,0,0,0,0,0,0,0,0,0,0]
                  r.data.data.map(
                  i => {
                       this.seriesPie[i.mesReal - 1] = i.valorReal
                       this.series[1].data[i.mesReal - 1] = i.valorReal
                      return  i.valorReal
                }
              );
              this.$refs.demoChart.updateOptions({ colors: 'red' })
            })
        },
        consultarContasPagar(){
            this.dashReceberPagar = '% Pagas '
            this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
            this.config.data = JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "ContasAPagar", "empresas": this.value1, "dataRange": this.dataRange}),
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
            this.series[0].name = "A Pagar"
            TutorialDataService.chamadaAxios(this.config)
            .then((r) => {
                 this.series[0].data = [0,0,0,0,0,0,0,0,0,0,0,0]
                 this.seriesPieRecebidos = [0,0,0,0,0,0,0,0,0,0,0,0]
                 r.data.data.map(
                  i => {
                       this.seriesPieRecebidos[i.mesReal - 1] = i.valorReal
                       this.series[0].data[i.mesReal - 1] = i.valorReal
                      return  i.valorReal
                }
              );
              this.$refs.demoChart.updateOptions({ colors: 'red' })
            })
        },








          tre(){
            console.log(this.$refs)
          },
           trazArray(array, dat){
            console.log(this.series[array].data[dat])
           },
           seraparValorRecebidos(){
            this.series[1].data = [0,0,0,0,0,0,0,0,0,0,0,0]
            this.seriesPieRecebidos = [0,0,0,0,0,0,0,0,0,0,0,0]
            const teste = this.tableDataRecebidos.map(
                  i => {
                       this.seriesPieRecebidos[i.mesReal - 1] = i.valorReal
                       this.series[1].data[i.mesReal - 1] = i.valorReal
                      return  i.valorReal
                }
              );
             
              console.log('MESES' + JSON.stringify(teste))
               // this.seriesPieRecebidos = teste;
                this.$refs.demoChart.updateOptions({ colors: 'red' })
               return teste;
           },
           seraparValor(){
                this.series[0].data = [0,0,0,0,0,0,0,0,0,0,0,0]
                this.seriesPie = [0,0,0,0,0,0,0,0,0,0,0,0]
            const teste = this.tableData.map(
                  i => {
                    this.seriesPie[i.mesReal - 1] = i.valorReal
                     this.series[0].data[i.mesReal - 1] = i.valorReal
                      return i.valorReal
                  }
              );
             
              console.log('MESES' + JSON.stringify(teste))
            
              //this.series[0].data = teste;
                 //this.seriesPie = teste;
                 this.$refs.demoChart.updateOptions({ colors: 'red' })
               return teste;
           },
            seraparRecebidos(){
            const teste = this.tableDataRecebidos.map(
                  i => {
                      return i.mes
                  }
              );
              console.log('MESES' + JSON.stringify(teste))
              return teste;
           },
           seraparMeses(){
            const teste = this.tableData.map(
                  i => {
                      return i.mes
                  }
              );
              console.log('MESES' + JSON.stringify(teste))
              return teste;
           },
              ListaEmpresas(){
                this.loading = true;
                this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ListarEmpresas'
                this.config.data = this.dataemp
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
          TutorialDataService.selecionarCliente(this.config)
         .then( (response) => {
            this.options = response.data.data;
            console.log('Empresas Listas' + JSON.stringify(response.data.data));
           
            
         })
          .catch(function (error) {
          console.log(error);
          });
        },
              Recebidos(){
                this.loading = true;
                this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
                this.config.data =  JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "Recebidos", "empresas": this.value1, "dataRange": this.dataRange}),
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
          TutorialDataService.selecionarCliente(this.config)
         .then( (response) => {
            this.tableDataRecebidos = response.data.data
         
            console.log('tabela Recebidos' + JSON.stringify(response.data.data));
      
            this.seraparValorRecebidos();
            this.seraparMesesRecebidos();
             this.$refs.demoChart.updateOptions({ colors: 'red' })
           
            this.loading = false;
            
         })
          .catch(function (error) {
          console.log(error);
          });
        },
           selecionarCliente(){
                this.tableData = [];
                this.loading = true;
                this.config.url = 'http://192.168.0.130:9090/sag/Consolidado/ConsultarConsolidado'
                this.config.data = JSON.stringify({"ano":"2020","nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "Receber","empresas": this.value1,"dataRange": this.dataRange}),
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
          TutorialDataService.selecionarCliente(this.config)
         .then( (response) => {
             this.Recebidos();
            this.tableData = response.data.data
            console.log('tabela' + JSON.stringify(response.data.data));
            this.seraparMeses();
            this.seraparValor();
            this.loading = false;
            
         })
          .catch(function (error) {
          console.log(error);
          });
        },
           logar(){
          
          TutorialDataService.logar(this.config)
         .then( (response) => {
           this.usuario.token = response.data.accessToken;
           this.$store.commit('setarToken',response.data.accessToken)

           console.log("jhhhjhj" + JSON.stringify(this.usuario.token));
         })
          .catch(function (error) {
          console.log(error);
          });
        },
        handleEdit(index, row) {
        console.log(index, row);
      },
     
      handleDelete(index, row) {
        console.log(index, row);
      },
       dataPointSelectionHandler(e, chartContext, config) {
       console.log(this.series[config.seriesIndex].data[config.dataPointIndex])
       //console.log(this.$refs.demoChart.updateOptions({ colors: 'red' }))
     

  }
    },
     mounted() {
     
      this.logar();
      this.ListaEmpresas();
    },
    
})
</script>