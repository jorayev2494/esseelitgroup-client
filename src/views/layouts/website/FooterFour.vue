<template>
  <!-- Footer -->
  <footer class="footer footer-three">
    <!-- Footer Top -->
    <div class="footer-top footer-two-top footer-four-index aos">
      <div class="container">
        <div class="row" data-aos="fade-up">

          <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-about">

              <h2 class="footer-title">{{ $t('pages.index.footer.contact_us.title') }}</h2>
              <div class="footer-about-content">
                <p class="footer-sub-text">{{ $t('pages.index.footer.contact_us.text') }}</p>
              </div>

              <div class="footer-three-contact">
                <ul>
                  <li>
                    <i class="fa fa-map-pin"></i>
                    121 King St, Melbourne den 3000, Australia
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    +1 55265 164561
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    mentoring@example.com
                  </li>
                </ul>

                <ul class="icon-socials d-flex">
                  <li v-for="({ link, icon }, idx) of socials" :key="idx">
                    <a :href="link">
                      <i :class="icon"></i>
                    </a>
                  </li>
                </ul>

              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">{{ $t('pages.index.footer.documents.title') }}</h2>
              <div class="footer-about-content">
                <p class="footer-sub-text">{{ $t('pages.index.footer.documents.text') }}</p>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentors</h2>
              <ul>
                <li><router-link to="/mentor/appointments">Appointments</router-link></li>
                <li><router-link to="/mentor/chat">Chat</router-link></li>
                <li><router-link :to="$tMakeRoute({ name: 'map-list' })">Login</router-link></li>
                <li><router-link :to="$tMakeRoute({ name: 'mentee-register' })">Register</router-link></li>
                <li><router-link to="/mentor/index">Mentor Dashboard</router-link></li>
              </ul>
            </div>
          </div> -->

          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">Community</h2>
               <ul>
                <li>
                  <router-link to="/mentee/mentor-search">Learners</router-link>
                </li>
                <li><router-link to="/pages/login">Partners</router-link></li>
                <li>
                  <router-link to="/pages/register">Developers</router-link>
                </li>
                <li><router-link to="/booking">Free Courses</router-link></li>
                <li><router-link to="/mentee/index">Affilates</router-link></li>
                <li><router-link to="/mentee/index">Blogs</router-link></li>
                <li>
                  <router-link to="/mentee/index">Become a Mentee</router-link>
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <!-- <div class="col-lg-4 col-md-6">
            <div class="subscriber-two">
              <h2 class="footer-title">Subscribe to get Updates</h2>
              <p>
                Our goal is to translate the positive effects from
                revolutionizing
              </p>
              <form action="/mentee/mentor-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                  <a href=""
                    ><img src="@/assets/img/icon/subscribe-icon.svg" alt=""
                  /></a>
                </div>
                <div class="bottom-border-two"></div>
              </form>
            </div>
          </div> -->

        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom index-four-footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright-border"></div>
        <div class="copyright p-0">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div class="copyright-text">
                <p class="mb-0">© {{ currentYear }} {{ $store.getters['getAppName'] }}. All rights reserved.</p>
              </div>
            </div>
            <div class="col-lg-3">
              <!-- <div class="footer-logo text-center">
                <img src="@/assets/img/logo-5.png" class="img-fluid" alt="Logo" />
              </div> -->
            </div>
            <div class="col-lg-5">
              <!-- <div class="term-privacy">
                <div class="terms">
                  <ul class="align-items-center">
                    <li>
                      <a href="javascript:void(0);">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Cookie Policy </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sitemap </a>
                    </li>
                  </ul>
                </div>
              </div> -->
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

<script setup>

  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: 'fab fa-facebook-f',
      link: '#',
    },
    {
      icon: 'fab fa-linkedin',
      link: '#',
    },
    // {
    //   icon: 'fab fa-behance',
    //   link: '#',
    // },
    {
      icon: 'fab fa-instagram',
      link: '#',
    },
    // {
    //   icon: 'fab fa-twitter',
    //   link: '#',
    // },
  ];
</script>
