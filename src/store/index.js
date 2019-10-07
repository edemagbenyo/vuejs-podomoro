import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations: {
    ...mutations,
    ...vuexfireMutations
  },
  actions
})
