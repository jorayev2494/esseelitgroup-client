<template>
  <!-- Job Location -->
  <section class="job-location-sec location-sec-three">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Popular Locations</h2>
          <p class="sub-title">
            Search and connect with the right Courses faster.
          </p>
        </div>
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
                <navigation />
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