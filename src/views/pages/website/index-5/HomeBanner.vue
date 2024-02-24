<template>
  <!-- Home Banner -->
  <section
    class="home-slide home-slide-five six-slide-search d-flex align-items-center"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 d-flex align-items-center">
          <div class="home-slide-face aos" data-aos="fade-up">
            <div class="home-slide-text">
              <h4><span></span> Categories</h4>
              <h1>Find the Perfect Mentors Near Your Location</h1>
              <p>Own your future learning new skills online</p>
            </div>
            <div class="banner-five-btns">
              <router-link to="/pages/login">Get Started</router-link>
              <a href="javascript:void(0);"
                ><span><i class="fas fa-play"></i></span> Demo Class</a
              >
            </div>
            <!-- Search -->
            <div class="search-box">
              <form action="/mentee/mentor-search">
                <div class="form-group search-info location-search">
                  <input
                    type="text"
                    class="form-control text-truncate"
                    placeholder="Search School, Online educational centers, etc"
                  />
                  <router-link
                    to="/mentee/mentor-search"
                    class="btn bg-search search-btn align-items-center d-flex justify-content-center"
                    ><img src="@/assets/img/icon/search-white-icon.svg" alt=""
                  /></router-link>
                </div>
              </form>
            </div>
            <!-- /Search -->
            <div class="pop-search">
              <p>
                <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-flex align-items-end">
          <div class="girl-slide-img aos" data-aos="fade-up">
            <img src="@/assets/img/object-6.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="banner-six-counter">
            <div class="counter-box">
              <h5>
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="256"
                  :duration="5"
                  separator=""
                  :autoinit="true"
                />+
              </h5>

              <h4>Courses Added</h4>
            </div>
            <div class="counter-box">
              <h5>
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="17"
                  :duration="5"
                  separator=""
                  :autoinit="true"
                />k+
              </h5>

              <h4>Mentors</h4>
            </div>
            <div class="counter-box">
              <h5>
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="15"
                  :duration="5"
                  separator=""
                  :autoinit="true"
                />k+
              </h5>

              <h4>Users Registered</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->

  <section class="banner-feature-sec">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="feature-box-six">
            <span class="icon-book">
              <img src="@/assets/img/icon/book-06.svg" alt="" />
            </span>
            <h3>Learn From Experts</h3>
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="feature-box-six">
            <span class="icon-book">
              <img src="@/assets/img/icon/book-06.svg" alt="" />
            </span>
            <h3>450+ Quality Lessons</h3>
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="feature-box-six">
            <span class="icon-book">
              <img src="@/assets/img/icon/book-06.svg" alt="" />
            </span>
            <h3>Provide Update Programs</h3>
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
