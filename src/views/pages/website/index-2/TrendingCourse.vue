<template>
  <!-- Most trending course -->
  <section class="section trending-courses">
    <div class="container">
      <div class="course-two-bg">
        <img
          src="@/assets/img/bg/home-two-bg-04.png"
          class="img-fluid trend-course-bgone"
          alt=""
        />
        <img
          src="@/assets/img/bg/home-two-bg-06.png"
          class="img-fluid trend-course-bgtwo"
          alt=""
        />
      </div>
      <div
        class="section-header section-head-one text-center aos"
        data-aos="fade-up"
      >
        <h2>Most Trending Courses</h2>
        <div class="title-bar">
          <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
        </div>
        <p class="sub-title">
          They are highly qualified and trained in their areas
        </p>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <div class="trend-course-tab-slider most-trend-two owl-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in TrendingCourseIndex" :key="item.id">
                <div class="course-box" data-aos="fade-up">
                  <div class="product">
                    <div class="product-img trend-course">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          :src="require(`@/assets/img/course/${item.avatar}`)"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="product-content">
                      <div class="rating rate-star">
                        <span class="average-rating rate-point">
                          <i class="fas fa-star"></i>
                          {{ item.rating }}
                        </span>
                        <span
                          ><img src="@/assets/img/icon/user-06.svg" alt="" />{{
                            item.students
                          }}
                        </span>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);">{{ item.title }}</a>
                      </h3>
                      <p>
                        {{ item.text }}
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="rating-img">
                          <img
                            :src="require(`@/assets/img/user/${item.image}`)"
                            alt=""
                          />
                        </div>
                        <h5>
                          <router-link to="/mentee/mentor-profile">{{
                            item.name
                          }}</router-link>
                        </h5>
                        <div class="course-btn">
                          <span>{{ item.price }}</span>
                        </div>
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
      </div>
    </div>
  </section>
  <!-- /Most trending course -->
</template>
<script>
import { defineComponent } from "vue";
import TrendingCourseIndex from "@/assets/json/website/trendingcourseindex.json";

export default defineComponent({
  data() {
    return {
      TrendingCourseIndex: TrendingCourseIndex,
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
