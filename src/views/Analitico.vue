<template>
<div>
<el-row :gutter="12">
  <el-col :xl="12">
  <div>
  <el-radio-group @change="handleCurrentChange(1)" class="groupradio" v-model="radio">
     <el-radio :label="1">Vencidos</el-radio>
      <el-radio :label="2">A vencer</el-radio>
       <el-radio :label="3">Vencem Hoje</el-radio>
      <el-radio :label="4">Todos no Periodo</el-radio>
       <el-radio :label="5">Pagos no Periodo</el-radio>
    </el-radio-group>
    <span class="demonstration">Periodo</span>
    <el-date-picker
      v-model="dataRange"
      type="daterange"
      range-separator="Até"
      start-placeholder="Data inicial"
       format="dd/MM/yyyy"
      end-placeholder="Data final">
    </el-date-picker>
    <el-button style="margin-left:10px;" @click="handleCurrentChange(1)" type="primary">Bang!!</el-button>
  
  </div>
  </el-col>
 </el-row>
 <el-row :gutter="12">
<p></p>
  <el-col :xl="12">
  <div class="block">
    <span class="demonstration">Competência</span>
    <el-date-picker
      v-model="competencia"
      type="month"
      format="MM/yyyy"
      placeholder="Competência">
    </el-date-picker>
    <el-input placeholder="Código Fornecedor" class="inp" v-model="fornecedor.codigo"></el-input>

    <el-input placeholder="Nome Fornecedor" class="inpfor" v-model="fornecedor.nome"></el-input>
    
    <el-select v-model="empresas" class="el-select-2" multiple placeholder="Selecione uma Empresa">
    <el-option
      v-for="item in empresa"
      :key="item.id"
      :label="item.empresa"
      :value="item.id">
    </el-option>
  </el-select>
  </div>
  
  </el-col>

 </el-row>
 <p></p>
 <el-row :gutter="12">
  <el-col :xl="12">
  <div class="grid-content bg-purple">
  <el-table
     :v-loading="loading"
    :data="tableData"
    style="width: 100%;"
    height="450"
    :lazy="true"
    >
    <el-table-column
      fixed
      sortable
      width="140"
      label="Código Emp."
      prop="codigoEmpresa">
    </el-table-column>
     <el-table-column
      fixed
      width="130"
      label="Nome Emp."
      prop="nomeEmpresa">
    </el-table-column>
     <el-table-column
      sortable
      width="100"
      label="Lanct. Nº"
      prop="numeroLancamento">
    </el-table-column>
     <el-table-column
      sortable
      width="150"
      label="Fornecedor"
      prop="codigoFornecedor">
    </el-table-column>
     <el-table-column
      sortable
      width="300"
      label="Nome Fornecedor"
      prop="nomeFornecedor">
    </el-table-column>
    <el-table-column
      sortable
      width="150"
      label="Doc. Nº"
      prop="numeroDocumento">
    </el-table-column>
      <el-table-column
      width="100"
      label="Tipo Doc."
      prop="tipoDocumento">
    </el-table-column>
      <el-table-column
      sortable
      width="400"
      label="Descrição"
      prop="descricao">
    </el-table-column>
      <el-table-column
      sortable
      width="120"
      label="Data Lanct."
      prop="dataLancamento">
    </el-table-column>
      <el-table-column
      sortable
      width="120"
      label="Vencimento"
      prop="vencimento">
    </el-table-column>
      <el-table-column
      sortable
       width="150"
      label="Valor"
      prop="valor">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Pagar Conta</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  </el-col>
  
</el-row>
<p></p>
 <div class="block">
    <span class="demonstration">Total de negos vindo</span>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="totalReg">
    </el-pagination>
  </div>
</div>
</template>
<style>

.groupradio{
  margin-left: 10px;
   margin-top: 10px;
}
.demonstration{
  margin-left: 10px;
   margin-right: 10px;
}
</style>
<script>
import { Vue } from 'vue-property-decorator'
import TutorialDataService from '../service/sag-service'
export default Vue.extend({ name: 'ContasPagar',
     components: {
                                },
     data:() => ({
       fornecedor:{
         codigo:'',
         nome:''
       },
       empresas:'',
       loading: false,
       competencia: '',
       radio: '',
       tableData: [],
       config: {
       method: 'post',
       url: 'http://192.168.0.130:9090/sag/Consolidado',
       headers: { 
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
       },
        data :  JSON.stringify({"login":"SAG","senha":"708015"}),
       },
       totalReg: 0,
       pagina: 0,
        search: '',
        dataRange:'',
        usuario: {
           token:''
        }
     }),
      computed:{
       token(){
        return this.$store.state.Token
      },
      empresa(){
        return this.$store.state.EmpresasDoGrupo
      },
      },

      methods: {
            handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        
        if(this.dataRange == ''){
          return
        }else{
        this.loading = true;
        this.pagina = val
        this.CountFiltro();
        this.FiltarContas();
        this.loading = false;
        console.log(`current page: ${val}`);
        }

      },
        CountFiltro(){
           
            this.config.url = "http://192.168.0.130:9090/sag/Consolidado/ContasCount"
            this.config.data = JSON.stringify({"tipoConta":1,"TipoCondicao":this.radio,"periodo": this.dataRange,"pagina": this.pagina, "competencia": this.competencia});
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.token}`  }
             TutorialDataService.selecionarCliente(this.config)
            .then((response) => {
                 
                  this.totalReg =  response.data.data.data
                  console.log('Filtro Contas COUNT',  response.data.data.data)
                  //this.$store.commit('setarEmpresasDoGrupo',r.data.data)
            })

        },
      FiltarContas(){
            this.loading = true;
            this.config.url = "http://192.168.0.130:9090/sag/Consolidado/Contas"
            this.config.data = JSON.stringify({"tipoConta":1,"TipoCondicao":this.radio,"periodo": this.dataRange,"pagina": this.pagina, "competencia": this.competencia});
            this.config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.token}`  }
             TutorialDataService.selecionarCliente(this.config)
            .then((response) => {
                 
                 this.tableData =  []
                  this.tableData =  response.data
                  this.tableData =  this.tableData.data.data
                  console.log('Filtro Contas',  response.data)
                  //this.$store.commit('setarEmpresasDoGrupo',r.data.data)
            })

            this.loading = false;
        },

      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  
  })
</script>
<style>
.inpfor{
  width:300px!important ;
  margin-left:10px;
}
.inp{
  width:150px!important ;
  margin-left:10px;
}
.el-select-2 {
  width: 20.5%!important;
  margin-right:10px;
  margin-left:10px;
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
   
    padding:15px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>