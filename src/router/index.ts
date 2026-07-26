import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('@/views/Works.vue'),
    },
    {
      path: '/works/:id',
      name: 'workDetail',
      component: () => import('@/views/WorkDetail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
