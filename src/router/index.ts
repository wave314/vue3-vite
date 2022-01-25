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
        },
        {
          path: '/config',
          name: 'Config',
          component: () => import('../views/configs/Index.vue'),
          meta: {
            title: 'system.breadcrumb.config.title',
            auth: true
          },
          redirect: '/config/common',
          children: [
            {
              path: '/config/common',
              name: 'Common',
              component: () => import('../views/configs/common/List.vue'),
              meta: {
                title: 'system.breadcrumb.config.common',
                auth: true
              }
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  debugger
  next()
})
export default router
