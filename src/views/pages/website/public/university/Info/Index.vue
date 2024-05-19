<template>
  <section class="want-mentor">
    <div class="container">
      <div class="row">

        <!-- <pre>university: {{ university }}</pre> -->

        <div class="col-lg-7">
          <div class="want-mentor-content">
            <div class="heder-eight aos" data-aos="fade-up">
              <!-- <div class="section-head-eight"> -->
                <!-- <h2>Want To Become <span>A Mentor?</span></h2> -->
                <div id="ck-content" class="ck-content">
                  <div v-html="$ckeditor.replaceStyles(university.description ?? '')"></div>
                </div>
                <!-- <div id="editor"></div> -->
                <!-- <div>{!! university.description !!}</div> -->
                <!-- <router-link to="/pages/login" class="join-now">Join Now</router-link> -->
              <!-- </div> -->
              <!-- <div class="bg-imgs">
                <img
                  src="@/assets/img/bg/index-six-bg-02.png"
                  class="blue-arrow"
                  alt=""
                />
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-lg-5" v-if="university.youtube_video_id">
          <!-- <div class="become-mentor-img"> -->
            <YoutubeVideo :youtube-video-id="university.youtube_video_id" />
          <!-- </div> -->
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
  import { defineProps, onMounted } from 'vue';
  import useIndex from './useIndex.js'
  import YoutubeVideo from '../../partials/youtubeFrame/Index.vue'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    }
  });

  const ulDiscsFromContent = (contentId) => {
    const uls = window.document.getElementById(contentId).getElementsByTagName('ul');

    for (const ul of uls) {
      const lis = ul.getElementsByTagName('li');

      for (const li of lis) {
        li.setAttribute('style', 'list-style: disc;')
      }
    }
  }

  onMounted(() => {
    ulDiscsFromContent('ck-content');
  })
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
