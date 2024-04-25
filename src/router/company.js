import auth from '@/views/pages/website/companyContext/auth/routes.js'
import dashboard from '@/views/pages/website/companyContext/dashboard/routes.js'
import student from '@/views/pages/website/companyContext/student/routes.js'
import profile from '@/views/pages/website/companyContext/profile/routes.js'
import application from '@/views/pages/website/companyContext/application/routes.js'
import employee from '@/views/pages/website/companyContext/employee/routes.js'
import department from '@/views/pages/website/companyContext/department/routes.js'

const routes = [
  ...auth,
  {
    path: 'company',
    name: 'company',
    component: () => import('../views/layouts/website/companyContext/Index.vue'),
    children: [
      ...dashboard,
      ...student,
      ...profile,
      ...application,
      ...employee,
      ...department,
    ],
  },
]

export default routes;
