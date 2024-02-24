<template>
  <!-- Most Popular Courses -->
  <section
    class="trending-courses trending-courses-two popular-course-two same-dots home-three-course"
  >
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Popular Courses Near You</h2>
          <p class="sub-title">
            Search and connect with the right Courses faster.
          </p>
        </div>
      </div>
      <div
        class="owl-carousel popular-course-slide-two owl-theme aos"
        data-aos="fade-up"
      >
                  <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexThreeCourse" :key="item.id">
        <div class="course-box course-box-three">
          <div class="product">
            <div class="product-img product-img-three">
              <a href="javascript:void(0);">
                <img
                  class="img-fluid"
                  alt=""
                   :src="require(`@/assets/img/blog/${item.image}`)"
                  width="600"
                  height="300"
                />
              </a>
            </div>
            <div class="fav-star">
              <span class="average-rating rate-point three-rate">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                {{ item.rating }}
              </span>
              <span class="favourite">
                <i class="fas fa-heart"></i>
              </span>
            </div>
            <div class="product-content">
              <div class="course-info d-flex align-items-center">
                <div class="user-student">
                  <span
                    ><img
                      src="@/assets/img/icon/location-02.svg"
                      alt=""
                    />{{ item.location }}</span
                  >
                </div>
                <div class="user-lesson">
                  <span
                    ><img
                      src="@/assets/img/icon/book-content-icon.svg"
                      alt=""
                    />{{ item.lesson }}</span
                  >
                </div>
              </div>
              <h3 class="title">
                <a href="javascript:void(0);"
                  >{{ item.title }}</a
                >
              </h3>
              <div class="rating rating-star rating-two align-items-center">
                <div class="course-price">
                  <h4>{{ item.price }}</h4>
                </div>
                <div class="rating-img price-img">
                  <img  :src="require(`@/assets/img/user/${item.avatar}`)" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
      </div>
      <div class="reg-log-btn d-flex">
        <a href="javascript:void(0);" class="view-course">View All Courses</a>
      </div>
    </div>
  </section>
  <!-- Most Popular Courses -->
</template>

<script>
import { defineComponent } from "vue";
import IndexThreeCourse from "@/assets/json/website/indexthreecourse.json";

export default defineComponent({
  data() {
    return {
      IndexThreeCourse: IndexThreeCourse,
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