<template>
 <div>
 <el-form :inline="true" size="small" >
  <div v-for="line in propsMessage" 
    :key="line.id">
      <el-form-item  v-for="item in line.teste" :key="item.id" > 
        <el-input :placeholder="item.label" v-model="entrada[item.model]"
          @keypress.enter.native="buscar()" :style="item.style"
         v-if="item.type === 'input' && item.submodel == null" class="input-with-select">
          <template slot="prepend">{{item.label}}</template>
        </el-input>
          <el-input :placeholder="item.label" v-model="entrada[item.model][item.submodel]"
          @keypress.enter.native="buscar()" :style="item.style"
         v-if="item.type === 'input' && item.submodel != null" class="input-with-select">
          <template slot="prepend">{{item.label}}</template>
        </el-input>
        <el-select 
        v-if="item.type == 'select'"
       placeholder="Selecione um Valor"
      :style="item.style"
       v-model="entrada[item.model]"
      >
      <el-option 
      v-for="opt in item.options" 
      :key="opt.value" 
      :label="opt.label" 
      :value="opt.value"
      ></el-option>
    </el-select>
      </el-form-item>
  </div>
   </el-form>

 </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

 export default Vue.extend({
    name: 'FormSag',
    props: {
        propsMessage: Object,
        entrada: Object,
        botaoCriar: Function
    },
    data: () => ({
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
    }),
    methods:{
       buscar(){
          this.botaoCriar()
       }
    }
 })
</script>>
<style scoped>

.color-cod{
  background-color: #F1DF55!important;
}
.adj{
  width: 0px;
}
</style>