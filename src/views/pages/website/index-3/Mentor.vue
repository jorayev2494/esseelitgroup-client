<template>
  <section class="join-mentor join-mentor-two">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div
            class="join-mentor-img aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <img src="@/assets/img/join-02.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="head-join-us aos aos-init aos-animate" data-aos="fade-up">
            <div class="join-mentor-details">
              <span class="sub">Variety of Courses</span>
              <h2>Find The One That’s <span>Right</span> For You</h2>
              <p>
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </p>
            </div>
            <div class="reg-log-btn">
              <router-link to="/mentee/mentor-search" class="find-ment">Find Mentors</router-link>
              <a href="javascript:void(0);" class="view-course"
                >View All Courses</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="course-counter">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="counter-box text-center">
              <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="25"
        :duration="5"
       separator=""
       :autoinit="true"
 />K</h5>
             
              <h4>Updated Courses</h4>
              <p>
                We always provide people acomplete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="counter-box text-center">
                      <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="200"
        :duration="5"
       separator=""
       :autoinit="true"
 />K</h5>
              
              <h4>Featured Mentors</h4>
              <p>
                We always provide people acomplete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="counter-box text-center">
                      <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="600"
        :duration="5"
       separator=""
       :autoinit="true"
 />K</h5>
              
              <h4>Skilled Users</h4>
              <p>
                We always provide people acomplete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="counter-box text-center">
                      <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="100"
        :duration="5"
       separator=""
       :autoinit="true"
 />%</h5>
              
              <h4>Job Satisfaction</h4>
              <p>
                We always provide people acomplete solution upon focused of any
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
