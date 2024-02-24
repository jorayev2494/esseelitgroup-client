<template>
  <!-- Footer -->
  <footer class="footer footer-two footer-four foot-eight">
    <!-- Footer Top -->
    <div class="footer-top footer-two-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12"></div>
          <div class="col-lg-4 col-md-6">
            <div class="footer-logo">
              <img src="@/assets/img/logo-5.png" alt="logo" />
            </div>
            <!-- Footer Widget -->
            <div class="footer-widget footer-about">
              <div class="footer-about-content">
                <h2 class="footer-title">About Mentoring</h2>
                <p class="footer-sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat mauris Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut consequat mauris
                </p>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>
          <div class="col-lg-4 col-md-6">
            <!-- Footer News letter -->
            <div class="subscriber-two">
              <h2 class="footer-title">Subscribe</h2>
              <form action="search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-email address"
                  />
                  <router-link
                    to="/mentee/mentor-search"
                    class="btn bg-path d-flex align-items-center"
                  >
                    <i class="fas fa-arrow-up"></i>
                  </router-link>
                </div>
                <div class="bottom-border-two"></div>
              </form>
              <div class="footer-list">
                <ul class="footer-social-list">
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Instagram </a>
                  </li>
                  <li>
                    <a href="">Linkedin </a>
                  </li>
                  <li>
                    <a href="">Pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Footer News letter -->
          </div>
          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentee</h2>
              <ul>
                <li><router-link to="/mentee/mentor-search">Search Mentors</router-link></li>
                <li><router-link to="/pages/login">Login</router-link></li>
                <li><router-link to="/pages/register">Register</router-link></li>
                <li><router-link to="/booking">Booking</router-link></li>
                <li><router-link to="/mentee/index">Mentee Dashboard</router-link></li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>
          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentors</h2>
             <ul>
                <li><router-link to="/mentor/appointments">Appointments</router-link></li>
                <li><router-link to="/mentor/chat">Chat</router-link></li>
                <li><router-link to="/pages/login">Login</router-link></li>
                <li><router-link to="/pages/register">Register</router-link></li>
                <li><router-link to="/mentor/index">Mentor Dashboard</router-link></li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright-border"></div>
        <div class="copyright">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copyright-text">
                <p class="mb-0">&copy; 2023 Mentoring. All rights reserved.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="term-privacy">
                <div class="social-icon">
                  <ul class="align-items-center">
                    <li>
                      <a href="javascript:void(0);">Terms</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Cookies </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Copyright -->
        <div class="back-to-top show">
          <a
            class="back-to-top-icon align-items-center justify-content-center d-flex show"
            href="#top"
            ><i class="fa fa-arrow-up" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
