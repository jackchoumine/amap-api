import { createRouter, createWebHistory } from 'vue-router'
import InitMap from '../views/InitMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InitMap,
    },
    {
      path: '/layer',
      name: 'layer',
      component: () => import('../views/MapLayer.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/MapEvent.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
