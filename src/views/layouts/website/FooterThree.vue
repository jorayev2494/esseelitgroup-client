<template>
  <!-- Footer -->
  <footer class="footer footer-two">
    <!-- Footer Top -->
    <div class="footer-top footer-two-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentee</h2>
              <ul>
                <li>
                  <router-link to="/mentee/mentor-search"
                    >Search Mentors</router-link
                  >
                </li>
                <li><router-link to="/pages/login">Login</router-link></li>
                <li>
                  <router-link to="/pages/register">Register</router-link>
                </li>
                <li><router-link to="/booking">Booking</router-link></li>
                <li>
                  <router-link to="/mentee/index">Mentee Dashboard</router-link>
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentors</h2>
              <ul>
                <li>
                  <router-link to="/mentor/appointments"
                    >Appointments</router-link
                  >
                </li>
                <li><router-link to="/mentor/chat">Chat</router-link></li>
                <li><router-link to="/pages/login">Login</router-link></li>
                <li>
                  <router-link to="/pages/register">Register</router-link>
                </li>
                <li>
                  <router-link to="/mentor/index">Mentor Dashboard</router-link>
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>
          <!-- Footer Widget -->
          <div class="col-lg-2 col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">More</h2>
              <ul>
                <li><router-link to="/pages/login">Login</router-link></li>
                <li><router-link to="/mentee/chat">Chat</router-link></li>
                <li>
                  <router-link to="/pages/register">Register</router-link>
                </li>
                <li>
                  <router-link to="/mentee/mentor-search"
                    >Search Mentees</router-link
                  >
                </li>
                <li>
                  <router-link to="/mentee/mentor-search"
                    >Search Mentors</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /Footer Widget -->
          <div class="col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">Subscribe to get Updates</h2>
              <p class="fotter-para">
                Our goal is to translate the positive effects from
                revolutionizing
              </p>
              <div class="email-box">
                <input type="email" placeholder="Your email address" />
                <a href=""
                  ><img src="@/assets/img/icon/subscribe-icon.svg" alt=""
                /></a>
              </div>
              <ul class="icon-socials">
                <li>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-behance"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
            </div>
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
            <div class="col-xl-6 col-lg-4">
              <div class="copyright-text">
                <p class="mb-0">&copy; 2023 Mentoring. All rights reserved.</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-8">
              <div class="term-privacy">
                <div class="social-icon">
                  <ul class="align-items-center">
                    <li>
                      <a href="javascript:void(0);">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Become a Mentor </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Become a Mentee</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Pricing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">All Courses</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Help </a>
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
