<template>
    <div>
    <el-tabs type="border-card">
  <el-tab-pane label="DashBoard"><Consolidado></Consolidado></el-tab-pane>
  <el-tab-pane label="Contas a Pagar"><Analitico></Analitico></el-tab-pane>
  <el-tab-pane label="Contas a Receber"><ContasReceber></ContasReceber></el-tab-pane>
  <el-tab-pane label="MasUma">Task</el-tab-pane>
</el-tabs>
    </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
import Consolidado from '@/componentes-genericos/Consolidado'
import ContasReceber from '@/views/ContasReceber'
import Analitico from '@/views/Analitico'
export default  Vue.extend({
      name: 'TabSag',
     components: {
        Consolidado,
        Analitico,
        ContasReceber
        },
        data: () => ({

        })
})
</script>