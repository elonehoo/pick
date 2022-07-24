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
import chip from '~/pages/chip/chip.vue'
import collapse from '~/pages/collapse/collapse.vue'
import dialog from '~/pages/dialog/dialog.vue'
import divider from '~/pages/divider/divider.vue'
import image from '~/pages/image/image.vue'
import input from '~/pages/input/input.vue'
import inputNumber from '~/pages/input-number/input-number.vue'

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
    {
      path: '/chip',
      component: chip,
    },
    {
      path: '/collapse',
      component: collapse,
    },
    {
      path: '/dialog',
      component: dialog,
    },
    {
      path: '/divider',
      component: divider,
    },
    {
      path: '/image',
      component: image,
    },
    {
      path: '/input',
      component: input,
    },
    {
      path: '/inputNumber',
      component: inputNumber,
    },
    { path: '/:pathMatch(.*)*', component: All },
  ],
})

export default router
