import { createRouter, createWebHistory } from 'vue-router'
import TesView from '@/views/SnakeLadderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TesView,
    },
  ],
})

export default router
