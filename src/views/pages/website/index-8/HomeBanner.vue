<template>
  <!-- Home Banner -->
  <section class="home-slide home-slide-four d-flex align-items-center">
    <div class="container">
      <div class="side-four-right">
        <img src="@/assets/img/img-1.png" alt="" />
      </div>
      <div class="row">
        <div class="col-lg-6 d-flex align-items-center">
          <div class="section-banner-three aos" data-aos="fade-up">
            <div class="hometwo-slide-text">
              <h1>Engaging & Accessible <span>Online Courses</span> For All</h1>
              <p>Own your future learning new skills online</p>
            </div>
            <!-- Search -->
            <div class="search-box search-eight-box">
              <form action="/mentee/mentor-search">
                <div class="form-group search-info location-search">
                  <input
                    type="text"
                    class="form-control text-truncate"
                    placeholder=" Search School, Online educational centers, etc"
                  />
                  <router-link
                    to="/mentee/mentor-search"
                    class="btn bg-search search-btn align-items-center d-flex justify-content-center"
                    >Search</router-link
                  >
                </div>
              </form>
            </div>
            <!-- /Search -->
          </div>
        </div>
        <div class="col-lg-6">
          <div class="object-slide-img aos" data-aos="fade-up">
            <img src="@/assets/img/object-5.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>
