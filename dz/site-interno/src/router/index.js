import VueRouter from 'vue-router'
import HomePageComp from '@/pages/HomePageComp.vue'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageComp
    },
    {
      path: '/project/:page?',
      name: 'project',
      component: () => import('@/pages/ProjectPage.vue')
    },
    {
      path: '/projectDetails',
      name: 'projectDetails',
      component: () => import('@/pages/ProjectDetails.vue')
    },
    {
      path: '/blogDetails',
      name: 'blogDetails',
      component: () => import('@/components/BlogDetails.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/pages/BlogPage.vue')
    },
    {
      path: '/blog/:postId',
      anme: 'blogPost',
      component: () => import('@/components/BlogComp.vue'),
      props: true
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/NotFound.vue')
    },
    {
      path: '*',
      redirect: '404'
    }
  ]
})

export default router
