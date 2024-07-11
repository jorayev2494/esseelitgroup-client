const routes = [
  {
    path: 'managers/show/:uuid',
    name: 'manager-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'manager.context_title',
    },
  },
]

export default routes;
