<template>
  <section class="section popular-courses">
    <div class="container">
      <div class="section-header text-center aos" data-aos="fade-up">
        <span>Mentoring Goals</span>
        <h2>Popular Mentors</h2>
        <p class="sub-title">
          Do you want to move on next step? Choose your most popular leaning
          mentors, it will help you to achieve your professional goals.
        </p>
      </div>
      <div class="owl-carousel mentoring-course owl-theme">
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="item in mentors" :key="item.id">
            <div class="course-box aos" data-aos="fade-up">
              <div class="product">
                <div class="product-img">
                  <router-link to="/mentee/mentor-profile">
                    <img
                      class="img-fluid"
                      alt=""
                      :src="require(`@/assets/img/user/${item.image}`)"
                      width="600"
                      height="300"
                    />
                  </router-link>
                </div>
                <div class="product-content">
                  <h3 class="title">
                    <router-link to="/mentee/mentor-profile">{{
                      item.name
                    }}</router-link>
                  </h3>
                  <div class="author-info">
                    <div class="author-name">
                      {{ item.specialist }}
                    </div>
                  </div>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <span class="d-inline-block average-rating"> {{
                      item.rating
                    }}</span>
                  </div>
                  <div class="author-country">
                    <p class="mb-0">
                      <i class="fas fa-map-marker-alt"></i>{{ item.location }}
                    </p>
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
  </section>
</template>

<script>
import { defineComponent } from "vue";
import mentors from "@/assets/json/website/popularmentors.json";

export default defineComponent({
  data() {
    return {
      mentors: mentors,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        575: {
          itemsToShow: 2,
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

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
