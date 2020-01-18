import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllCard from '../views/AllCard.vue'
import Location from '../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/allCard',
    name: 'allCard',
    component: AllCard
  },
  {
    path: '/location',
    name: 'location',
    component: Location
  }
]

const router = new VueRouter({
  routes
})

export default router
