import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import All from '~/pages/all/all.vue'
import Avatar from '~/pages/avatar/avatar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/row-col',
      component: Home,
    },
    {
      path: '/avatar',
      component: Avatar,
    },
    { path: '/:pathMatch(.*)*', component: All },
  ],
})

export default router