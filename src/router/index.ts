import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('wave'),
  routes: [
    {
      path: '/',
      component: () => import('../components/BaseLayout.vue'),
      redirect: 'index',
      meta: {
        breadcrumb: false,
        auth: true
      },
      children: [
        {
          path: 'index',
          name: 'Home',
          component: () => import('../views/home/Index.vue'),
          meta: {
            title: 'system.breadcrumb.home',
            auth: true
          }
        }
      ]
    }
  ]
})

export default router
