import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Meal from '../views/Meal.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/international-cuisine',
    name: 'international cuisine',
    component: () => import('../views/InternationalCuisine.vue')
  },
  {
    path:'/meal/:id',
    name:'meal',
    component: Meal,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
