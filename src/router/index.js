import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/Counter.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
    },
    {
      path: '/pokemon-search',
      name: 'pokemon-search',
      component: () => import('../views/SearchPokemon.vue'),
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-id',
      component: () => import('../views/Pokemon.vue'),
    },
    {
      path: '/to-do',
      name: 'to-do',
      component: () => import('../views/TodoVuex.vue'),
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/CustomSlots.vue'),
    },
  ],
});

export default router;
