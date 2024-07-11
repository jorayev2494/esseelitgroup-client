const routes = [
  {
    path: 'departments',
    name: 'departments',
    component: () => import('./pages/index/Index.vue'),
  },
  {
    path: 'departments/show/:uuid',
    name: 'department-show',
    component: () => import('./pages/show/Index.vue'),
  },
]

export default routes;
