<template>
<div>
<FormSag :propsMessage="linha" :entrada="cli"/>
</div>

</template>
<script>
import { Vue } from 'vue-property-decorator'
import FormSag from  '@/componentes-genericos/formulario-generico'
export default Vue.extend({
      name: 'TelaNova',
      components: {
      FormSag,
  },
  data:() => ({
    linha: [
      {
        teste:[
            {
                id:1,
                label:'Teste',
                type:'input',
                model:'cnpjCpf'
            },
             {
                id:1,
                label:'Teste',
                type:'input',
                model:'cnpjCpf'
            }
        ]
      },
      {
        teste:[
          {
            id:1,
            label:'gggg',
            type:'input'
          }
        ]
      },
      {
        teste:[
          {
            id:1,
            label:'Teste 2',
            type:'select',
            options:[
              {label:'teste',value:1},
              {label:'teste 2',value:2}
            ]
          },
          {
            id:1,
            label:'outra',
            style:'width:40px;',
            type:'date'
          },
           {
            id:1,
            label:'outra',
            type:'date'
          },
           {
            id:1,
            label:'outra',
            type:'date'
          }
        ]
      }
    ]
  }),
    computed:{
      cli(){
        return this.$store.state.clienteStore;
      },
    }

})
</script>