export default [
  {
    path: 'profile/edit',
    name: 'student-profile-edit',
    component: () => import('./pages/setting/Index.vue'),
    meta: {
      title: 'studentContext.profile.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'studentContext.dashboard.context_title',
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
