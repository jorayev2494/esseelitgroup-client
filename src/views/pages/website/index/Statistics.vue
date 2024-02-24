<template>
  <!-- Statistics Section -->
  <section class="section statistics-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center aos" data-aos="fade-up">
        <span>Our Achievements</span>
        <h2>Have 10 Years Of Experiences</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <!-- /Section Header -->
      <div class="row">
        <div class="col-12 col-lg-3 col-sm-6">
          <div class="statistics-list text-center aos" data-aos="fade-up">
            <div class="statistics-icon">
              <img src="@/assets/img/icon/counter-icon-1.svg" alt="" />
            </div>
           <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="1500"
        :duration="5"
       separator=""
       :autoinit="true"
 />+</h5>
            <h3>Qualified Mentors</h3>
          </div>
        </div>
        <div class="col-12 col-lg-3 col-sm-6">
          <div class="statistics-list text-center aos" data-aos="fade-up">
            <div class="statistics-icon">
              <img src="@/assets/img/icon/counter-icon-2.svg" alt="" />
            </div>
            <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="600"
        :duration="5"
       separator=""
       :autoinit="true"
 />+</h5>
           
            <h3>Happy Clients</h3>
          </div>
        </div>
        <div class="col-12 col-lg-3 col-sm-6">
          <div class="statistics-list text-center aos" data-aos="fade-up">
            <div class="statistics-icon">
              <img src="@/assets/img/icon/counter-icon-3.svg" alt="" />
            </div>
            <h5><vue3-autocounter
     class="counter"
      ref="counter"
       :startAmount="0"
       :delay="3"
       :endAmount="124"
        :duration="5"
       separator=""
       :autoinit="true"
 />+</h5>
            
            <h3>Appointments</h3>
          </div>
        </div>
        <div class="col-12 col-lg-3 col-sm-6">
          <div class="statistics-list text-center aos" data-aos="fade-up">
            <div class="statistics-icon">
              <img src="@/assets/img/icon/counter-icon-4.svg" alt="" />
            </div>
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
            
            <h3>Job Satisfaction</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Statistics Section -->
</template>
