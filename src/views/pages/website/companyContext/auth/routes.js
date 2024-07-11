export default [
  {
    path: 'company/auth',
    // name: 'auth',
    children: [
      {
        path: 'login',
        name: 'company-login',
        component: () => import('./pages/login/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password/link',
        name: 'company-restore-password-link',
        component: () => import('./pages/restorePasswordLink/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password/:token',
        name: 'company-restore-password',
        component: () => import('./pages/restorePassword/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
    ],
  },
]