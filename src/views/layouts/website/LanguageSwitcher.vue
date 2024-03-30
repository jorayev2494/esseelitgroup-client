<template>
  <li class="has-submenu">
    <a href="#">{{ $t(`navigation.supported_locales.${locale}`) }}</a>
    <ul class="submenu">

      <li
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        @click="switchLanguage(sLocale)"
      >
        <a href="#">{{ $t(`navigation.supported_locales.${sLocale}`) }}</a>
      </li>

    </ul>
  </li>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import Tr from '@/services/translations/translation.js';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { t, locale } = useI18n();

  const supportedLocales = Tr.supportedLocales;

  const switchLanguage = async newLocale => {
    await Tr.switchLanguage(newLocale);

    try {
      await router.replace({ params: { locale: newLocale } })
    } catch (error) {
      console.log(e)
      router.push('/');
    }
  }

</script>

<style lang="scss" scoped>

</style>