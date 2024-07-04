<template>
  <!-- Our Blog -->
  <section
    class="section our-blog trending-courses-three popular-course-three blog-four"
  >
    <div class="container">
      <div class="section-header h-three aos" data-aos="fade-up">
        <h2>{{ $t('pages.index.youTube.block.title') }}</h2>
        <div class="heading-bar">
          <span></span>
          <span></span>
        </div>
        <p class="sub-title">
          {{ $t('pages.index.youTube.block.text') }}
        </p>
      </div>

      <div class="row align-items-center">
        <div class="col-md-12">
          <div class="trend-course-tab-slider owl-carousel">

            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="(item, idx) in youTubeListVideos" :key="idx">
                
                <div class="course-box m-2">
                  <div class="product">
                    <div class="product-img trend-course">
                      <YoutubeVideo :youtube-video-id="item.video_id" />
                    </div>
                    <!-- <div class="feature-texts">
                      <span class="text-danger">  
                        <i class="fab fa-youtube"></i>
                        YouTube
                      </span>
                    </div> -->
                    <div class="product-content">
                      <ul class="date">
                        <li>
                          <span>
                            <i class="fas fa-calendar-alt"></i>
                          </span>
                          {{ item.published_at }}
                        </li>
                        <li>
                          <span class="text-danger">  
                            <i class="fab fa-youtube"></i>
                            YouTube
                          </span>
                        </li>
                      </ul>
                      <h3 class="title">
                        <router-link to="/mentor/blog-details">
                          {{ item.title }}
                        </router-link>
                      </h3>
                      <p>
                        {{ item.description }}
                      </p>
                      <!-- <div class="reads-more">
                        <router-link to="/mentor/blog-details">
                          Read More
                          <i class="fe fe-arrow-right"></i>
                        </router-link>
                      </div> -->
                    </div>
                  </div>
                </div>
              </slide>
              <!-- <template #addons>
                <pagination />
              </template> -->
            </carousel>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Our Blog -->
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { useString, useDate } from "../../utils/helpers";
  import YoutubeVideo from './partials/youtubeFrame/Index.vue'

  const store = useStore();
  const { strCropper } = useString();
  const { dateInDdMmYyyy } = useDate();

  const youTubeListVideos = ref([]);

  const settings = {
    itemsToShow: 1,
    snapAlign: "center",
  };

  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  const breakpoints = {
    575: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // 700px and up
    767: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // 991 and up
    991: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: "start",
    },
  }

  const youTubeVideoMapper = video => {
    video.title = strCropper(video.title, 60);
    video.description = strCropper(video.description, 75);
    video.published_at = dateInDdMmYyyy(new Date(video.published_at));

    return video;
  }

  const loadYouTubeListVideos = () => {
    store.dispatch('youTube/loadYouTubeListVideosAsync')
      .then(response => {
        youTubeListVideos.value = response.data.map(youTubeVideoMapper)
      })
  }

  onMounted(loadYouTubeListVideos)

</script>
