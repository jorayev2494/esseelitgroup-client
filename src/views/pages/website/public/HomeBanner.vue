<template>
  <!-- Home Banner -->
  <section class="home-slide home-slide-three d-flex align-items-center home-four">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex align-items-center">
          <div class="section-banner-three aos" data-aos="fade-up">
            <div class="hometwo-slide-text">
              <h1>{{ $t('pages.index.slider-title') }}</h1>
              <p>{{ $t('pages.index.slider-label') }}</p>
            </div>
            <!-- Search -->
            <div class="search-box">
              <form action="/mentee/mentor-search">
                <div class="form-group search-info location-search location-search-four">
                  <input type="text" class="form-control text-truncate key" placeholder=" Keyword / Course Name" />
                  <input type="text" class="form-control text-truncate city" placeholder=" City or Postalcode" />
                  <router-link to="/mentee/mentor-search" class="btn bg-search search-btn align-items-center d-flex justify-content-center">
                    Find Mentors
                  </router-link>
                </div>
              </form>
            </div>
            <!-- /Search -->
            <div class="poular-search">
              <p>
                <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
              </p>
            </div>
            <div class="banner-counter">
              <ul>
                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="256"
                      :duration="5" separator="" :autoinit="true" />+
                  </h5>

                  Courses Added
                </li>
                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="17"
                      :duration="5" separator="" :autoinit="true" />K
                  </h5>

                  Mentors
                </li>
                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="15"
                      :duration="5" separator="" :autoinit="true" />K
                  </h5>

                  Users Registered
                </li>
                <li>
                  <h5>
                    <vue3-autocounter class="counter" ref="counter" :startAmount="0" :delay="3" :endAmount="60"
                      :duration="5" separator="" :autoinit="true" />K
                  </h5>

                  Reviews From Users
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="object-slide-img aos" data-aos="fade-up">
            <img src="@/assets/img/object-4.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>