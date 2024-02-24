<template>
  <!-- Most Trending  Courses -->
  <section
    class="section trending-courses trending-courses-three popular-course-three"
  >
    <div class="container">
      <div class="popular-three-head">
        <div class="section-header h-three aos" data-aos="fade-up">
          <h2>Our Popular Courses</h2>
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
          <a href="javascript:void(0);"
            >View All Courses<i class="fas fa-arrow-right"></i
          ></a>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-md-12">
          <div class="trend-course-tab-slider owl-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexFourTrending" :key="item.id">
                <div class="course-box m-2">
                  <div class="product">
                    <div class="product-img trend-course">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          :src="require(`@/assets/img/course/${item.image}`)"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="feature-texts">
                      <span>{{ item.content }}</span>
                      <span
                        ><img src="@/assets/img/icon/feature-badge.svg" alt=""
                      /></span>
                    </div>
                    <div class="product-content">
                      <div class="rating rate-star mb-3">
                        <span class="average-rating rate-point">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          {{ item.ratings }}
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
                            :src="require(`@/assets/img/user/${item.avatar}`)"
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
        <div class="trusted-by">
          <div class="row align-items-center">
            <div class="col-md-2">
              <div class="trust-list-title">
                <h5>Trusted by</h5>
              </div>
            </div>
            <div class="col-md-10">
              <ul class="trusted-list owl-carousel">
                <li>
                  <div class="trust-icon">
                    <img src="@/assets/img/icon/trust-icon-01.svg" alt="" />
                  </div>
                  <span>Angular Js</span>
                </li>
                <li>
                  <div class="trust-icon">
                    <img src="@/assets/img/icon/trust-icon-02.svg" alt="" />
                  </div>
                  <span>App Store</span>
                </li>
                <li>
                  <div class="trust-icon">
                    <img src="@/assets/img/icon/trust-icon-03.svg" alt="" />
                  </div>
                  <span>Podcast</span>
                </li>
                <li>
                  <div class="trust-icon">
                    <img src="@/assets/img/icon/trust-icon-04.svg" alt="" />
                  </div>
                  <span>Promit</span>
                </li>
                <li>
                  <div class="trust-icon">
                    <img src="@/assets/img/icon/trust-icon-05.svg" alt="" />
                  </div>
                  <span>Dribble</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Most Trending Courses -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFourTrending from "@/assets/json/website/indexfourtrending.json";

export default defineComponent({
  data() {
    return {
      IndexFourTrending: IndexFourTrending,
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
