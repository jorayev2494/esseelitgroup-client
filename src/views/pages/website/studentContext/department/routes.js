export default [
  {
    path: 'departments',
    name: 'student-departments',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'studentContext.department.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'studentContext.dashboard.context_title',
          route: {
            name: 'student-dashboard',
          },
        },
        {
          label: 'studentContext.department.context_title',
          route: {
            name: 'student-departments',
          },
        },
      ],
    },
  },
]
