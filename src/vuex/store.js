import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    navName:'',
    user:'',
    goodsList:[]
  },
  mutations: {
    navName(state, payload) {
      state.navName = payload
    },
    setUserInfo(state,payload){
      state.user = payload
    },
    setGoodsInCart(state,payload){
      var goods = state.goodsList.find(function(item,index){
        return item.itemcode === payload.itemcode
      })
      if(goods === undefined){
        state.goodsList.push(payload)
      }else{
        if(goods.color !== payload.color || goods.size !== payload.size){
          state.goodsList.push(payload)
        }else{
          goods.goodsnum += payload.goodsnum
        }
      }
    }
  },
  getters:{
    isUserLogined(state){
      if(state.user === ''){
        return false
      }else{
        return true
      }
    }
  }
})
export default store
