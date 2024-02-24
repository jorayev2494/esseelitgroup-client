<template>
  <div class="main-wrapper main-wrapper-four">
    <layout-header-four />
    <HomeBannerFour />
    <CategoriesFour />
    <PopularCourseFour />
    <KnowledgeFour />
    <TrendingCourseFour />
    <TestimonialFour />
    <FeaturedInstructorFour />
    <FaqFour />
    <BlogFour />
    <NewCourseFour />
    <layout-footer-four />
  </div>
</template>

<script setup>
  import LayoutHeaderFour from "../../../../layouts/website/HeaderFour.vue";
  import HomeBannerFour from "../HomeBanner";
  // import CategoriesFour from "../Categories";
  import CategoriesFour from "../../index-8/Categories.vue";
  import PopularCourseFour from "../PopularCourse";
  import KnowledgeFour from "../Knowledge";
  import TrendingCourseFour from "../TrendingCourse";
  import TestimonialFour from "../Testimonial";
  import FeaturedInstructorFour from "../FeaturedInstructor";
  import FaqFour from "../Faq";
  import BlogFour from "../Blog";
  import LayoutFooterFour from "../../../../layouts/website/FooterFour.vue";
</script>
