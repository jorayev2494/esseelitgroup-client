import auth from '@/views/pages/website/studentContext/auth/routes.js'
import dashboard from '@/views/pages/website/studentContext/dashboard/routes.js'
import profile from '@/views/pages/website/studentContext/profile/routes.js'
import application from '@/views/pages/website/studentContext/application/routes.js'
import department from '@/views/pages/website/studentContext/department/routes.js'
import contest from '@/views/pages/website/studentContext/contest/routes.js'

const routes = [
  ...auth,
  {
    path: 'student',
    name: 'student',
    component: () => import('../views/layouts/website/studentContext/Index.vue'),
    children: [
      ...dashboard,
      ...profile,
      ...application,
      ...department,
      ...contest,
    ],
  },
]

export default routes;
