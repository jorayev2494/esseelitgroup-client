import auth from '@/views/pages/website/studentContext/auth/routes.js'
import dashboard from '@/views/pages/website/studentContext/dashboard/routes.js'
import student from '@/views/pages/website/studentContext/student/routes.js'
import profile from '@/views/pages/website/studentContext/profile/routes.js'
import application from '@/views/pages/website/studentContext/application/routes.js'
import employee from '@/views/pages/website/studentContext/employee/routes.js'
import department from '@/views/pages/website/studentContext/department/routes.js'

const routes = [
  ...auth,
  {
    path: 'student',
    name: 'student',
    component: () => import('../views/layouts/website/studentContext/Index.vue'),
    children: [
      ...dashboard,
      // ...student,
      ...profile,
      ...application,
      // ...employee,
      ...department,
    ],
  },
]

export default routes;
