<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-about">
              <div class="footer-logo">
                <img src="@/assets/img/logo.png" alt="logo" />
              </div>
              <div class="footer-about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="social-icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank"
                        ><i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"
                        ><i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"
                        ><i class="fab fa-linkedin-in"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"
                        ><i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-3 col-md-6">
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

          <div class="col-lg-3 col-md-6">
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

          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-contact">
              <h2 class="footer-title">Contact Us</h2>
              <div class="footer-contact-info">
                <div class="footer-address">
                  <span
                    ><img src="@/assets/img/icon/location-icon.svg" alt=""
                  /></span>
                  <p>
                    3556 Beech Street, San Francisco,<br />
                    California, CA 94108
                  </p>
                </div>
                <p>
                  <span class="d-inline-block"
                    ><img src="@/assets/img/icon/call-icon.svg" alt="" /></span
                  >+1 315 369 5943
                </p>
                <p class="mb-0">
                  <span class="d-inline-block"
                    ><img src="@/assets/img/icon/mail-icon.svg" alt="" /></span
                  >mentoring@example.com
                </p>
              </div>
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
        <div class="copyright">
          <div class="row">
            <div class="col-12 text-center">
              <div class="copyright-text">
                <p class="mb-0">&copy; 2023 Mentoring. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
