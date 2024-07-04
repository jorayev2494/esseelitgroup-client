<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />

    <!-- Featured Instructor -->
    <section class="featured-instructor feature-instructor-one">
      <div class="container">
        <!-- <pre>{{ items }}</pre> -->

        <div class="course-two-bg">
          <img src="@/assets/img/bg/home-two-bg-09.png" class="img-fluid feature-bgone" alt="" />
          <img src="@/assets/img/bg/home-two-bg-10.png" class="img-fluid feature-bgtwo" alt="" />
        </div>

        <div class="section-header section-head-one text-center aos" data-aos="fade-up">
          <h2>{{ $t('pages.departments.title') }}</h2>
          <div class="title-bar">
            <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
          </div>
          <p class="sub-title">
            {{ $t('pages.departments.text') }}
          </p>
        </div>

        <div class="featured-instructor-head aos" data-aos="fade-up">
          <div class="row">
            <div class="col-md-12">

              <div class="row">
                <div v-for="(item, idx) in items" :key="idx" class="col-md-3 px-3">
                  <Department :department-name="item" :key="item.uuid" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- /Featured Instructor -->

    <layout-footer-four></layout-footer-four>
  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior.js";
  import Department from "./Department.vue"
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import LayoutFooterFour from "../../../../../../layouts/website/FooterFour.vue";

  const {
    items,
  } = useBehavior();

</script>