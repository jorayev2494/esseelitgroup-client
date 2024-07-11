<template>
  <!-- <div class="large-team" data-aos="fade-up">
    <div class="team-name">
      <h4>
        <router-link :to="$tMakeRoute({ name: 'department-name-show', params: { uuid: departmentName.uuid } })">
          <center>
            {{ departmentName.value }}
          </center>
        </router-link>
      </h4>
    </div>

    <router-link
      :to="$tMakeRoute({ name: 'department-name-show', params: { uuid: departmentName.uuid }, hash: '#application-form' })"
      class="btn btn-rounded btn-primary col-md-12 mt-4"
    >
      {{ $t('system.apply_now') }}
    </router-link>
  </div> -->


  <!-- <div class="col-lg-3 col-md-6" v-for="(item, idx) in items" :key="idx"> -->
    <router-link to="/mentee/mentor-search">
      <div class="sub-categories-five">
        <!-- <div class="categories-five-img">
          <span><img src="@/assets/img/icon/course-cat-01.svg" alt=""></span>
          <span class="cat-rat">5.0</span>
        </div> -->
        <router-link :to="$tMakeRoute({ name: 'department-name-show', params: { uuid: departmentName.uuid } })">
          <div class="categories-text">
            <h4>{{ departmentName.value }}</h4>
            <!-- <h5><span>300+ </span> Courses Available</h5> -->
          </div>

          <router-link
            :to="$tMakeRoute({ name: 'department-name-show', params: { uuid: departmentName.uuid }, hash: '#application-form' })"
            class="btn btn-rounded btn-primary col-md-12 mt-2"
          >
            {{ $t('system.apply_now') }}
          </router-link>
        </router-link>
      </div>
    </router-link>
  <!-- </div> -->
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    departmentName: {
      type: Object,
      required: true,
    },
  })

</script>

<style scoped>
  .sub-categories-five {
    text-align: center;
    height: 200px;
  }

  .categories-text {
    height: 70%;
    margin: 0 auto;
    /* border: 1px dashed red; */
  }
</style>
