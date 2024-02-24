<template>
  <!-- Our Blog -->
  <section class="section our-blog trending-courses-three popular-course-three">
    <div class="container">
      <div class="blog-head">
        <!-- Section Header -->
        <div class="section-header section-head-one aos" data-aos="fade-up">
          <h2>From Our Blogs</h2>
          <div class="title-bar">
            <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
          </div>
          <p class="sub-title">
            We collect reviews from our users so you can get an honest opinion
            of what an experience with our website are really like!
          </p>
        </div>
        <!-- /Section Header -->
        <div class="explore-more text-center">
          <router-link to="/blog/blog-list" class="all-browse"
            >Browse All Blogs <i class="fas fa-chevron-right"></i
          ></router-link>
        </div>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="course-box course-box-two" data-aos="fade-up">
            <div class="product">
              <div class="product-img trend-course">
                <router-link to="/mentor/blog-details">
                  <img
                    class="img-fluid"
                    alt=""
                    src="@/assets/img/blog/blog-21.jpg"
                  />
                </router-link>
              </div>
              <div class="feature-texts">
                <span>Marketing</span>
              </div>
              <div class="product-content">
                <ul class="date">
                  <li>
                    <span><i class="fas fa-envelope"></i></span>
                    40 Comments
                  </li>
                  <li>
                    <span><i class="fas fa-clock"></i></span>
                    21 Jan, 2023
                  </li>
                </ul>
                <h3 class="title">
                  <router-link to="/mentor/blog-details"
                    >Interview Question: Why Dont You Have a
                    Degree?</router-link
                  >
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="course-box course-box-two" data-aos="fade-up">
            <div class="product">
              <div class="product-img trend-course">
                <router-link to="/mentor/blog-details">
                  <img
                    class="img-fluid"
                    alt=""
                    src="@/assets/img/blog/blog-22.jpg"
                  />
                </router-link>
              </div>
              <div class="feature-texts">
                <span>Marketing</span>
              </div>
              <div class="product-content">
                <ul class="date">
                  <li>
                    <span><i class="fas fa-envelope"></i></span>
                    30 Comments
                  </li>
                  <li>
                    <span><i class="fas fa-clock"></i></span>
                    20 Jan, 2023
                  </li>
                </ul>
                <h3 class="title">
                  <router-link to="/mentor/blog-details"
                    >How to Make a Perfect CV That Attracts the
                    Attention</router-link
                  >
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="course-box course-box-two" data-aos="fade-up">
            <div class="product">
              <div class="product-img trend-course">
                <router-link to="/mentor/blog-details">
                  <img
                    class="img-fluid"
                    alt=""
                    src="@/assets/img/blog/blog-23.jpg"
                  />
                </router-link>
              </div>
              <div class="feature-texts">
                <span>Marketing</span>
              </div>
              <div class="product-content">
                <ul class="date">
                  <li>
                    <span><i class="fas fa-envelope"></i></span>
                    50 Comments
                  </li>
                  <li>
                    <span><i class="fas fa-clock"></i></span>
                    22 Jan, 2023
                  </li>
                </ul>
                <h3 class="title">
                  <router-link to="/mentor/blog-details"
                    >39 Strengths and Weaknesses To Discuss in a
                    Courses</router-link
                  >
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Blog -->
</template>
