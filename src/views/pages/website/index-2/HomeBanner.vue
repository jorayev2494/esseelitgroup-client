<template>
  <!-- Home Banner -->
  <section class="home-slide d-flex align-items-center">
    <div class="banner-two-bg-img">
      <img
        src="@/assets/img/bg/banner-two-bg-01.png"
        class="img-fluid banner-two-bg"
        alt=""
      />
      <img
        src="@/assets/img/bg/banner-two-bg-02.png"
        class="img-fluid banner-two-bgtwo"
        alt=""
      />
      <img
        src="@/assets/img/bg/banner-two-bg-03.png"
        class="img-fluid banner-two-bgthree"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex align-items-center">
          <div class="home-slide-face aos" data-aos="fade-up">
            <div class="home-slide-text">
              <h1>Find the Perfect Mentors Near Your Location</h1>
              <p>Own your future learning new skills online</p>
            </div>
            <!-- Search -->
            <div class="search-box search-index-two">
              <form action="/mentee/mentor-search">
                <div
                  class="form-group search-info location-search location-search-four"
                >
                  <input
                    type="text"
                    class="form-control text-truncate key"
                    placeholder=" Keyword / Course Name"
                  />
                  <input
                    type="text"
                    class="form-control text-truncate city"
                    placeholder=" City or Postalcode"
                  />
                  <router-link
                    to="/mentee/mentor-search"
                    class="btn bg-search search-btn align-items-center d-flex justify-content-center"
                    >Find Mentors</router-link
                  >
                </div>
              </form>
            </div>
            <!-- /Search -->
            <div class="poular-search">
              <p>
                <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>
