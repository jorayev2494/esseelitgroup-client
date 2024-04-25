import company from './company/index.js'
import auth from '@/views/pages/website/companyContext/auth/store/index.js'
import student from '@/views/pages/website/companyContext/student/store/index.js'
import profile from '@/views/pages/website/companyContext/profile/store/index.js'
import application from '@/views/pages/website/companyContext/application/store/index.js'
import language  from '@/views/pages/website/companyContext/language/store/index.js'
import employee  from '@/views/pages/website/companyContext/employee/store/index.js'
import department  from '@/views/pages/website/companyContext/department/store/index.js'

export default {
  namespaced: true,
  modules: {
    company,
    auth,
    student,
    profile,
    application,
    language,
    employee,
    department,
  },
}
