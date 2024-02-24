<template>
  <!-- Review Section -->
  <section class="customer-review-sec">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center aos" data-aos="fade-up">
        <span>OUR RECENT</span>
        <h2>Review Of The Users</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <!-- /Section Header -->
      <div class="row">
        <div class="col-md-12">
          <div class="customer-slider owl-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in ReviewIndex" :key="item.id">
                <div class="review-card" data-aos="fade-up">
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p>
                    {{ item.text }}
                  </p>
                  <div class="customer">
                    <img
                      :src="require(`@/assets/img/user/${item.image}`)"
                      alt=""
                    />
                    <div class="cus-name">
                      <router-link to="/mentor/reviews">{{
                        item.name
                      }}</router-link>
                      <span>{{ item.job }}</span>
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
</template>

<script>
import { defineComponent } from "vue";
import ReviewIndex from "@/assets/json/website/reviewindex.json";

export default defineComponent({
  data() {
    return {
      ReviewIndex: ReviewIndex,
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
