import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout/index.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // scroll to id `#app` + 200px, and scroll smoothly (when supported by the browser)
    return {
      el: '#app',
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
