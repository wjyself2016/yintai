import Vue from 'vue'
import Router from 'vue-router'

import Container from '../pages/Container.vue'
import Index from '../pages/index/Index.vue'
import Classify from '../pages/classify/Classify.vue'
import Hot from '../pages/hot/Hot.vue'
import Mine from '../pages/mine/Mine.vue'
import Shopping from '../pages/shopping/Shopping.vue'
import GoodsDetail from '../pages/detail/GoodsDetail.vue'
import Sign from '../pages/sign/Sign.vue'
import LoginByHu from '../pages/sign/LoginByHu.vue'
import LoginByAcc from '../pages/sign/LoginByAcc.vue'
import SignUp from '../pages/sign/SignUp.vue'
import ForgetPass from '../pages/sign/ForgetPass.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [{
    path: '/',
    component: Container,
    redirect: '/index',
    children: [{
        path: '/index',
        component: Index,
        name: 'index'
      },
      
      {
        path: '/hot',
        component: Hot,
        name: 'hot'
      },
      {
        path: '/mine',
        component: Mine,
        name: 'mine'
      }
    ]
  }, 
  {
    path: '/goodsdetail',
    component: GoodsDetail,
    name: 'goodsdetail'
  }, 
  {
    path: '/login',
    redirect: '/loginbyhu',
    component: Sign,
    children: [{
        path: '/loginbyhu',
        component: LoginByHu
      },
      {
        path: '/loginbyacc',
        component: LoginByAcc
      }
    ]
  }, 
  {
    path: '/signup',
    component: SignUp
  }, 
  {
    path: '/forgetpass',
    component: ForgetPass
  },
  {
    path: '/classify',
    component: Classify,
    name: 'classify'
  },
  {
    path: '/shopping',
    component: Shopping,
    name: 'shopping'
  }
  ]
})
