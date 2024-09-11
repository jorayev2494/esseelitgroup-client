<template>
  <!-- Course Categories four -->
  <section class="most-popular course-categories-four">
    <div class="container">
      <div class="side-four">
        <img src="@/assets/img/img-2.png" alt="" />
      </div>

      <div class="section-header h-four text-center aos" data-aos="fade-up">
        <!-- <span>{{ $t('pages.index.top_universities.top_universities') }}</span> -->
        <h2>{{ $t('pages.index.top_universities.top_university_categories') }}</h2>
        <p class="sub-title">{{ $t('pages.index.top_universities.top_university_text') }}</p>
      </div>

      <div class="popular-categories aos" data-aos="fade-up">
        <div class="row justify-content-center">

          <div class="col-xl-2 col-lg-4 col-sm-6 mt-4" v-for="(university, idx) of universities" :key="idx">
            <UniversityNew :university="university" :key="university.uuid" />
          </div>

        </div>
      </div>

      <div class="explore-more text-center aos" data-aos="fade-up">
        <router-link :to="$tMakeRoute({ name: 'university-search' })" class="btn bg-explore">{{ $t('system.all_universities') }}</router-link>
      </div>

    </div>
  </section>
  <!-- /Course Categories four -->
</template>

<script setup>
  import useUniversity from './useUniversity'
  // import University from './University.vue'
  import UniversityNew from './UniversityNew.vue'

  const { universities } = useUniversity();
</script>

<style scoped>
  /* .sub-categories-group {
    text-align: center;
    height: 200px;
  } */

  .block {
    height: 100%;
    border: 1px dashed red;
  }

  .block-img {
    height: 100%;
    margin: 0 auto;
    border: 1px dashed orange;
  }

  .block-text {
    height: 20%;
  }
</style>
