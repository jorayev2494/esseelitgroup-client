<template>      
  <!-- Most trending course -->
  <section class="section trending-courses trending-courses-two trend-two">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Featured courses of the day</h2>
          <p class="sub-title">Featured courses of the day</p>
        </div>
      </div>

      <div class="popular-categories aos " data-aos="fade-up">
        <div class="row">
          <div
            v-for="(faculty, idx) in faculties" :key="idx"
            class="col-lg-3 col-md-6"
          >
            <router-link :to="$tMakeRoute({ name: 'faculty', params: { uuid: faculty.uuid } })">
              <div class="sub-categories-five">

                <div class="categories-five-img">
                  <span>
                    <img class="img-fluid rounded" :src="faculty.logo" :alt="faculty.logo" width="75">
                  </span>
                  <!-- <span class="cat-rat">{{ faculty.department_count }}</span> -->
                </div>

                <div class="categories-text">
                  <h4>{{ faculty.name?.value }}</h4>
                  <!-- <h5><span>{{ faculty.department_count }}</span> Departments Available</h5> -->
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- /Most trending course -->
</template>

<script setup>
  import { defineProps } from 'vue'
  import useIndex from './useIndex.js'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    }
  })

  const {
    faculties,
  } = useIndex({ props });
</script>
