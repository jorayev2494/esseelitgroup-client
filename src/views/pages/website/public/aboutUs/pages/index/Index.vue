<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />

    <!-- Featured Instructor -->
    <!-- <section class="featured-instructor feature-instructor-one"> -->
      <div class="container">

        <!-- Share Your Knowledge -->
        <section class="share-knowledge-three share-knowledge-five">
          <div class="container">
            <div class="row">

              <div class="col-lg-5 d-flex align-items-center ">
                <div class="knowledge-img-three aos " data-aos="fade-up">
                  <img :src="data?.cover?.url" class="img-fluid" alt="">
                </div>
              </div>

              <div class="col-lg-7 d-flex align-items mt-5">
                <div class="join-us-all aos " data-aos="fade-up">

                  <div class="section-header section-head-left aos " data-aos="fade-up">
                    <div class="section-head-five">
                      <h4>
                        <span></span>
                        {{ $t('aboutUs.context_title') }}
                      </h4>
                      <h2>{{ data?.title }}</h2>
                      <p v-html="$ckeditor.replaceStyles(data?.content ?? '')"></p>
                    </div>
                  </div>

                  <!-- <div class="join-two-face">
                    <ul>
                      <li><img src="@/assets/img/icon/tick-icon.svg" alt="">Outstanding Mentos</li>
                      <li><img src="@/assets/img/icon/tick-icon.svg" alt="">More than 200+ Locations</li>
                      <li><img src="@/assets/img/icon/tick-icon.svg" alt="">Specialised Courses</li>
                      <li><img src="@/assets/img/icon/tick-icon.svg" alt="">Market-leading research</li>
                    </ul>
                    <div class="explore-more ">
                      <a href="javascript:void(0);" class="btn bg-explore">Read More</a>
                    </div>
                  </div> -->

                </div>
              </div>

            </div>
          </div>
        </section>
        <!-- Share Your Knowledge -->
      </div>
    <!-- </section> -->
    <!-- /Featured Instructor -->

    <layout-footer-four />
  </div>
</template>

<script setup>
  import useBehavior from './useBehavior'
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import LayoutFooterFour from "../../../../../../layouts/website/FooterFour.vue";

  const {
    data,
  } = useBehavior()

</script>

<style scoped>
  ul > li {
    list-style: disc;
    list-style-type: circle;
  }

  ul li::marker {
    color: red;
  }
</style>
