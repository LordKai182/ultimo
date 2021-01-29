<template>
  <v-app>
  
  <HelloWorld/>
    


  </v-app>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

     data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),
     computed: {
      cli(){
         return this.$store.state.clienteStore;
      },
      notifications(){
         return this.$store.state.notifications
      },
      activeFab() {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
      watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
});
</script>
<style>

html *
{
   font-size: 0.99em !important;
}
.el-input-group__append, .el-input-group__prepend {
    background-color: #c7db6e;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    width:160px!important;
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px !important;
}
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
     margin-top:-100px;
  }
.el-form-item--mini .el-form-item__content, .el-form-item--mini .el-form-item__label {
    line-height: 28px;
    min-width: 174px!important;
}
  #create .v-btn--floating {
    position: relative;
   
  }
</style>