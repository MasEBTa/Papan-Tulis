import { createRouter, createWebHistory } from 'vue-router'
import CavasView from '../views/CanvasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cavas',
      component: CavasView,
    },
  ],
})

export default router
