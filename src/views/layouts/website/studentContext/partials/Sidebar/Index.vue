<template>
  <div class="profile-sidebar">
    
    <div class="user-widget" v-if="studentInfo">
      <div class="avatar avatar-xxl" v-if="studentInfo.avatar">
        <img class="avatar-img rounded" :src="studentInfo.avatar" :alt="studentInfo.avatar">
      </div>

      <div class="user-info-cont mt-3">
          <!-- <h4 class="usr-name">{{ studentInfo.name }}</h4> -->
          <p class="mentor-type">{{ studentInfo.name }}</p>
      </div>
    </div>
    <!-- <div class="progress-bar-custom">
      <h6>Complete your profiles ></h6>
      <div class="pro-progress">
        <div class="tooltip-toggle" tabindex="0"></div>
        <div class="tooltip">80%</div>
      </div>
    </div> -->
    <div class="custom-sidebar-nav">
      <ul>

        <li v-for="(item, idx) of items" :key="idx">
          <router-link :to="$tMakeRoute({ name: item.route })" v-bind:class="{ 'active': currentPath === item.route }">
            <i class="fas" :class="item.icon"></i>
            {{ $t(`studentContext.${item.label}.context_title`) }}
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </router-link>
        </li>

        <!-- <li><router-link to="/mentor/my-bookings" v-bind:class="{'active': currentPath == 'mentor-bookings'}"><i class="fas fa-clock"></i>Bookings <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentor/schedule-timings" v-bind:class="{'active': currentPath == 'mentor-schedule-timings'}"><i class="fas fa-hourglass-start"></i>Schedule Timings <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentor/chat" v-bind:class="{'active': currentPath == 'mentor-chat'}"><i class="fas fa-comments" ></i>Messages <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentor/invoices" v-bind:class="{'active': currentPath == 'mentor-invocies'}"><i class="fas fa-file-invoice" ></i>Invoices <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentor/reviews" v-bind:class="{'active': currentPath == 'mentor-invoice-view'}"><i class="fas fa-eye"></i>Reviews <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentor/blog" v-bind:class="{'active': currentPath == 'mentor-blog' || currentPath == 'add-blog' || currentPath == 'edit-blog'}"><i class="fab fa-blogger-b"></i>Blog <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/mentee/mentor-profile" v-bind:class="{'active': currentPath == 'mentor-profile-settings'}"><i class="fas fa-user-cog"></i>Profile <span><i class="fas fa-chevron-right"></i></span></router-link></li>
        <li><router-link to="/pages/login"><i class="fas fa-sign-out-alt"></i>Logout <span><i class="fas fa-chevron-right"></i></span></router-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useUrlPattern } from '@/views/pages/utils/UrlPattern';

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const { image } = useUrlPattern()

    const studentInfo = ref(null)

    const items = [
      {
        icon: 'fa-home',
        label: 'dashboard',
        route: 'student-dashboard',
      },
      {
        icon: 'fa-book',
        label: 'department',
        route: 'student-departments',
      },
      // {
      //   icon: 'fa-users',
      //   label: 'student',
      //   route: 'company-students',
      // },
      {
        icon: 'fa-inbox',
        label: 'application',
        route: 'student-applications',
      },
      {
        icon: 'fa-user',
        label: 'contest',
        route: 'student-contests',
      },
    ]

    const currentPath = computed(() => route.name)

    watch(studentInfo.value, () => {
      studentInfo.value.avatar = image(studentInfo.value?.avatar)
    })

    onMounted(() => {
      studentInfo.value = store.getters['studentContext/auth/getAuthData']
      // studentInfo.value.avatar = image(studentInfo.value?.avatar)
    })
    
    return {
      studentInfo,
      items,

      currentPath,
    }
  }
}
</script>