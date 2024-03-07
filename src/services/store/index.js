import { createStore } from 'vuex'
// import { defaultLocale, localeOptions } from '@/configs/index.js';

import university from './modules/university';
import faculty from './modules/faculty';

export default createStore({
  // state: {
  //   langIcon: '',
  //   langLangauge: '',
  //   isActive: false,
  //   defaultLangLangauge: defaultLocale,
  //   defaultLangIcon: 'flag-icon-' + defaultLocale,
  // },
  // getters: {
  //   langIcon: (state) => { return state.langIcon },
  //   langLangauge: (state) => { return state.langLangauge },
  // },
  // mutations: {
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
  // },
  modules: {
    university,
    faculty,
  }
});