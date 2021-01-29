<template>
<div style="display:flex;margin:10px;">
  
   <div style="margin-left:3%;width:100%">
    <router-view/>
    </div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      drawer: null,
      admins: [
        ['Manutenção de Cadastros', 'mdi-account-multiple-outline'],
        ['Atividades', 'mdi-cog-outline'],
        ['Segmentos', 'mdi-cog-outline'],
        ['Dados de Faturamento', 'mdi-cog-outline'],
        ['Preços Especias para Clientes', 'mdi-cog-outline'],
        ['Reajuste de Preços de Clientes', 'mdi-cog-outline'],
        ['Clientes Bloqueados', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
       items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
    }),
  })
</script>
