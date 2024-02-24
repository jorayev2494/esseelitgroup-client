<template>
  <!-- Featured Instructor -->
  <section
    class="featured-instructor featured-instructor-three featured-instructor-three"
  >
    <div class="container">
      <div
        class="section-header section-head-left aos d-block"
        data-aos="fade-up"
      >
        <div class="section-head-five section-head-five-two">
          <div>
            <h4><span></span>Meet Our</h4>
            <h2>Highly Skilled Mentors</h2>
          </div>
          <div class="sec-para owl-custom-nav">
            <p>
              Do you want to move on next step? Choose your most popular leaning
              mentors, it will help you to achieve your professional goals.
            </p>
            <div class="owl-navigation">
              <div class="owl-nav mynav1 nav-control"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="featured-instructor-head aos" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <div class="instructor-slider-two owl-carousel">
              <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="item in IndexFiveInstructor" :key="item.id">
                  <div class="large-team">
                    <div class="student-img">
                      <router-link to="/mentee/mentor-profile"
                        ><img
                          :src="require(`@/assets/img/mendor/${item.image}`)"
                          alt=""
                      /></router-link>
                    </div>
                    <div class="team-content">
                      <h4>
                        <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                        <i class="fas fa-check-double"></i>
                      </h4>
                      <span class="star-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        {{ item.rating }}
                      </span>
                      <div class="view-student-three">
                        <ul
                          class="view-student-three-list justify-content-between"
                        >
                          <li>
                            <img
                              src="@/assets/img/icon/location-02.svg"
                              class="me-2"
                              alt=""
                            />{{ item.location }}
                          </li>
                          <li>{{ item.course }}</li>
                        </ul>
                      </div>
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
    </div>
  </section>
  <!-- Featured Instructor -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFiveInstructor from "@/assets/json/website/indexfiveinstructor.json";

export default defineComponent({
  data() {
    return {
      IndexFiveInstructor: IndexFiveInstructor,
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
