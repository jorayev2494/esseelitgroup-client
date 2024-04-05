import { createStore } from 'vuex'
// import { defaultLocale, localeOptions } from '@/configs/index.js';

import university from './modules/university';
import faculty from './modules/faculty';
import facultyName from './modules/facultyName';
import department from './modules/department';
import departmentName from './modules/departmentName';
import country from './modules/country';
import city from './modules/city';
import degree from './modules/degree';
import language from './modules/language';
import alias from './modules/alias';

export default createStore({
  state: {
    loadingPageSpinner: 'loading-page-spinner6.gif',
    isLoadingPage: false,
  //   langIcon: '',
  //   langLangauge: '',
  //   isActive: false,
  //   defaultLangLangauge: defaultLocale,
  //   defaultLangIcon: 'flag-icon-' + defaultLocale,
  },
  getters: {
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
  }
});