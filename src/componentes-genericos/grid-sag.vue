<template>
 <div>
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
import FormSag from './formulario-generico';
import {Cliente} from '@/classes/cliente'

export default Vue.extend({
    name: 'GridSag',
     components: {
     FormSag,
  },
    data: () => ({
        dialogTableVisible: false,
        outerVisible: false,
        tableData: Cliente.enderecos,
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
})
</script>