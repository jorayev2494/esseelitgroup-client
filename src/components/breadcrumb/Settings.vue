<template>
  <div class="settings-menu-links">
    <ul class="nav nav-tabs menu-tabs">
      <li
        class="nav-item"
        :class="currentPath == 'settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/settings"
          >General Settings</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'localization-details' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/localization-details"
          >Localization</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'payment-settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/payment-settings"
          >Payment Settings</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'email-settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/email-settings"
          >Email Settings</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'social-settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/social-settings"
          >Social Media Login</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'social-links' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/social-links"
          >Social Links</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'seo-settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/seo-settings"
          >SEO Settings</router-link
        >
      </li>
      <li
        class="nav-item"
        :class="currentPath == 'others-settings' ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" to="/admin/others-settings"
          >Others</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
};
</script>
