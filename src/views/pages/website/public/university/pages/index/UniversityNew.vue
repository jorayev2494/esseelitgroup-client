<template>
  <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: university.uuid }, query: { university_uuid: university.uuid } })">
    <div class="sub-categories-five sub-categories-eight h-100">
      <div class="categories-five-img">
        <span>
          <img :src="university.logo" :alt="university.logo" class="img-fluid rounded" width="95" height="auto" />
        </span>
      </div>
      <div class="categories-text">
        <h4>{{ university.name }}</h4>
        <h5>{{ university.label }}</h5>
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
