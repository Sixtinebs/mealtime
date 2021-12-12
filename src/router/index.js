import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Meal from '../views/Meal.vue';
import pageNoFound from '../views/404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Welcome from Meal Time'
    }
  },
  {
    path: '/international-cuisine',
    name: 'international cuisine',
    component: () => import('../views/InternationalCuisine.vue'),
    meta: {
      title: 'Choisissez votre région pour voyager à la maison'
    }
  },
  {
    path: '/meal/:id',
    name: 'meal',
    component: Meal,
    meta: {
      title: 'Good meal for to nigth !'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'pageNoFound',
    component: pageNoFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
