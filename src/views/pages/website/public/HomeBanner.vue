<template>
  <!-- Home Banner -->
  <section class="home-slide home-slide-three d-flex align-items-center home-four">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex align-items-center pe-0">
          <div class="section-banner-three aos" data-aos="fade-up">
            <div class="hometwo-slide-text">
              <h1>{{ $t('pages.index.header.slider_title') }}</h1>
              <p>{{ $t('pages.index.header.slider_label') }}</p>
            </div>
            
            <Search />

            <div class="banner-counter">
              <ul>

                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="256" :duration="5" separator="" :autoinit="true" />+
                  </h5>
                  Courses Added
                </li>

                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="17" :duration="5" separator="" :autoinit="true" />K
                  </h5>
                  Mentors
                </li>

                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="15" :duration="5" separator="" :autoinit="true" />K
                  </h5>
                  Users Registered
                </li>

                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="60" :duration="5" separator="" :autoinit="true" />K
                  </h5>
                  Reviews From Users
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5 ps-0 pe-0">
          <div class="object-slide-img aos" data-aos="fade-up">
            <img src="@/assets/img/object-4.png" class="img-fluid" alt="" />
            <!-- <img src="https://placehold.co/800x400/orange/white" class="img-fluid" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>

<script setup>
  import Search from './home/partials/search/Index.vue'
</script>
