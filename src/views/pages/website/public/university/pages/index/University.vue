<template>
    <router-link to="/mentee/mentor-search">
      <div class="sub-categories-five">
        <div class="student-img">
          <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: university.uuid }, query: { university_uuid: university.uuid } })">
            <img :src="university.logo" :alt="university.logo" />
          </router-link>
        </div>

        <div class="categories-text mt-2">
          <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: university.uuid }, query: { university_uuid: university.uuid } })">
            <h4 class="m-0">{{ university.name }}</h4>
            <!-- <h4 class="m-0">{{ 'university.name awd awdwa dwa dwaaw dwa dwad wad a'.slice(0, 40) }}</h4> -->
          </router-link>
        </div>

        <div class="categories-btn">
          <router-link
            :to="$tMakeRoute({ name: 'university-show', params: { uuid: university.uuid }, query: { university_uuid: university.uuid } })"
            class="btn btn-rounded btn-primary col-md-12 mt-2"
          >
            {{ $t('system.apply_now') }}
          </router-link>
        </div>
      </div>
    </router-link>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    university: {
      type: Object,
      required: true,
    },
  })

</script>

<style scoped>
  .sub-categories-five {
    text-align: center;
    height: 370px;
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
    height: 15%;
    margin: 0 auto;
    /* border: 1px dashed red; */
  }
</style>
