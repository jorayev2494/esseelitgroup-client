<template>

  <div :class="{ 'modal-open': $store.getters['getIsLoadingPage'] }">
    <Transition>
      <router-view v-if="isLoadedPage" />
    </Transition>

    <Transition name="fade">
      <div
        v-if="$store.getters['getIsLoadingPage']"
        class="modal fade custom-modal show"
        id="edit_time_slot"
        aria-modal="true"
        role="dialog"
        style="display: block;"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-body">
            <center>
              <div class="section-header aos">
                <img :src="require(`@/assets/img/website/spinners/${$store.getters['getLoadingPageSpinner']}`)" width="175" class="img-fluid" alt="Loading spinner" />
                <!-- <p class="sub-title m-0">{{ $t('system.loading_page_text') }}</p> -->
              </div>
            </center>
          </div>
        </div>
      </div>
    </Transition>
  </div>

</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import store from '@/services/store/index.js';

  const isLoadedPage = ref(false);

  store.commit('setIsLoadingPage', true);

  onMounted(() => {
    setTimeout(() => {
      isLoadedPage.value = true;
      setTimeout(() => {
        store.commit('setIsLoadingPage', false)
      }, 1500);
    }, 1200)
  })
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
