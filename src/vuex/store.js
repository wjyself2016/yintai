import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isShow:false,
    navName:''
  },
  mutations: {
    isShow(state, payload) {
      state.isShow = payload
    },
    navName(state, payload) {
      state.navName = payload
    }
  }
})

export default store
