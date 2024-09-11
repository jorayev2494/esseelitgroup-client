<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />

    <!-- <div class="content">
      <div class="container">
        <h1>Universities for Foreign Students</h1>
        <pre>{{ items }}</pre>
      </div>
    </div> -->

    <Info />

    <section class="featured-instructor feature-instructor-one">
      <div class="container">

        <div class="featured-instructor-head aos" data-aos="fade-up">
          <div class="row">
            <div class="col-md-12">

              <div class="row">
                <div v-for="(item, idx) in items" :key="idx" class="col-xl-2 col-lg-4 col-sm-6 mt-4">
                  <UniversityNew :university="item" :key="item.uuid" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <Mentor />

    <ApplySteps />

    <FullInfo />

    <QuestionAnswers />

    <layout-footer-four></layout-footer-four>
  </div>
</template>

<script setup>
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import LayoutFooterFour from "../../../../../../layouts/website/FooterFour.vue";
  import Info from './components/Info.vue';
  import FullInfo from './components/FullInfo.vue';
  import Mentor from './components/ImageBlock.vue';
  import ApplySteps from './components/ApplySteps.vue';
  import QuestionAnswers from "./components/QuestionAnswers.vue";
  // import University from "../index/University.vue";
  import UniversityNew from "../index/UniversityNew.vue";
  import { useBehavior } from './useBehavior';

  const {
    items,
  } = useBehavior();
</script>
