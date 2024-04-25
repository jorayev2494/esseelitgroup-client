export default [
  {
    path: 'students',
    name: 'company-students',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'companyContext.student.context_title',
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
          label: 'companyContext.student.context_title',
          route: {
            name: 'company-students',
          },
        },
      ],
    },
  },
  {
    path: 'students/create',
    name: 'company-student-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'companyContext.student.context_title',
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
          label: 'companyContext.student.context_title',
          route: {
            name: 'company-students',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'students/show/:uuid',
    name: 'company-student-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'companyContext.student.context_title',
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
          label: 'companyContext.student.context_title',
          route: {
            name: 'company-students',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'students/edit/:uuid',
    name: 'company-student-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'companyContext.student.context_title',
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
          label: 'companyContext.student.context_title',
          route: {
            name: 'company-students',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
