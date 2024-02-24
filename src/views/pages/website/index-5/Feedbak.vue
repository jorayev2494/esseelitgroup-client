<template>
  <!-- Student Feedback -->
  <section class="student-feedback">
    <div class="container">
      <div class="bg-icons">
        <img src="@/assets/img/bg/home-five-bg-05.svg" alt="" />
        <img src="@/assets/img/bg/home-five-bg-06.svg" alt="" />
        <img src="@/assets/img/bg/home-five-bg-07.svg" alt="" />
      </div>
      <div class="section-header section-head-left aos" data-aos="fade-up">
        <div class="section-head-five">
          <h4><span></span>What our Students are saying About us?</h4>
          <h2>Testimonials & Reviews</h2>
        </div>
      </div>
      <div
        class="owl-carousel popular-course-slide-two owl-theme owl-loaded owl-drag aos"
        data-aos="fade-up"
      >
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="item in IndexFiveTestimonial" :key="item.id">
            <div class="student-profile-five">
              <div class="student-profile-text">
                <h3>{{ item.title }}</h3>
                <div class="quatation-para">
                  <span
                    ><img src="@/assets/img/icon/quatation-white.svg" alt=""
                  /></span>
                  <p>
                    {{ item.text }}
                  </p>
                </div>
                <div class="student-profile-viewfive">
                  <div class="student-name">
                    <div class="student-img">
                      <span
                        ><img
                          :src="require(`@/assets/img/user/${item.image}`)"
                          alt=""
                      /></span>
                    </div>
                    <div class="student-name-info">
                      <h3>
                        <router-link to="/mentor/reviews">{{
                          item.name
                        }}</router-link>
                      </h3>
                      <span> {{ item.job }}</span>
                    </div>
                  </div>
                  <div class="rating">
                    <i class="fa fa-star filled"></i>
                    <i class="fa fa-star filled"></i>
                    <i class="fa fa-star filled"></i>
                    <i class="fa fa-star filled"></i>
                    <i class="fa fa-star filled"></i>
                  </div>
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
  </section>
  <!-- /Student Feedback -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFiveTestimonial from "@/assets/json/website/indexfivetestimonial.json";

export default defineComponent({
  data() {
    return {
      IndexFiveTestimonial: IndexFiveTestimonial,
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
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 991 and up
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {},
});
</script>
