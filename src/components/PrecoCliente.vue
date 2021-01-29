<template>
 <div>
 <FormSag :propsMessage="preco" :entrada="enrtada"/>
 </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
import FormSag from '@/componentes-genericos/formulario-generico';
import {Cliente} from '@/classes/cliente'
import {FrmDadosFaturamento} from '@/formularios/PrecoCliente'

export default Vue.extend({
     name: 'PrecoCliente',
     components: {
     FormSag,
  },
    data: () => ({
        preco: FrmDadosFaturamento
    }),
     computed:{
      enrtada(){
        return this.$store.state.clienteStore.dadosDeFaturamento;
      }
    },
})
</script>