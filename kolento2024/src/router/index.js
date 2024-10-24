import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Prolist from '../views/prolist.vue'
import Detail from '../views/detail.vue'

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
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})

export default router
