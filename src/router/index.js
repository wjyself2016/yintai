import Vue from 'vue'
import Router from 'vue-router'

import Container from '../pages/Container.vue'
import Index from '../pages/index/Index.vue'
import Classify from '../pages/classify/Classify.vue'
import Hot from '../pages/hot/Hot.vue'
import Mine from '../pages/mine/Mine.vue'
import Shopping from '../pages/shopping/Shopping.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: Index,
          name:'index'
        },
        {
          path: '/classify',
          component: Classify,
          name: 'classify'
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
        },
        {
        	path: '/shopping',
        	component: Shopping,
        	name: 'shopping'
        }
      ]
    }
  ]
})
