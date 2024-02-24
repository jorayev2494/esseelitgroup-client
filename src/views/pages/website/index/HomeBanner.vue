<template>
  <!-- Home Banner -->
  <section class="section section-search">
    <div class="container">
      <div class="banner-wrapper m-auto text-center aos" data-aos="fade-up">
        <div class="banner-header banner-header-one">
          <h1>Search Teacher in <span>Mentoring Appointment</span></h1>
          <p>
            Discover the best Mentors & institutions the city nearest to you.
          </p>
        </div>

        <!-- Search -->
        <div class="search-box">
          <form action="mentee/mentor-search">
            <div class="form-group search-location">
              <input
                type="text"
                class="form-control"
                placeholder="Search Location"
              />
            </div>
            <div class="form-group search-info">
              <input
                type="text"
                class="form-control"
                placeholder="Search School, Online educational centers, etc"
              />
            </div>
            <button type="submit" class="btn btn-primary search-btn">
              <i><img src="@/assets/img/search-submit.png" alt="" /></i>
              <span>Search</span>
            </button>
          </form>
        </div>
        <!-- /Search -->
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>
