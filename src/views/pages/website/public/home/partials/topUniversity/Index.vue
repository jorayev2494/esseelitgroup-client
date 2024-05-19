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

          <div class="col-lg-3 col-md-4 col-sm-6"
            v-for="({ uuid, name, label, logo }, idx) of universities" :key="idx"
          >
            <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid } })">
              <div class="sub-categories bg-design d-flex align-items-center justify-content-center pb-4 pt-2">
                <div class="sub-categories-group">
                  <div class="categories-img">
                    <img :src="logo" :alt="logo" width="240" />
                  </div>
                  <div class="categories-text text-center">
                    <h4>{{ name }}</h4>
                    <!-- <p class="course-count">Over 200+ Courses</p> -->
                    <p class="course-count">{{ label }}</p>
                  </div>
                </div>
              </div>
            </router-link>
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

  const { universities } = useUniversity();
</script>