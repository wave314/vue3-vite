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
        },
        {
          path: '/reports',
          name: 'Reports',
          component: () => import('../views/reports/Index.vue'),
          meta: {
            title: 'system.breadcrumb.report.title',
            auth: true
          },
          redirect: '/report/reservation',
          children: [
            {
              path: '/report/reservation',
              name: 'Reservation',
              redirect: '/report/reservation/day',
              component: () => import('../views/reports/reservation/Index.vue'),
              meta: {
                title: 'system.breadcrumb.report.reservation.title',
                auth: true
              },
              children: [
                {
                  path: '/report/reservation/day',
                  name: 'ReservationDay',
                  component: () =>
                    import('../views/reports/reservation/day/List.vue'),
                  meta: {
                    title: 'system.breadcrumb.report.reservation.dayReport',
                    auth: true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router
