import Vue from 'vue'
import Router from 'vue-router'
import luck from '@/components/luck'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/luck',
      name: 'luck',
      component: luck
    }
  ]
})
