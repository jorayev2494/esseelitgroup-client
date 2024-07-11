<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />

    <section class="join-mentor join-mentor-two" v-if="item">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-lg-12">
            <div class="head-join-us aos aos-init aos-animate" data-aos="fade-up">
              <div class="join-mentor-details">
                <!-- <div class="avatar avatar-xxl mb-4">
                  <img class="avatar-img rounded" alt="User Image" :src="item.logo.url">
                </div> -->
                <!-- <span class="sub">Variety of Courses</span> -->
                <h2>{{ item.value }}</h2>
                <div id="ck-content" class="ck-content">
                  <p v-html="$ckeditor.replaceStyles(item.description)"></p>
                </div>
              </div>
              <!-- <div class="reg-log-btn">
                <router-link to="/mentee/mentor-search" class="find-ment">Find Mentors</router-link>
                <a href="javascript:void(0);" class="view-course">View All Courses</a>
              </div> -->
            </div>
          </div>

        </div>

        <div class="course-counter">
          <div class="row justify-content-center">
            <Department />
            <!-- <pre>{{ departments }}</pre> -->
          </div>
        </div>

        <div class="course-counter">

          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-box text-center">
                <h5>
                  <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="25" :duration="5" separator="" :autoinit="true" />K</h5>

                <h4>Updated Courses</h4>
                <p>
                  We always provide people acomplete solution upon focused of any
                  business
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-box text-center">
                <h5><vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="200"
                    :duration="5" separator="" :autoinit="true" />K</h5>

                <h4>Featured Mentors</h4>
                <p>
                  We always provide people acomplete solution upon focused of any
                  business
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-box text-center">
                <h5><vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="600"
                    :duration="5" separator="" :autoinit="true" />K</h5>

                <h4>Skilled Users</h4>
                <p>
                  We always provide people acomplete solution upon focused of any
                  business
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-box text-center">
                <h5><vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="100"
                    :duration="5" separator="" :autoinit="true" />%</h5>

                <h4>Job Satisfaction</h4>
                <p>
                  We always provide people acomplete solution upon focused of any
                  business
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <layout-footer-four></layout-footer-four>
  </div>
</template>

<script setup>
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import Department from './components/departmentPaginate/Index.vue'
  import useBehavior from './useBehavior';
  import LayoutFooterFour from "../../../../../../layouts/website/FooterFour.vue";

  const {
    item,
    departments,
  } = useBehavior();

</script>
