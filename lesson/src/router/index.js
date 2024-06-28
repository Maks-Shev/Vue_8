import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/DashBoard'
import AboutContent from '@/pages/AboutContent'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/about*',
      name: 'About',
      component: AboutContent
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
