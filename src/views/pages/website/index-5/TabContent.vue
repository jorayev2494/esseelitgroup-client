<template>
  <div class="row align-items-center">
    <div class="col-md-12">
      <div class="trend-course-tab-slider owl-carousel">
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="item in IndexFiveCourse" :key="item.id">
            <div class="course-box course-box-five">
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
                <div class="product-content">
                  <div class="rating rate-star rating-star-five">
                    <div class="feature-texts">
                      <span>{{ item.job }}</span>
                    </div>
                    <span class="average-rating rate-point">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      {{ item.rating }} <b> {{ item.count }}</b>
                    </span>
                  </div>
                  <h3 class="title">
                    <a href="javascript:void(0);">{{ item.title }}</a>
                  </h3>
                  <div class="lesson-student-five">
                    <div class="student-five">
                      <span
                        ><img src="@/assets/img/icon/user-icon-05.svg" alt="" />
                        {{ item.students }}</span
                      >
                    </div>
                    <div class="lesson-five">
                      <span
                        ><img
                          src="@/assets/img/icon/book-content-icon.svg"
                          alt=""
                        />{{ item.lesson }}</span
                      >
                    </div>
                  </div>
                  <div
                    class="rating rating-star rating-two rating-five align-items-center"
                  >
                    <div class="rating-img">
                      <img
                        :src="require(`@/assets/img/user/${item.avatar}`)"
                        alt=""
                      />
                    </div>
                    <h5>
                      <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
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
</template>
<script>
import { defineComponent } from "vue";
import IndexFiveCourse from "@/assets/json/website/indexfivecourse.json";

export default defineComponent({
  data() {
    return {
      IndexFiveCourse: IndexFiveCourse,
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
