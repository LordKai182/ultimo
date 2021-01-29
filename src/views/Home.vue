<template>
    <div style="width:98%!important;">
    <el-tabs type="border-card">
  <el-tab-pane label="DashBoard"><Consolidado></Consolidado></el-tab-pane>
  <el-tab-pane label="Contas a Pagar"><Analitico></Analitico></el-tab-pane>
  <el-tab-pane label="Contas a Receber"><ContasReceber></ContasReceber></el-tab-pane>
  <el-tab-pane label="Vendas">Task</el-tab-pane>
  <el-tab-pane label="Resumo Financeiro">Task</el-tab-pane>
</el-tabs>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Consolidado from '@/componentes-genericos/Consolidado'
import ContasReceber from '@/views/ContasReceber'
import Analitico from '@/views/Analitico'
@Component({
  components: {
        Consolidado,
        Analitico,
        ContasReceber
        },
})
export default class Home extends Vue {
  data () {
      return {
        tab: null,
        
      }
    }
  
}
</script>
