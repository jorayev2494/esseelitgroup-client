<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />

    <section class="new-course subscribe-course">
      <div class="container">
        <div class="section-header section-head-left aos" data-aos="fade-up">
          <div class="section-head-five">
            <!-- <h4><span></span>Join With Us</h4> -->
            <h2>Join Our Courses & Get More Benefits</h2>
            <p>
              Do you want to move on next step? Choose your most popular leaning
              mentors, it will help you to achieve your professional goals.
            </p>
          </div>
        </div>
        <div class="new-course-five">
          <div class="row">

            <div
              class="col-lg-6 col-md-12 d-flex align-items-center mb-5"
              v-for="(item, idx) in items" :key="idx"
            >
              <div class="join-instructor w-100">
                
                <h4 class="w-75 float-start">{{ item.title }}</h4>

                <div class="join-btn w-25 p-0 float-end">
                  <a href="#" class="btn justify-content-center float-end" @click.prevent="download(item)">
                    <i class="fa-solid fa-cloud-download"></i>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <layout-footer-four />
  </div>
</template>

<script setup>
  import useBehavior from './useBehavior'
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import LayoutFooterFour from "../../../../../../layouts/website/FooterFour.vue";

  const {
    items,

    download,
  } = useBehavior()

</script>
