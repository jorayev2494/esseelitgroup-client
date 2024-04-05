import { createRouter, createWebHistory, RouterView } from 'vue-router';
import routes from './routes.js';
import Tr from '@/services/translations/translation.js';
import store from '@/services/store/index.js';

const router = createRouter({
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
});

router.beforeEach(function(to, from, next) {
  store.commit('setIsLoadingPage', true);

  setTimeout(next, 1000);

  setTimeout(() => {
    store.commit('setIsLoadingPage', false);
  }, 1000)
});

export {
  router
};
