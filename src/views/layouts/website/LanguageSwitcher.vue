<template>
  <li class="has-submenu">
    <a href="#">
      <i :class="`fi fi-${getLocaleFlag(locale)} me-1`" width="300"></i>
      {{ $t(`navigation.supported_locales.${locale}`) }}
    </a>
    <ul class="submenu">

      <li
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        @click="switchLanguage(sLocale)"
      >
        <a href="#">
          <i :class="`fi fi-${getLocaleFlag(sLocale)} me-1`" width="300"></i>
          {{ $t(`navigation.supported_locales.${sLocale}`) }}
        </a>
      </li>

    </ul>
  </li>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import Tr from '@/services/translations/translation.js';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { locale } = useI18n();

  const supportedLocales = Tr.supportedLocales;

  const switchLanguage = async newLocale => {
    await Tr.switchLanguage(newLocale);

    try {
      await router.replace({ params: { locale: newLocale } })
    } catch (error) {
      router.push('/');
    }

    window.location.reload();
  }

  const getLocaleFlag = flag => {
    const flags = {
      en: 'us',
      ru: 'ru',
      tm: 'tm',
      tr: 'tr',
    }

    return flags[flag] ?? flag
  }

</script>

<style lang="scss" scoped>

</style>