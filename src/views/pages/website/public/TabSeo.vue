<template>
  <div class="row">
    <div class="col-md-12">
      <div class="trend-course-tab-slider owl-carousel">
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="item in IndexFourCourse" :key="item.id">
            <div class="course-box m-2">
              <div class="product">
                <div class="product-img">
                  <a href="javascript:void(0);">
                    <img
                      class="img-fluid"
                      alt=""
                      :src="require(`@/assets/img/course/${item.image}`)"
                      width="600"
                      height="300"
                    />
                  </a>
                  <span class="text-bottom">{{ item.price }}</span>
                </div>
                <div class="feature-texts bgs-blue">
                  <span>Featured</span>
                  <span
                    ><img src="@/assets/img/icon/feature-badge.svg" alt=""
                  /></span>
                </div>
                <div class="product-content">
                  <div class="course-info">
                    <div class="rating rating-star">
                      <span class="average-rating rate-point">{{
                        item.position
                      }}</span>
                    </div>
                  </div>
                  <h3 class="title">
                    <a href="javascript:void(0);">{{ item.title }}</a>
                  </h3>
                  <p>{{ item.text }}</p>
                  <ul>
                    <li>
                      <span class="icon"
                        ><img src="@/assets/img/icon/user-icon.svg" alt=""
                      /></span>
                      <div class="list-item">
                        <h5>
                          Students<span>{{ item.students }}</span>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <span class="icon"
                        ><img src="@/assets/img/icon/star-icon.svg" alt=""
                      /></span>
                      <div class="list-item">
                        <h5>
                          Ratings<span>{{ item.ratings }}</span>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <span class="icon"
                        ><img src="@/assets/img/icon/star-icon.svg" alt=""
                      /></span>
                      <div class="list-item">
                        <h5>
                          Lessons<span>{{ item.lesson }}</span>
                        </h5>
                      </div>
                    </li>
                  </ul>
                  <div class="rating rating-star rating-two align-items-center">
                    <div class="rating-img">
                      <img :src="require(`@/assets/img/user/${item.avatar}`)"
                      alt="" />
                    </div>
                    <h5>{{ item.name }}</h5>
                    <div class="course-btn">
                      <a href="javascript:void(0);">View Details</a>
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
import IndexFourCourse from "@/assets/json/website/indexfourcourse.json";

export default defineComponent({
  data() {
    return {
      IndexFourCourse: IndexFourCourse,
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
