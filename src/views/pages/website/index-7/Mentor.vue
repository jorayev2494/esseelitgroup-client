<template>
  <!-- Popular Mendors -->
  <section class="section popular-mendors">
    <div class="mendor-title">
      <div class="section-header-eight text-center">
        <div class="container aos" data-aos="fade-up">
          <span>Mentoring Goals</span>
          <h2 class="text-white">Popular Mentors</h2>
          <p class="sub-title text-white">
            Choose your most popular leaning mentors, it will help you to
            achieve your professional goals..
          </p>
          <div class="sec-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mendor-list">
      <div class="container aos" data-aos="fade-up">
        <div class="mendor-slider slick">
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="item in IndexSevenMentor" :key="item.id">
              <!-- Mentor Item -->
              <div class="mendor-box">
                <div class="mendor-img">
                  <router-link to="/mentee/mentor-profile">
                    <img
                      class="img-fluid"
                      alt=""
                      :src="require(`@/assets/img/mendor/${item.image}`)"
                    />
                  </router-link>
                  <div class="mendor-country">
                    <i class="fas fa-map-marker-alt"></i> {{ item.location }}
                  </div>
                </div>
                <div class="mendor-content">
                  <h3 class="title">
                    <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                  </h3>
                  <div class="mendor-course">{{ item.job }}</div>
                  <div class="mendor-price-list">
                    <div class="mendor-price">
                      {{ item.price }} <span>/ hr</span>
                    </div>
                    <div class="mendor-rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Mentor Item -->
            </slide>
            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
        <div
          class="view-all text-center aos aos-init aos-animate"
          data-aos="fade-up"
        >
          <router-link to="/mentee/mentor-profile" class="btn btn-primary btn-view"
            >View All</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <!-- /Popular Mendors -->
</template>
<script>
import { defineComponent } from "vue";
import IndexSevenMentor from "@/assets/json/website/indexsevenmentor.json";

export default defineComponent({
  data() {
    return {
      IndexSevenMentor: IndexSevenMentor,
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
