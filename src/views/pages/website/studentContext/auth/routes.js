export default [
  {
    path: 'student/auth',
    // name: 'auth',
    children: [
      {
        path: 'login',
        name: 'student-login',
        component: () => import('./pages/login/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password/link',
        name: 'student-restore-password-link',
        component: () => import('./pages/restorePasswordLink/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password/:token',
        name: 'student-restore-password',
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
