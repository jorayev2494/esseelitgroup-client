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

  // setTimeout(
    next();
  // , 1000);

  // setTimeout(() => {
    store.commit('setIsLoadingPage', false);
  // }, 1000)
});

router.beforeEach(function(to, from, next) {
  // Middleware
  if (to.meta.hasOwnProperty('middleware')) {
    const accessToken = localStorage.getItem('access_token');

    // For Guest
    if (to.meta.middleware.includes('guest')) {
      if (accessToken) {
        next(Tr.i18nRoute({ name: 'company-dashboard' }));
      }
    }

    // For Authorization
    if (to.meta.middleware.includes('auth')) {
      if (accessToken) {
        next();
      } else {
        next(Tr.i18nRoute({ name: 'home' }));
      }
    }

    next();
  } else {
    // Non-protected route, allow access
    next();
  }
});

export {
  router
};
