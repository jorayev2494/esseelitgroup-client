<template>
  <!-- Lets Work -->
  <section class="lets-work">
    <div class="container">
      <div class="lets-work-card">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="explore-img">
                  <img
                    src="@/assets/img/work-img.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="explore-title">
                  <h2>
                    Let’s Work Together <span> & Explore Opportunities</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="work-btns">
              <div class="btn-reg">
                <router-link to="/pages/register">Register Now</router-link>
              </div>
              <div class="btn-log">
                <router-link to="/pages/login">Sign In</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
