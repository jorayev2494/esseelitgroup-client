const routes = [
  {
    path: 'universities',
    name: 'universities',
    component: () => import('./pages/index/Index.vue'),
  },
  {
    path: 'universities/search',
    name: 'university-search',
    component: () => import('./pages/search/Index.vue'),
  },
  {
    path: 'universities/:uuid',
    name: 'university-show',
    component: () => import('./pages/show/Index.vue'),
  },
  {
    path: 'universities/foreign-students',
    name: 'universities-for-foreign-students',
    component: () => import('./pages/forForeignStudents/Index.vue'),
  },
];

export default routes;
