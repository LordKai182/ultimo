import Vue from 'vue'
import Vuex from 'vuex'
import {Cliente} from '@/classes/cliente'
import {ConsolidadoBar} from '@/classes/ConsolidadoBar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     DashPagas: ConsolidadoBar,
     DashPagar: ConsolidadoBar,
     Token: '',
     DashReceber:[{
      name: 'A Receber',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
      name: 'Recebido',
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    ],
     DashRecebidos: ConsolidadoBar,
     EmpresasDoGrupo: {}
  },
  getters:{
  },
  mutations: {
    setarToken(state,payLoad){
      state.Token = payLoad

    },
    setarEmpresasDoGrupo(state,payLoad){
      state.EmpresasDoGrupo = payLoad

    },
    setarContasPagar(state,payLoad){
      state.DashPagar = payLoad

    },
    setarContasPagas(state,payLoad){
      state.DashPagas = payLoad

    },
    setarContasReceber(state,payLoad){
      state.DashReceber = payLoad
      
    },
    setarContasRecebidas(state,payLoad){
      state.DashRecebidos = payLoad

    },
  },
  actions: {
  },
  modules: {
  }
})
