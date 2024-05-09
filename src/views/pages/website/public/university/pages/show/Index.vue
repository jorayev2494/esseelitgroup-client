<template>
  <div class="main-wrapper main-wrapper-three" v-if="university">
    <layout-header-four />
    <HomeBanner :university="university" />
    <CategoriesThree />
    <!-- <WorkThree /> -->
    <Info :university="university" />
    <Form :university="university" />
    <!-- <div class="main-wrapper-five">
      <Faculty :university="university" />
    </div> -->
    <Faculty :university="university" />
    <!-- <MentorThree /> -->
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
  import useUniversityForm from '../../pages/show/useUniversityForm';
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import HomeBanner from '../../HomeBanner/Index.vue';
  import Form from '../../Form/Index.vue';
  import Info from '../../Info/Index.vue';
  import Faculty from '../../Faculty/Index.vue'

  const { university } = useUniversityForm();
</script>
