import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import All from '~/pages/all/all.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    { path: '/:pathMatch(.*)*', component: All },
  ],
})

export default router
