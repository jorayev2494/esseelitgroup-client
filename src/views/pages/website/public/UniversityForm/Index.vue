<template>
  <div class="main-wrapper main-wrapper-three" v-if="university">
    <layout-header-four />
    <HomeBanner :university="university" />
    <CategoriesThree />
    <!-- <WorkThree /> -->
    <Form  :university="university" />
    <TrendingCourseThree />
    <MentorThree />
    <RatingThree />
    <PopularCourseThree />
    <TestimonialThree />
    <JobLocationThree />
    <NewCourseThree />
    <FaqThree />
    <BlogThree />
    <layout-footer-three />
  </div>
</template>

<script setup>
  import LayoutHeaderFour from "../../../../layouts/website/HeaderFour.vue";
  import HomeBanner from './HomeBanner/Index.vue';
  import Form from './Form/Index.vue';
  import useUniversityForm from './useUniversityForm';

  const { university } = useUniversityForm();
</script>
