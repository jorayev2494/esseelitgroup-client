<template>
  <!-- Featured Instructor -->
  <section class="featured-instructor feature-instructor-one">
    <div class="container">
      <div class="course-two-bg">
        <img
          src="@/assets/img/bg/home-two-bg-09.png"
          class="img-fluid feature-bgone"
          alt=""
        />
        <img
          src="@/assets/img/bg/home-two-bg-10.png"
          class="img-fluid feature-bgtwo"
          alt=""
        />
      </div>
      <div
        class="section-header section-head-one text-center aos"
        data-aos="fade-up"
      >
        <h2>Meet Our Professional Mentor</h2>
        <div class="title-bar">
          <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
        </div>
        <p class="sub-title">
          They are highly qualified and trained in their areas
        </p>
      </div>
      <div class="featured-instructor-head aos" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <div class="instructor-slider owl-carousel">
              <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="item in FeaturedInstructor" :key="item.id">
                  <div class="large-team" data-aos="fade-up">
                    <div class="student-img">
                      <router-link to="/mentee/mentor-profile"
                        ><img
                          :src="require(`@/assets/img/user/${item.image}`)"
                          alt=""
                      /></router-link>
                    </div>
                    <div class="ins-content">
                      <div class="team-name">
                        <h4>
                          <router-link to="/mentee/mentor-profile">{{
                            item.name
                          }}</router-link>
                        </h4>
                        <span class="designation">{{ item.job }}</span>
                      </div>
                      <div class="rating rate-star">
                        <span class="average-rating rate-point">
                          <i class="fas fa-star"></i>
                          {{ item.rating }}
                        </span>
                        <span
                          ><img src="@/assets/img/icon/user-icon.svg" alt="" />
                          {{ item.students }}</span
                        >
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
  <!-- /Featured Instructor -->
</template>
<script>
import { defineComponent } from "vue";
import FeaturedInstructor from "@/assets/json/website/featuredinstructor.json";

export default defineComponent({
  data() {
    return {
      FeaturedInstructor: FeaturedInstructor,
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
