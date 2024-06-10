<template>
  <div class="main-wrapper main-wrapper-four">
    <layout-header-four />
    <HomeBannerFour />
    <TopUniversity />
    <!-- <PopularCourseFour /> -->
    <!-- <KnowledgeFour />4 -->
    <!-- <TrendingCourseFour /> -->
    <!-- <TestimonialFour /> -->
    <!-- <FeaturedInstructorFour /> -->
    <!-- <ManagerCarousel /> -->
    <!-- <FaqFour /> -->
    <!-- <BlogFour /> -->
    <!-- <NewCourseFour /> -->
    <layout-footer-four />
  </div>
</template>

<script setup>
  import LayoutHeaderFour from "../../../../layouts/website/HeaderFour.vue";
  import HomeBannerFour from "../HomeBanner";
  // import CategoriesFour from "../Categories";
  import TopUniversity from "./partials/topUniversity/Index.vue";
  // import PopularCourseFour from "../PopularCourse";
  // import KnowledgeFour from "../Knowledge";
  import TrendingCourseFour from "../TrendingCourse";
  import TestimonialFour from "../Testimonial";
  // import FeaturedInstructorFour from "../FeaturedInstructor";
  import FaqFour from "../Faq";
  import BlogFour from "../Blog";
  import LayoutFooterFour from "../../../../layouts/website/FooterFour.vue";

  import ManagerCarousel from '../manager/components/managerCarousel/Index.vue'
</script>
