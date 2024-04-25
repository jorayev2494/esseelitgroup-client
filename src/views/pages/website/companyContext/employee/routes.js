export default [
  {
    path: 'employees',
    name: 'company-employees',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'companyContext.employee.context_title',
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
          label: 'companyContext.employee.context_title',
          route: {
            name: 'company-employees',
          },
        },
      ],
    },
  },

  // {
  //   path: 'employees/create',
  //   name: 'company-employee-create',
  //   component: () => import('./pages/create/Index.vue'),
  //   meta: {
  //     title: 'companyContext.employee.context_title',
  //     middleware: [
  //       'auth',
  //     ],
  //     breadcrumbs: [
  //       {
  //         label: 'companyContext.dashboard.context_title',
  //         route: {
  //           name: 'company-dashboard',
  //         },
  //       },
  //       {
  //         label: 'companyContext.employee.context_title',
  //         route: {
  //           name: 'company-employees',
  //         },
  //       },
  //       {
  //         label: 'system.create',
  //       },
  //     ],
  //   },
  // },

  {
    path: 'employees/show/:uuid',
    name: 'company-employee-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'companyContext.employee.context_title',
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
          label: 'companyContext.employee.context_title',
          route: {
            name: 'company-employees',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },

  {
    path: 'employees/edit/:uuid',
    name: 'company-employee-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'companyContext.employee.context_title',
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
          label: 'companyContext.employee.context_title',
          route: {
            name: 'company-employees',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
