import { createI18n } from 'vue-i18n'
import en from './locales/en.js'

import dEn from '@/services/translations/locales/datetime/en'
import dRu from '@/services/translations/locales/datetime/ru'
import dTm from '@/services/translations/locales/datetime/tm'
import dTr from '@/services/translations/locales/datetime/tr'

// import { defaultLocale, localeOptions } from '../../constants/config';

// const currentLanguage = localStorage.getItem('currentLanguage');
// const locale = (currentLanguage && localeOptions.filter(x => x.id === currentLanguage).length > 0)  ? currentLanguage : defaultLocale;

const i18n = createI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  globalInjection: true,
  legacy: false,
  messages: {
    en,
  },
  datetimeFormats: {
    en: dEn,
    ru: dRu,
    tm: dTm,
    tr: dTr,
  },
});

export default i18n;
