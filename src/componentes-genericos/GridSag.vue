<template>
 <div>
 <button @click="logar">Logar</button>
 <button @click="selecionarCliente">Selecionar</button>
 <v-card>
  <el-table
    :data="tableData"
    style="width:100%">
    <el-table-column type="expand">
      <template slot-scope="props">
      <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p> 
      </template>
    </el-table-column>
    <el-table-column
      label="Empresa"
      prop="empresaSync">
    </el-table-column>
    <el-table-column
      label="CNPJ"
      prop="cnpjSync">
    </el-table-column>
    <el-table-column
      label="Tipo Doc."
      prop="tipoDocto">
    </el-table-column>
      <el-table-column
      label="Número Titulo"
      prop="nroTitulo">
    </el-table-column>
     <el-table-column
      label="Número Imp. Titulo"
      prop="nroImpressoTitulo">
    </el-table-column>
    <el-table-column
      label="Valor Titulo"
      prop="valorTitulo">
    </el-table-column>
      <el-table-column
      label="Data de Sincronia"
      prop="dataCadastro">
    </el-table-column>
         <el-table-column
      label="Ultima Sincronia"
      prop="dataUltimaAlteracao">
    </el-table-column>
    <el-table-column
      label="Tipo de Cobrança"
      >
      <template slot-scope="scope">
       <div v-if="scope.row.tipoCobranca == 'B'">Bancária</div>
       <div v-if="scope.row.tipoCobranca == 'C'">Carteira</div>
      </template>
    </el-table-column>
    <el-table-column
      label="Cancelado"
      >
      <template slot-scope="scope">
       <div v-if="scope.row.canceladoSN == 'S'">Sim</div>
       <div v-if="scope.row.canceladoSN == 'N'">Não</div>
      </template>
    </el-table-column>
  </el-table>
  
</v-card>
<p></p>
<div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
 </div>
</template>
<script>

import { Vue } from 'vue-property-decorator'
import {ClienConsolidadoTituloste} from '@/formularios/ConsolidadoTitulo'
import TutorialDataService from '../service/sag-service'
export default Vue.extend({
    name: 'GridTitulos',
     components: {
  },
    data: () => ({
         loading: false,
       datad: JSON.stringify({"nome":"JOAO","senha":"JOAO", "pega":10, "pula":0, "tipoConsulta": "Titulos"}),
       config: {
       method: 'post',
       url: 'https://localhost:44319/sag/Login/Autenticar',
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
        tableData: ClienConsolidadoTituloste,
        search: '',
        
        
    }),
      methods: {
           selecionarCliente(){
                this.loading = true;
                this.config.url = 'https://localhost:44319/sag/Consolidado/ConsultarConsolidado'
                this.config.data = this.datad
                this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.usuario.token}`  }
          TutorialDataService.selecionarCliente(this.config)
         .then( (response) => {
            this.tableData = response.data.data
           ///this.$store.commit('setarCliente',response.data.data)
            console.log('tabela' + JSON.stringify(response.data.data));
            this.loading = false;
            
         })
          .catch(function (error) {
          console.log(error);
          });
        // this.menssagens();
        },
           logar(){
          
          TutorialDataService.logar(this.config)
         .then( (response) => {
           this.usuario.token = response.data.accessToken;
       
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
      }
    },
     created() {
      this.logar();
    },
    
})
</script>