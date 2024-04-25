export default [
  {
    path: 'dashboard',
    name: 'company-dashboard',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'companyContext.dashboard.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'companyContext.dashboard.context_title',
        },
      ],
    },
  },
]
