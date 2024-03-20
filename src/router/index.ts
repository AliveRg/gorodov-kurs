import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Userlk from '../views/LkUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/lk_user',
      name: 'lkuser',
      component: Userlk
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
