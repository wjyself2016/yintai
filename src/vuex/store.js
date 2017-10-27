import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cart from './modules/cart'
import * as types from './mutation-types'


const store = new Vuex.Store({
  state: {
    navName:''
  },
  modules:{
  	cart
  },
  mutations: {
    navName(state, payload) {
      state.navName = payload
    }
  }
})

export default store
