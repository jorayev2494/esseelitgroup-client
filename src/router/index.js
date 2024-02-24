import { createRouter, createWebHistory, RouterView } from 'vue-router';
import routes from './routes.js';
import Tr from '@/services/translations/translation.js';

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: routes,
    },
  ],
  // routes,
});
