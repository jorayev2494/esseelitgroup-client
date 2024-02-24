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
        </div>

        <!-- <div class="poular-search">
          <p>
            <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
          </p>
        </div> -->
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
