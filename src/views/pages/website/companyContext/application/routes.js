export default [
  {
    path: 'applications',
    name: 'company-applications',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'companyContext.application.context_title',
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
          label: 'companyContext.application.context_title',
          route: {
            name: 'company-applications',
          },
        },
      ],
    },
  },

  {
    path: 'applications/create/:student_uuid',
    name: 'company-application-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'companyContext.application.context_title',
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
          label: 'companyContext.application.context_title',
          route: {
            name: 'company-applications',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },

  {
    path: 'applications/show/:uuid',
    name: 'company-application-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'companyContext.application.context_title',
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
          label: 'companyContext.application.context_title',
          route: {
            name: 'company-applications',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },

  {
    path: 'applications/edit/:uuid',
    name: 'company-application-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'companyContext.application.context_title',
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
          label: 'companyContext.application.context_title',
          route: {
            name: 'company-applications',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
