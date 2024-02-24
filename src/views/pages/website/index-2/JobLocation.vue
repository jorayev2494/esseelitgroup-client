<template>
  <!-- Job Location -->
  <section class="job-location-sec location-sec-two">
    <div class="container">
      <div class="course-two-bg">
        <img
          src="@/assets/img/bg/home-two-bg-11.png"
          class="img-fluid feature-bgthree"
          alt=""
        />
        <img
          src="@/assets/img/bg/home-two-bg-12.png"
          class="img-fluid feature-bgfour"
          alt=""
        />
      </div>
      <div
        class="section-header section-head-one text-center aos"
        data-aos="fade-up"
      >
        <h2>Popular Job Location</h2>
        <div class="title-bar">
          <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
        </div>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="job-area-slider owl-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in JobLocation" :key="item.id">
                <div class="job-area-card" data-aos="fade-up">
                  <div class="job-img">
                    <a href="javascript:void(0);"
                      ><img
                        :src="require(`@/assets/img/city/${item.image}`)"
                        alt=""
                    /></a>
                  </div>
                  <div class="job-place">
                    <h5>{{ item.place }}</h5>
                    <span
                      ><img
                        src="@/assets/img/icon/user-circle-03.svg"
                        alt=""
                      />{{ item.mentors }}</span
                    >
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
  <!-- /JOb Location -->
</template>
<script>
import { defineComponent } from "vue";
import JobLocation from "@/assets/json/website/joblocation.json";

export default defineComponent({
  data() {
    return {
      JobLocation: JobLocation,
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
