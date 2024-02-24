<template>
  <!-- Course Categories -->
  <section class="most-popular course-categories-three pb-0">
    <div class="container">
      <div class="section-header h-three aos" data-aos="fade-up">
        <h2>Course Categories</h2>
        <div class="heading-bar">
          <span></span>
          <span></span>
        </div>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
          accumsan bibendum
        </p>
      </div>
      <div class="popular-categories aos pt-3" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <div class="popular-cat-slider owl-carousel">
              <carousel :settings="settings" :breakpoints="breakpoints">

              <slide v-for="item in IndexFourCategory" :key="item.id">
                <a href="javascript:void(0);">
                  <div class="sub-categories bg-design align-items-center m-2">
                    <div class="categories-img d-flex justify-content-center align-items-center">
                      <img :src="require(`@/assets/img/course/${item.image}`)" class="img-fluid" alt="" />
                    </div>
                    <div class="categories-text">
                      <div class="cat-bottom-content">
                        <p class="course-count">{{ item.mentors }}</p>
                        <h4>{{ item.title }}</h4>
                      </div>
                      <div class="next-arrow">
                        <span><i class="fas fa-arrow-right"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
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
  <!-- /Course Categories -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFourCategory from "@/assets/json/website/indexfourcategory.json";

export default defineComponent({
  data() {
    return {
      IndexFourCategory: IndexFourCategory,
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