<template>
 <div>
 <el-dialog title="cadastro de Endereço" :visible.sync="outerVisible" width="80%" >
 <FormSag :propsMessage="ponto" :entrada="enrtada"/>
 </el-dialog>
 
  <div style="margin-bottom:10px">
     <el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button @click="outerVisible = true" type="primary" icon="el-icon-plus" circle></el-button>
  <el-button type="success" icon="el-icon-edit" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
  </div>
<v-card>
  <el-table
    :data="Enderecos"
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
      label="Endereço"
      prop="enderecoBase">
    </el-table-column>
    <el-table-column
      label="Tipo de Ponto"
      >
      <template slot-scope="scope">
       <div v-if="scope.row.tipoPonto == 1">Fiscal</div>
       <div v-if="scope.row.tipoPonto == 2">Cobranca</div>
       <div v-if="scope.row.tipoPonto == 3">Paciente</div>
       <div v-if="scope.row.tipoPonto == 4">PontoDeEntrega</div>
       <div v-if="scope.row.tipoPonto == 5">Locatario</div>
       <div v-if="scope.row.tipoPonto == 6">Fornecedor</div>
      </template>
    </el-table-column>
  </el-table>
</v-card>
 </div>
</template>
<script>

import { Vue } from 'vue-property-decorator'
import FormSag from '@/componentes-genericos/formulario-generico';
import {Cliente} from '@/classes/cliente'
import {FrmPontoDeEntrega} from '@/formularios/PontoDeEntrega'
export default Vue.extend({
    name: 'PontoEntrega',
     components: {
     FormSag,
  },
    data: () => ({
        dialogTableVisible: false,
        outerVisible: false,
        ponto: FrmPontoDeEntrega,
        search: '',
    }),
      methods: {
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
     computed:{
      enrtada(){
        return this.$store.state.clienteStore.enderecos[1];
      },
       Enderecos(){
        return this.$store.getters.Enderecos;
      }
    },
})
</script>