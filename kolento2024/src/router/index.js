import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Prolist from '../views/prolist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prolist',
      name: 'prolist',
      component: Prolist
    },
  ]
})

export default router
