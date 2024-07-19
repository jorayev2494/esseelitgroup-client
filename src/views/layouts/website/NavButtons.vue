<template>
  <template v-if="isMobileMode">
    <template v-if="! $store.getters['auth/getWhoIsAuthenticated'](['student', 'company'])">
      <ul class="nav header-navbar-rht mt-3">
        <li class="nav-item">
          <router-link class="nav-link header-login-two" :to="$tMakeRoute({ name: 'company-login' })">
            {{ $t('navigation.buttons.company') }}
            <i class="fas fa-building ms-2"></i>
          </router-link>
        </li>
      </ul>

      <ul class="nav header-navbar-rht ms-2 mt-3">
        <li class="nav-item">
          <router-link class="nav-link header-login" :to="$tMakeRoute({ name: 'student-login' })">
            {{ $t('navigation.buttons.student') }}
            <i class="fas fa-graduation-cap ms-2"></i>
          </router-link>
        </li>
      </ul>
    </template>

    <template v-else>
      <ul class="nav header-navbar-rht mt-3">
        <li class="nav-item">
          <router-link class="nav-link header-login" :to="$tMakeRoute({ name: `${$store.getters['auth/getWhoAuthenticated']}-dashboard` })">
            {{ $t('navigation.buttons.go_to_panel') }}
            <i class="fas fa-user ms-2"></i>
          </router-link>
        </li>
      </ul>
    </template>
  </template>
  <template v-else>
    <template v-if="! $store.getters['auth/getWhoIsAuthenticated'](['student', 'company'])">
      <li class="nav-item">
        <router-link class="nav-link header-login-two" :to="$tMakeRoute({ name: 'company-login' })">
          {{ $t('navigation.buttons.company') }}
          <i class="fas fa-building me-2"></i>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link header-login" :to="$tMakeRoute({ name: 'student-login' })">
          {{ $t('navigation.buttons.student') }}
          <i class="fas fa-graduation-cap me-1"></i>
        </router-link>
      </li>
    </template>

    <template v-else>
      <li class="nav-item">
        <router-link class="nav-link header-login" :to="$tMakeRoute({ name: `${$store.getters['auth/getWhoAuthenticated']}-dashboard` })">
          {{ $t('navigation.buttons.go_to_panel') }}
          <i class="fas fa-user me-2"></i>
        </router-link>
      </li>
    </template>
  </template>
</template>

<script setup>
  import { computed, onMounted, onUnmounted, ref } from "vue";

  const mobileModeWidth = 991;
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const width = computed(() => windowWidth.value)
  const isMobileMode = computed(() => width.value >= mobileModeWidth)
</script>
