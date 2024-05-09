const routes = [
  {
    path: 'departments/names',
    name: 'department-names',
    component: () => import('./pages/index/Index.vue'),
  },
  {
    path: 'departments/names/show/:uuid',
    name: 'department-name-show',
    component: () => import('./pages/show/Index.vue'),
  },
]

export default routes;
