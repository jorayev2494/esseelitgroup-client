<template>
       <div class="row align-items-center">
            <div class="col-md-12">
              <div
                class="trend-course-tab-slider most-trend-two owl-carousel"
                data-aos="fade-up"
              >
                <carousel :settings="settings" :breakpoints="breakpoints">
                  <slide v-for="item in CourseSelection" :key="item.id">
                    <div class="course-box">
                      <div class="product">
                        <div class="product-img trend-course">
                          <a href="javascript:void(0);">
                            <img
                              class="img-fluid"
                              alt=""
                              :src="
                                require(`@/assets/img/course/${item.avatar}`)
                              "
                              width="600"
                              height="300"
                            />
                          </a>
                        </div>
                        <div class="product-content">
                          <div
                            class="rating rating-star rating-two align-items-center"
                          >
                            <div class="rating-img">
                              <img
                                :src="
                                  require(`@/assets/img/user/${item.image}`)
                                "
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
                          <h3 class="title">
                            <a href="javascript:void(0);">{{ item.title }}s</a>
                          </h3>
                          <p>
                            {{ item.text }}
                          </p>
                          <div class="rating rate-star">
                            <span class="average-rating rate-point">
                              <i class="fas fa-star"></i>
                              {{ item.rating }}
                            </span>
                            <span
                              ><i class="fas fa-user"></i
                              >{{ item.students }}</span
                            >
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
import CourseSelection from "@/assets/json/website/courseselection.json";

export default defineComponent({
  data() {
    return {
      CourseSelection: CourseSelection,
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