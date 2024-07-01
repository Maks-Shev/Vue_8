import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import NotFound from '@/pages/NotFound.vue'
import CatalogPage from '@/pages/CatalogPage.vue'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/catalog/:page?',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '*',
      name: 404,
      component: NotFound
    }
  ]
})
// const isAuth = true
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   // if (isAuth && to.path === '/contact') next('/contact')
//   next()
// })
