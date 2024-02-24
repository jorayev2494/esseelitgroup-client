<template>
  <!-- Most popular Categories -->
  <section class="most-popular most-popular-two">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Browse by category</h2>
          <p class="sub-title">
            Find the Categories that’s perfect for you. about 800+ new courses
            everyday
          </p>
        </div>
      </div>
      <div class="popular-categories aos" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="browse-cat-slider owl-carousel">
              <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="item in IndexThreeCategory" :key="item.id">
                  <router-link to="/mentee/mentor-search">
                    <div class="sub-categories align-items-center">
                      <div
                        class="categories-img d-flex justify-content-center align-items-center"
                      >
                        <img
                          :src="
                            require(`@/assets/img/categories/${item.image}`)
                          "
                          alt=""
                        />
                      </div>
                      <div class="categories-text">
                        <h4>{{ item.title }}</h4>
                        <h5>
                          <span>{{ item.number }}</span> {{ item.status }}
                        </h5>
                      </div>
                    </div>
                  </router-link>
                </slide>
                <template #addons>
                  <navigation />
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Most popular Categories -->
</template>
<script>
import { defineComponent } from "vue";
import IndexThreeCategory from "@/assets/json/website/indexthreecategory.json";

export default defineComponent({
  data() {
    return {
      IndexThreeCategory: IndexThreeCategory,
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
