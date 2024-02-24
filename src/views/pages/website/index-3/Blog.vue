<template>
  <!-- Blog Two -->
  <div class="news-blog-three">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>News and Blog</h2>
          <p class="sub-title">Get the latest news, updates and tips</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="news-card-slider owl-carousel">
                        <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="item in IndexThreeBlog" :key="item.id">
            <div class="news-card">
              <div class="news-card-img">
                <router-link to="/mentor/blog-details"
                  ><img
                    :src="require(`@/assets/img/blog/${item.image}`)"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <div class="news-card-content">
                <div class="marketing-text">
                  <span>{{ item.position }}</span>
                </div>
                <h3>
                  <router-link to="/mentor/blog-details"
                    >{{ item.title }}</router-link
                  >
                </h3>
                <p>
                  {{ item.text }}
                </p>
                <div class="news-user-info">
                  <div class="news-user-name">
                    <router-link to="/mentee/mentor-profile"
                      ><img :src="require(`@/assets/img/user/${item.avatar}`)" alt=""
                    /></router-link>
                    <h5>
                      <router-link to="/mentee/mentor-profile">{{ item.name }}</router-link>
                      <span>{{ item.date }}</span>
                    </h5>
                  </div>
                  <div class="read-duration">
                    <span
                      ><img src="@/assets/img/icon/time-icon.svg" alt="" />
                      {{ item.time }}</span
                    >
                  </div>
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
      <div class="reg-log-btn d-flex">
        <router-link to="/blog/blog-list" class="view-course"
          >View All Blogs</router-link
        >
      </div>
    </div>
  </div>
  <!-- /Blog Two -->
</template>
<script>
import { defineComponent } from "vue";
import IndexThreeBlog from "@/assets/json/website/indexthreeblog.json";

export default defineComponent({
  data() {
    return {
      IndexThreeBlog: IndexThreeBlog,
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