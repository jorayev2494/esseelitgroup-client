import { createStore } from 'vuex'
// import { defaultLocale, localeOptions } from '@/configs/index.js';

import companyContext from './modules/companyContext/index';
import studentContext from './modules/studentContext/index';

import university from '../../views/pages/website/public/university/store/index.js';
import department from '../../views/pages/website/public/department/store/index.js';
import departmentName from '../../views/pages/website/public/departmentName/store/index.js';
import faculty from './modules/faculty';
import facultyName from './modules/facultyName';
import country from './modules/country';
import city from './modules/city';
import degree from './modules/degree';
import language from './modules/language';
import alias from './modules/alias';
import staticPage from './modules/staticPage/index';
import document from '../../views/pages/website/public/document/store/index.js';
import auth from './modules/auth/index.js';

export default createStore({
  state: {
    appName: process.env.VUE_APP_NAME,
    loadingPageSpinner: 'loading-page-spinner6.gif',
    isLoadingPage: false,
  //   langIcon: '',
  //   langLangauge: '',
  //   isActive: false,
  //   defaultLangLangauge: defaultLocale,
  //   defaultLangIcon: 'flag-icon-' + defaultLocale,
  },
  getters: {
    getAppName: state => state.appName,
    getLoadingPageSpinner: state => state.loadingPageSpinner,
    getIsLoadingPage: state => state.isLoadingPage,
  //   langIcon: (state) => { return state.langIcon },
  //   langLangauge: (state) => { return state.langLangauge },
  },
  mutations: {
    setIsLoadingPage(state, value) {
      state.isLoadingPage = value;
    },
    toggleIsLoadingPage(state) {
      state.isLoadingPage = !state.isLoadingPage;
    },
  //   changeLang (state, payload) {
  //     localStorage.setItem('currentLanguage', state.langLangauge = payload.id || state.defaultLangLangauge);
  //     localStorage.setItem('currentLanguageIcon', state.langIcon = payload.icon || state.defaultLangIcon);
  //   },
  //   change(state) {
  //     state.isActive = !state.isActive
  //   }
  // },
  // actions: {
  //   setLang ({ commit }, payload) {
  //     commit('changeLang', payload);  
  //   }
  },
  modules: {
    companyContext,
    studentContext,

    auth,
    university,
    faculty,
    facultyName,
    department,
    departmentName,
    country,
    city,
    degree,
    language,
    alias,
    staticPage,
    document,
  }
});