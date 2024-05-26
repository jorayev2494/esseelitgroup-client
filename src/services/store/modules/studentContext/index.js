// import company from './company/index.js'
import auth from '@/views/pages/website/studentContext/auth/store/index.js'
import student from '@/views/pages/website/studentContext/student/store/index.js'
import profile from '@/views/pages/website/studentContext/profile/store/index.js'
import application from '@/views/pages/website/studentContext/application/store/index.js'
import language  from '@/views/pages/website/studentContext/language/store/index.js'
import employee  from '@/views/pages/website/studentContext/employee/store/index.js'
import department  from '@/views/pages/website/studentContext/department/store/index.js'
import announcement  from '@/views/pages/website/studentContext/announcement/store/index.js'

export default {
  namespaced: true,
  modules: {
    // company,
    auth,
    student,
    profile,
    application,
    language,
    employee,
    department,
    announcement,
  },
}
