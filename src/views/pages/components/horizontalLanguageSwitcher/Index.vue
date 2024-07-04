<template>
  <ul class="list-group list-group-horizontal justify-content-center align-items-center mt-1" style="position: relative;">
    <li class="list-item active pe-2" v-for="(itemLocale, idx) of Tr.supportedLocales" :key="idx" @click="switchLanguage(itemLocale)">
      <p v-if="locale === itemLocale">
        {{ $t(`navigation.supported_locales.${itemLocale}`) }}
      </p>
      <p class="cursor-pointer" v-else>
        <u>{{ $t(`navigation.supported_locales.${itemLocale}`) }}</u>
      </p>
    </li>
  </ul>
</template>

<script setup>
  import Tr from '@/services/translations/translation.js';
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const switchLanguage = async newLocale => {
    await Tr.switchLanguage(newLocale);

    try {
      await router.replace({ params: { locale: newLocale } })
    } catch (error) {
      router.push('/');
    }
  }
</script>
