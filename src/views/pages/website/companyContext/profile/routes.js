export default [
  {
    path: 'profile/edit',
    name: 'company-profile-edit',
    component: () => import('./pages/setting/Index.vue'),
    meta: {
      title: 'companyContext.profile.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'companyContext.dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  }
]
