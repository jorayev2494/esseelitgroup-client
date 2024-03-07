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
                  <div v-html="replaceStyles(university.description)"></div>
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

<!-- <script>
        // ClassicEditor
        //     .create( document.querySelector( '#editor' ) )
        //     .catch( error => {
        //         console.error( error );
        //     } );

  var editor = CKEDITOR.replace('editor1', {
    fullPage: true,
    allowedContent: true
  });
  CKEDITOR.instances.editor1.setData(university.description);

</script> -->

<!-- <script>

  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    const node = window.document.getElementById('ck-content'); // .getElementsByTagName('ol');
    console.log('node: ', node)
    // node.setAttribute("class", "classname");
  });

</script> -->

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

  const styleReplaces = [
    {
      from: '<a href="',
      to: '<a class="link-success text-decoration-none" target="_blank" href="',
    },
  ]

  const replaceStyles = content => {
    styleReplaces.forEach(({ from, to }) => {
      content = content.replaceAll(from, to);
    });

    return content;
  }

  const ulDiscsFromContent = (contentId) => {
    const uls = window.document.getElementById(contentId).getElementsByTagName('ul');

    for (const ul of uls) {
      const lis = ul.getElementsByTagName('li');

      for (const li of lis) {
        li.setAttribute('style', 'list-style: disc;')
      }
    };
  }

  onMounted(() => {
    ulDiscsFromContent('ck-content');
  })

</script>

<style scoped>
  /* @import '../../../../../../assets/css/admin/ckeditor.css'; */
  /* @import '../../../../../../assets/css/admin/bootstrap.css'; */

  /* @import '@ckeditor/ckeditor5-list/theme/list.css'; */
  /* @import '@ckeditor/ckeditor5-list/theme/list.css'; */

  /* li */
  /* @import '@ckeditor/ckeditor5-list/theme/todolist.css'; */

  ul > li {
    list-style: disc;
    list-style-type: circle;
  }

  ul li::marker {
    color: red;
  }

</style>
