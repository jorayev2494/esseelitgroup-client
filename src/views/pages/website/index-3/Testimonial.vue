<template>
  <!-- Say testimonial Two -->
  <section class="testimonial-two">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>See Some Words</h2>
          <p class="sub-title">
            Thousands of employee get their ideal jobs and feed back to us!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="testi-customer-slider owl-carousel">
                        <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexThreeTestimonial" :key="item.id">
            <div class="review-testi-box">
              <div class="testi-content">
                <p>
                  {{ item.text }}
                </p>
                <div class="polygon-arrow">
                  <img
                    src="@/assets/img/polygon.svg"
                    class="img-fluid w-auto"
                    alt=""
                  />
                </div>
              </div>
              <div class="news-user-name">
                <router-link to="/mentor/reviews"
                  ><img :src="require(`@/assets/img/user/${item.image}`)" alt=""
                /></router-link>
                <h5>
                  <router-link to="/mentor/reviews">{{ item.name }}</router-link>
                  <span>{{ item.location }}</span>
                </h5>
              </div>
            </div>
             </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Say testimonial Two -->
</template>
<script>
import { defineComponent } from "vue";
import IndexThreeTestimonial from "@/assets/json/website/indexthreetestimonial.json";

export default defineComponent({
  data() {
    return {
      IndexThreeTestimonial: IndexThreeTestimonial,
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