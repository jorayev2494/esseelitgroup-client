<template>
  <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: university.uuid }, query: { university_uuid: university.uuid } })">
    <div class="sub-categories bg-design d-flex align-items-center justify-content-center pb-4 pt-2">

      <div class="sub-categories-group">
        <div class="categories-img">
          <img class="img-fluid rounded" :src="university.logo" :alt="university.logo" width="210" height="auto" />
        </div>

        <div class="align-bottom row px-2">
          <div class="categories-text text-center">
            <h4>{{ university.name }}</h4>
            <p class="course-count">{{ university.label }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </router-link>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    },
  })

</script>

<style scoped>
  .sub-categories-five {
    text-align: center;
    height: 355px;
  }

  .student-img {
    height: 70%;
  }

  /* .categories-text {
    height: 10%;
    margin: 0 auto;
  } */

  .categories-text {
    /* height: 70%; */
    height: 17%;
    margin: 0 auto;
    /* border: 1px dashed red; */
  }
</style>
