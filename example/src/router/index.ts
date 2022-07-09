import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import All from '~/pages/all/all.vue'
import Avatar from '~/pages/avatar/avatar.vue'
import icon from '~/pages/icon/icon.vue'
import alert from '~/pages/alert/alert.vue'
import breadcrumb from '~/pages/breadcrumb/breadcrumb.vue'
import button from '~/pages/button/button.vue'
import card from '~/pages/card/card.vue'
import checkBox from '~/pages/checkBox/checkBox.vue'

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
    {
      path: '/icon',
      component: icon,
    },
    {
      path: '/alert',
      component: alert,
    },
    {
      path: '/breadcrumb',
      component: breadcrumb,
    },
    {
      path: '/button',
      component: button,
    },
    {
      path: '/card',
      component: card,
    },
    {
      path: '/checkBox',
      component: checkBox,
    },
    { path: '/:pathMatch(.*)*', component: All },
  ],
})

export default router
