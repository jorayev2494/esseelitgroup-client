<template>
  <!-- Featured Instructor -->
  <section class="featured-instructor featured-instructor-three">
    <div class="container">
      <div class="popular-three-head">
        <div class="section-header h-three aos" data-aos="fade-up">
          <h2>Our Exclusive Mentors</h2>
          <div class="heading-bar">
            <span></span>
            <span></span>
          </div>
          <p class="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum
          </p>
        </div>
        <div class="view-all">
          <router-link to="/mentee/mentor-search"
            >View All Mentors<i class="fas fa-arrow-right"></i
          ></router-link>
        </div>
      </div>
      <div class="featured-instructor-head aos" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <div class="instructor-slider owl-carousel">
               <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexFourInstructor" :key="item.id">
              <div class="large-team m-2">
                <div class="student-img">
                  <router-link to="/mentee/mentor-profile"
                    ><img
                      :src="require(`@/assets/img/mendor/${item.image}`)"
                      alt=""
                  /></router-link>
                </div>
                <div class="team-content">
                  <h4>
                    <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                    <i class="fas fa-check-double"></i>
                  </h4>
                  <span class="star-rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    {{ item.rating }}
                  </span>
                  <div class="view-student-three">
                    <ul class="view-student-three-list justify-content-between">
                      <li>
                        <img
                          src="@/assets/img/icon/location-02.svg"
                          class="me-1"
                          alt=""
                        />{{ item.location }}
                      </li>
                      <li>{{ item.courses }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              </slide>
              <template #addons>
                <pagination />
              </template>
            </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Instructor -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFourInstructor from "@/assets/json/website/indexfourinstructor.json";

export default defineComponent({
  data() {
    return {
      IndexFourInstructor: IndexFourInstructor,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        575: {
          itemsToShow: 1,
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