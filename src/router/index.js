import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pages from '../views/Pages.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
