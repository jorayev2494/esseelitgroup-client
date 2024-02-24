<template>
  <!-- Student say about -->
  <section class="student-say-about testimonial-section testi-mon-one">
    <div class="container">
      <div
        class="section-header section-head-one text-center aos"
        data-aos="fade-up"
      >
        <h2>Reviews From Our Users</h2>
        <div class="title-bar">
          <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
        </div>
        <p class="sub-title">
          They are highly aWe collect reviews from our users so you can get an
          honest opinion of what an experience with our website are really like!
          and trained in their areas
        </p>
      </div>
      <div
        class="col-lg-12 col-md-12 text-center d-flex justify-content-center"
      >
        <!-- <div id="myCarousel" class="carousel slide student-slide-testimoni aos " data-aos="fade-up" data-bs-interval="5000" data-bs-ride="carousel"> -->
        <div class="carousel-inner user-review-slide owl-carousel">
         <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexTwoAbout" :key="item.id">
          <div class="carousel-item testi-item say-us active">
            <div class="student-group" data-aos="fade-up">
              <div class="reviewer-detail">
                <div class="student-about-img">
                  <img :src="require(`@/assets/img/user/${item.image}`)" alt="" />
                </div>
                <div class="reviewer-name">
                  <h3>
                    <router-link to="/mentor/reviews">{{ item.name }}</router-link>
                  </h3>
                  <span>{{ item.position }}</span>
                </div>
              </div>
              <p class="say-text">
                {{ item.text }}
              </p>
              <div class="rating">
                <i class="fa fa-star filled"></i>
                <i class="fa fa-star filled"></i>
                <i class="fa fa-star filled"></i>
                <i class="fa fa-star filled"></i>
                <i class="fa fa-star filled"></i>
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
  </section>
  <!-- /Student say about -->
</template>
<script>
import { defineComponent } from "vue";
import IndexTwoAbout from "@/assets/json/website/indextwoabout.json";

export default defineComponent({
  data() {
    return {
      IndexTwoAbout: IndexTwoAbout,
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 991 and up
        991: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {},
});
</script>