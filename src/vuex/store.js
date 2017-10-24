import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    tabIndex: 0,
    city: ''
  },
  mutations: {
    changeIndex(state, payload) {
      state.tabIndex = payload
    },
    changeCity(state, payload) {
      state.city = payload
    }
  }
})

export default store
