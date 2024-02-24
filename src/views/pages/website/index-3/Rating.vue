<template>
  <!-- Top Rating Instructor -->
  <section class="rating-instructor istructor-taring-three same-dots">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Top Mentors</h2>
          <p class="sub-title">
            Discover your next career move, freelance gig, or internship
          </p>
        </div>
      </div>
      <div
        class="owl-carousel mentoring-course rating-instructor-slide owl-theme aos"
        data-aos="fade-up"
      >
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="item in IndexThreeMentors" :key="item.id">
            <div class="mentor-top-one">
              <div class="mentor-slide-card">
                <div class="slide-mentor-info d-flex align-items-center">
                  <div class="slide-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        :src="require(`@/assets/img/mendor/${item.image}`)"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="slide-name">
                    <h4>
                      <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                    </h4>
                    <span class="average-rating rate-point three-rate">
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      {{ item.rating }}
                    </span>
                  </div>
                </div>
                <div class="slide-location">
                  <span
                    ><img src="@/assets/img/icon/location-02.svg" alt="" />{{
                      item.location
                    }}</span
                  >
                  <span>{{ item.courses }}</span>
                </div>
              </div>
              <div class="mentor-slide-card">
                <div class="slide-mentor-info d-flex align-items-center">
                  <div class="slide-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        :src="require(`@/assets/img/mendor/${item.image}`)"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="slide-name">
                    <h4>
                      <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                    </h4>
                    <span class="average-rating rate-point three-rate">
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                      {{ item.rating }}
                    </span>
                  </div>
                </div>
                <div class="slide-location">
                  <span
                    ><img src="@/assets/img/icon/location-02.svg" alt="" />{{
                      item.location
                    }}</span
                  >
                  <span>{{ item.courses }}</span>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </section>
  <!-- Top Rating Instructor -->
</template>
<script>
import { defineComponent } from "vue";
import IndexThreeMentors from "@/assets/json/website/indexthreementors.json";

export default defineComponent({
  data() {
    return {
      IndexThreeMentors: IndexThreeMentors,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        575: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 700px and up
        767: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 991 and up
        991: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {},
});
</script>
