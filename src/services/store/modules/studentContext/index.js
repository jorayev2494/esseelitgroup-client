// import company from './company/index.js'
import auth from '@/views/pages/website/studentContext/auth/store/index.js'
import profile from '@/views/pages/website/studentContext/profile/store/index.js'
import application from '@/views/pages/website/studentContext/application/store/index.js'
import department  from '@/views/pages/website/studentContext/department/store/index.js'
import announcement  from '@/views/pages/website/studentContext/announcement/store/index.js'
import contest  from '@/views/pages/website/studentContext/contest/store/index.js'

export default {
  namespaced: true,
  modules: {
    // company,
    auth,
    profile,
    application,
    department,
    announcement,
    contest,
  },
}
