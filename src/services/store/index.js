import { createStore } from 'vuex'
// import { defaultLocale, localeOptions } from '@/configs/index.js';

import university from './modules/university';
import faculty from './modules/faculty';
import department from './modules/department';
import country from './modules/country';
import city from './modules/city';
import degree from './modules/degree';

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
    department,
    country,
    city,
    degree,
  }
});