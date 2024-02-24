<template>
  <!-- Our Blog -->
  <section
    class="section our-blog trending-courses-three popular-course-three blog-four"
  >
    <div class="container">
      <div class="section-header h-three aos" data-aos="fade-up">
        <h2>From Our Blog</h2>
        <div class="heading-bar">
          <span></span>
          <span></span>
        </div>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <div class="row align-items-center">
        <div class="col-md-12">
          <div class="trend-course-tab-slider owl-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexFourBlog" :key="item.id">
                <div class="course-box m-2">
                  <div class="product">
                    <div class="product-img trend-course">
                      <router-link to="/mentor/blog-details">
                        <img
                          class="img-fluid"
                          alt=""
                          :src="require(`@/assets/img/blog/${item.image}`)"
                        />
                      </router-link>
                    </div>
                    <div class="feature-texts">
                      <span>{{ item.job }}</span>
                    </div>
                    <div class="product-content">
                      <ul class="date">
                        <li>
                          <span><i class="fe fe-user"></i></span>
                          {{ item.name }}
                        </li>
                        <li>
                          <span><i class="fas fa-calendar-alt"></i></span>
                          {{ item.date }}
                        </li>
                      </ul>
                      <h3 class="title">
                        <router-link to="/mentor/blog-details">{{
                          item.title
                        }}</router-link>
                      </h3>
                      <p>
                        {{ item.text }}
                      </p>
                      <div class="reads-more">
                        <router-link to="/mentor/blog-details"
                          >Read More <i class="fe fe-arrow-right"></i
                        ></router-link>
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
      </div>
    </div>
  </section>
  <!-- /Our Blog -->
</template>
<script>
import { defineComponent } from "vue";
import IndexFourBlog from "@/assets/json/website/indexfourblog.json";

export default defineComponent({
  data() {
    return {
      IndexFourBlog: IndexFourBlog,
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
