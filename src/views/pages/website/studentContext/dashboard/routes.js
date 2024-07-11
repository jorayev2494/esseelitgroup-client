export default [
  {
    path: 'dashboard',
    name: 'student-dashboard',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'studentContext.dashboard.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'studentContext.dashboard.context_title',
        },
      ],
    },
  },
]
