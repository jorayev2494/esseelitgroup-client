const routes = [
  {
    path: 'contests',
    name: 'student-contests',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'studentContext.contest.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'studentContext.contest.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'studentContext.contest.context_title',
          route: {
            name: 'student-contests',
          },
        },
      ],
    },
  },
  {
    path: 'contests/show/:uuid',
    name: 'student-contest-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'studentContext.contest.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'studentContext.contest.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'studentContext.contest.context_title',
          route: {
            name: 'student-contests',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
]

export default routes;
