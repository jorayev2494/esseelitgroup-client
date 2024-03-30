import i18n from './index';
import { nextTick } from 'vue';

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_DEFAULT_LOCALE;
  },
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },
  getUserLocale() {
    // const locale = window.navigator.language ||
    //   window.navigator.userLanguage ||
    //   Trans.defaultLocale;

    const locale = i18n.global.locale.value; // localStorage.getItem('user-locale');

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },
  get currentLocale() {
    return i18n.global.locale.value;
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem('user-locale');

    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },
  get supportedLocales() {
    return process.env.VUE_APP_SUPPORTED_LOCALES.split(',');
  },
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector('html').setAttribute('lang', newLocale);
    localStorage.setItem('user-locale', newLocale);
  },

  async loadLocaleMessages(locale) {
    if (! i18n.global.availableLocales.includes(locale)) {
      // const messages = await import(`@/services/translations/locales/${locale}.json`);
      const messages = await import(`@/services/translations/locales/${locale}.js`);
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick();
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale();

    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
  
    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }
    
    return Trans.defaultLocale;
  },
  async routeMiddleware(to, _from, next) {
    console.log('To: ', to, 'from: ', _from, 'next: ', next);

    const paramLocale = to.params.locale;

    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale());
    }

    await Trans.switchLanguage(paramLocale);

    return next();
  },
  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  },
  route(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  },
}

export default Trans;
