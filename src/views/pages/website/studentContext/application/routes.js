export default [
  {
    path: 'applications',
    name: 'student-applications',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'studentContext.application.context_title',
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
          label: 'studentContext.application.context_title',
          route: {
            name: 'student-applications',
          },
        },
      ],
    },
  },

  {
    path: 'applications/create/:student_uuid',
    name: 'student-application-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'studentContext.application.context_title',
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
          label: 'studentContext.application.context_title',
          route: {
            name: 'student-applications',
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
    name: 'student-application-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'studentContext.application.context_title',
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
          label: 'studentContext.application.context_title',
          route: {
            name: 'student-applications',
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
    name: 'student-application-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'studentContext.application.context_title',
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
          label: 'studentContext.application.context_title',
          route: {
            name: 'student-applications',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
