<template>
  <!-- Home Banner -->
  <section class="section section-search home-slider-two index-three" v-if="university" :style="`background-image: url(${university.cover})`">
    <div class="container">
      <div class="banner-wrapper m-auto text-center aos" data-aos="fade-up">
        <!-- Logo -->
        <div class="search-box">
          <div class="categories-img">
            <img :src="university.logo" :alt="university.logo" width="240" />
          </div>
        </div>
        <!-- End Logo -->

        <div class="banner-header">
          <h1>{{ university.name }}</h1>
          <p>{{ university.label }}</p>
          <p v-if="university.country">{{ university.country.value }}</p>
          <p v-if="university.city">{{ university.city.value }}</p>
        </div>

        <div class="poular-search">
          <!-- <p>
            <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
          </p> -->
          <a href="#application-form" class="btn btn-primary btn-lg">
            {{ $t('system.apply_now') }}
            <i class="fas fa-hand-point-down icon-apply-now"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>

<script setup>
  import { toRefs } from 'vue';
  import useIndex from './useIndex.js'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    }
  });

  console.log('adawd: ', props)

  const { university } = toRefs(props);

  const { form } = useIndex({ props })

</script>

<style scoped>
.icon-apply-now {
  margin-left: 6px;
}
</style>
