<template>
  <!-- <div class="col-md-3 px-3"> -->
    <div class="large-team" data-aos="fade-up">
      <!-- <div class="student-img">
        <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: department.uuid } })">
          <img :src="department.logo?.url" alt="University logo" />
        </router-link>
      </div> -->
      <!-- <div class="ins-content"> -->
        <div class="team-name">
          <pre>{{ department }}</pre>
          <h4>
            <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: department.uuid } })">
              {{ department.name?.value }}
            </router-link>
          </h4>
          <!-- <span class="designation">{{ department.job }}</span> -->
        </div>

        <router-link
          :to="$tMakeRoute({ name: 'university-show', params: { uuid: department.uuid }, hash: '#application-form' })"
          class="btn btn-rounded btn-primary col-md-12 mt-4"
        >
          {{ $t('system.apply_now') }}
        </router-link>

        <!-- <div class="rating rate-star">
          <span class="average-rating rate-point">
            <i class="fas fa-star"></i>
            {{ item.rating }}
          </span>
          <span>
            <img src="@/assets/img/icon/user-icon.svg" alt="" />
            {{ item.students }}
          </span>
        </div> -->
      <!-- </div> -->
    </div>
  <!-- </div> -->
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    department: {
      type: Object,
      required: true,
    },
  })

</script>
