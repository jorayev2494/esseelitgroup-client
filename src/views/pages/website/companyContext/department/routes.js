export default [
  {
    path: 'departments',
    name: 'company-departments',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'companyContext.department.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'companyContext.dashboard.context_title',
          route: {
            name: 'company-dashboard',
          },
        },
        {
          label: 'companyContext.department.context_title',
          route: {
            name: 'company-departments',
          },
        },
      ],
    },
  },
]
