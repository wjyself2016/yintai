import axios from 'axios'
import vm from '../main.js'

export default {
  loadMoreData(url, func) {
    axios.get(url)
      .then(func)
  },
  login(phonenum, password, url,obj) {
    console.log(phonenum, password)
    var data = {
      data: JSON.stringify({
        'phonenum': phonenum,
        'password': password
      }),
    }
    axios({
      method: "POST",
      url: url,
      data: data
    }).then(function(res){
      console.log(res.data)
      if(res.data.loginstatus !== 0){
        vm.$store.commit('setUserInfo',res.data)
        obj.loginstatus = 1
      }else{
        obj.loginstatus = 0
      }
      
    })
  },
  register(phonenum, password, url,obj) {
    var data = {
      data: JSON.stringify({
        'phonenum': phonenum,
        'password': password
      }),
    }
    axios({
      method: "POST",
      url: url,
      data: data
    }).then(function(res){
      console.log(res.data)
      if(res.data.registerstatus !== 0){
        vm.$store.commit('setUserInfo',res.data)
        obj.registerstatus = 1
      }else{
        obj.registerstatus = 0
      }
    })
  },
  update(phonenum, password, url,obj) {
    var data = {
      data: JSON.stringify({
        'phonenum': phonenum,
        'password': password
      }),
    }
    axios({
      method: "POST",
      url: url,
      data: data
    }).then(function(res){
      console.log(res.data)
      if(res.data.updatestatus !== 0){
        vm.$store.commit('setUserInfo',res.data)
        obj.updatestatus = 1
      }else{
        obj.updatestatus = 0
      }
    })
  }
}