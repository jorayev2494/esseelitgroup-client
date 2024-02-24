<template>
  <section class="improve-skills-sec">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="skills-content">
            <div class="skills-content-heading">
              <h2>Book Our Course & Improve Your Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
                vidisse pertinacia, ius ut maiorum omittam. Duis ludus no mea,
                te has delenit maiorum, an ius admodum constituto. Nostrud
                urbanitas.
              </p>
            </div>
            <div class="skills-counter">
              <div class="counter-box">
                <h5>
                  <vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="5890"
                    :duration="5"
                    separator=""
                    :autoinit="true"
                  />+
                </h5>

                <h4>Students</h4>
              </div>
              <div class="counter-box">
                <h5>
                  <vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="254"
                    :duration="5"
                    separator=""
                    :autoinit="true"
                  />k+
                </h5>

                <h4>Courses</h4>
              </div>
              <div class="counter-box">
                <h5>
                  <vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="900"
                    :duration="5"
                    separator=""
                    :autoinit="true"
                  />k+
                </h5>

                <h4>Mentors</h4>
              </div>
            </div>
            <div class="join-btns">
              <router-link to="/pages/login" class="join">Join Now</router-link>
              <router-link to="/mentee/mentor-search" class="find"
                >Find Mentor</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="improve-img">
            <img
              src="@/assets/img/improve-skill.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
