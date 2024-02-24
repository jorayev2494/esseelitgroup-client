<template>
  <!-- Most popular Categories -->
  <section class="most-popular">
    <div class="container">
      <div class="course-two-bg">
        <img
          src="@/assets/img/bg/home-two-bg-05.png"
          class="img-fluid course-bg"
          alt=""
        />
      </div>
      <div
        class="section-header section-head-one text-center aos"
        data-aos="fade-up"
      >
        <h2>Browse Courses By Categories</h2>
        <div class="title-bar">
          <img
            src="@/assets/img/icon/index-title-bar.svg"
            class="img-fluid"
            alt=""
          />
        </div>
        <p class="sub-title">144 Courses live - 20 added today.</p>
      </div>
      <div class="popular-categories popular-cat-one aos" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-01.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Design</h4>
                  <p>Over <span>550</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-02.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Photography</h4>
                  <p>Over <span>750</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-03.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Finance</h4>
                  <p>Over <span>700</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-04.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Research</h4>
                  <p>Over <span>600</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-05.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Digital Service</h4>
                  <p>Over <span>500</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-06.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>IT Security</h4>
                  <p>Over <span>200</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-07.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Marketing</h4>
                  <p>Over <span>230</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <router-link to="/mentee/mentor-search" data-aos="fade-up">
              <div class="sub-categories d-flex align-items-center">
                <div class="categories-img">
                  <img src="@/assets/img/categories/rec-01.jpg" alt="" />
                </div>
                <div class="categories-text">
                  <h4>Maths & Logic</h4>
                  <p>Over <span>460</span> Courses</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="explore-more text-center">
          <router-link to="/mentee/mentor-search" class="all-browse"
            >Browse All Categories <i class="fas fa-chevron-right"></i
          ></router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- /Most popular Categories -->
</template>
