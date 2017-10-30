import Vue from 'vue'
import Router from 'vue-router'
import vm from '../main.js'

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

const router = new Router({
  linkActiveClass: 'active',
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
          meta: {
            requireAuth: true
          },
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
// //  判断是否需要登录权限 以及是否登录--路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
//     if (vm.$store.getters.isUserLogined) { // 判断是否登录
//       next()
//     } else { // 没登录则跳转到登录界面
//       next({
//         path: '/loginbyhu'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router