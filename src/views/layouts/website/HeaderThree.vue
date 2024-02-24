<template>
  <!-- Header -->
  <header class="header header-two">
    <div class="header-fixed">
      <nav class="navbar navbar-expand-lg header-nav">
        <div class="container">
          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <router-link to="/" class="navbar-brand logo">
              <img
                src="@/assets/img/website/logo.png"
                class="img-fluid"
                alt="Logo"
              />
            </router-link>
          </div>
          <div class="main-menu-wrapper">
            <div class="menu-header">
              <router-link to="/" class="menu-logo">
                <img
                  src="@/assets/img/website/logo.png"
                  class="img-fluid"
                  alt="Logo"
                />
              </router-link>
              <a id="menu_close" class="menu-close" href="javascript:void(0);">
                <i class="fas fa-times"></i>
              </a>
            </div>
            <ul class="main-nav">
              <li
                class="megamenu has-submenu"
                v-bind:class="{ active: homeMenu }"
              >
                <router-link to="/"
                  >Home <i class="fas fa-chevron-down"></i
                ></router-link>
                <ul class="submenu mega-submenu">
                  <li>
                    <div class="megamenu-wrapper">
                      <div class="row">
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index' }"
                          >
                            <div class="demo-img">
                              <router-link to="/" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-1.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/" class="inner-demo-img"
                                >Home - 1</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-2' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-2" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-2.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-2" class="inner-demo-img"
                                >Home - 2</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-3' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-3" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-3.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-3" class="inner-demo-img"
                                >Home - 3</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-4' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-4" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-4.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-4" class="inner-demo-img"
                                >Home - 4</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-5' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-5" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-6.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-5" class="inner-demo-img"
                                >Home - 5</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-6' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-6" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-8.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-6" class="inner-demo-img"
                                >Home - 6</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-7' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-7" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-7.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-7" class="inner-demo-img"
                                >Home - 7</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div
                            class="single-demo"
                            v-bind:class="{ active: currentPath == 'index-8' }"
                          >
                            <div class="demo-img">
                              <router-link to="/index-8" class="inner-demo-img"
                                ><img
                                  src="@/assets/img/home-5.jpg"
                                  class="img-fluid"
                                  alt="img"
                              /></router-link>
                            </div>
                            <div class="demo-info">
                              <router-link to="/index-8" class="inner-demo-img"
                                >Home - 8</router-link
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="has-submenu" v-bind:class="{ active: mentorMenu }">
                <a href="">Mentor <i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
                  <li
                    v-bind:class="{ active: currentPath == 'mentor-dashboard' }"
                  >
                    <router-link to="/mentor/index"
                      >Mentor Dashboard</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{ active: currentPath === 'mentor-bookings' }"
                  >
                    <router-link to="/mentor/my-bookings">Bookings</router-link>
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-schedule-timings',
                    }"
                  >
                    <router-link to="/mentor/schedule-timings"
                      >Schedule Timing</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-mentee-list',
                    }"
                  >
                    <router-link to="/mentor/mentee-list"
                      >Mentee List</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-mentee-profile',
                    }"
                  >
                    <router-link to="/mentor/mentee-profile"
                      >Mentee Profile</router-link
                    >
                  </li>
                  <li
                    class="has-submenu"
                    v-bind:class="{
                      active:
                        currentPath == 'mentor-blog' ||
                        currentPath == 'add-blog' ||
                        currentPath == 'edit-blog',
                    }"
                  >
                    <router-link to="/mentor/blog">Blog</router-link>
                    <ul class="submenu">
                      <li
                        v-bind:class="{ active: currentPath == 'mentor-blog' }"
                      >
                        <router-link to="/mentor/blog">Blog</router-link>
                      </li>
                      <li>
                        <router-link to="/mentor/blog-details"
                          >Blog View</router-link
                        >
                      </li>
                      <li v-bind:class="{ active: currentPath == 'add-blog' }">
                        <router-link to="/mentor/add-blog"
                          >Add Blog</router-link
                        >
                      </li>
                      <li v-bind:class="{ active: currentPath == 'edit-blog' }">
                        <router-link to="/mentor/edit-blog"
                          >Edit Blog</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li v-bind:class="{ active: currentPath == 'mentor-chat' }">
                    <router-link to="/mentor/chat">Chat</router-link>
                  </li>
                  <li
                    v-bind:class="{
                      active:
                        currentPath == 'mentor-invoices' ||
                        currentPath == 'mentor-invoice-view',
                    }"
                  >
                    <router-link to="/mentor/invoices">Invoices</router-link>
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-profile-settings',
                    }"
                  >
                    <router-link to="/mentor/profile-settings"
                      >Profile Settings</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'mentor-reviews' }"
                  >
                    <router-link to="/mentor/reviews">Reviews</router-link>
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'mentor-register' }"
                  >
                    <router-link to="/mentor/register"
                      >Mentor Register</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="has-submenu" v-bind:class="{ active: menteeMenu }">
                <a href="">Mentee <i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
                  <li
                    class="has-submenu"
                    v-bind:class="{
                      active:
                        currentPath == 'map-grid' || currentPath == 'map-list',
                    }"
                  >
                    <a href="#">Mentors</a>
                    <ul class="submenu">
                      <li v-bind:class="{ active: currentPath == 'map-grid' }">
                        <router-link to="/mentee/map-grid"
                          >Map Grid</router-link
                        >
                      </li>
                      <li v-bind:class="{ active: currentPath == 'map-list' }">
                        <router-link to="/mentee/map-list"
                          >Map List</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-search-results',
                    }"
                  >
                    <router-link to="/mentee/mentor-search"
                      >Search Mentor</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentee-mentor-profile',
                    }"
                  >
                    <router-link to="/mentee/mentor-profile"
                      >Mentor Profile</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'mentee-bookings' }"
                  >
                    <router-link to="/mentee/bookings">Bookings</router-link>
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'mentee-checkout' }"
                  >
                    <router-link to="/mentee/checkout">Checkout</router-link>
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'booking-success' }"
                  >
                    <router-link to="/mentee/booking-success"
                      >Booking Success</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'mentee-dashboard' }"
                  >
                    <router-link to="/mentee/index"
                      >Mentee Dashboard</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentee-favourites',
                    }"
                  >
                    <router-link to="/mentee/favourites"
                      >Favourites</router-link
                    >
                  </li>
                  <li v-bind:class="{ active: currentPath == 'mentee-chat' }">
                    <router-link to="/mentee/chat">Chat</router-link>
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentee-profile-settings',
                    }"
                  >
                    <router-link to="/mentee/profile-settings"
                      >Profile Settings</router-link
                    >
                  </li>
                  <li
                    v-bind:class="{ active: currentPath == 'change-password' }"
                  >
                    <router-link to="/mentee/change-password"
                      >Change Password</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="has-submenu" v-bind:class="{ active: pagesMenu }">
                <a href="">Pages <i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
                  <li v-bind:class="{ active: currentPath == 'voice-call' }">
                    <router-link to="/pages/voice-call">Voice Call</router-link>
                  </li>
                  <li v-bind:class="{ active: currentPath == 'video-call' }">
                    <router-link to="/pages/video-call">Video Call</router-link>
                  </li>
                  <li>
                    <router-link to="/mentee/mentor-search"
                      >Search Mentors</router-link
                    >
                  </li>
                  <li v-bind:class="{ active: currentPath == 'components' }">
                    <router-link to="/pages/components">Components</router-link>
                  </li>
                  <li class="has-submenu">
                    <router-link to="/mentor/invoices">Invoices</router-link>
                    <ul class="submenu">
                      <li>
                        <router-link to="/mentor/invoices"
                          >Invoices</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/mentor/invoice-view"
                          >Invoice View</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li v-bind:class="{ active: currentPath == 'blank-page' }">
                    <router-link to="/pages/blank-page"
                      >Starter Page</router-link
                    >
                  </li>
                  <li><router-link to="/pages/login">Login</router-link></li>
                  <li>
                    <router-link to="/pages/register">Register</router-link>
                  </li>
                  <li>
                    <router-link to="/pages/forgot-password"
                      >Forgot Password</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="has-submenu" v-bind:class="{ active: blogMenu }">
                <a href="">Blog <i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
                  <li v-bind:class="{ active: currentPath == 'blog-list' }">
                    <router-link to="/blog/blog-list">Blog List</router-link>
                  </li>
                  <li v-bind:class="{ active: currentPath == 'blog-grid' }">
                    <router-link to="/blog/blog-grid">Blog Grid</router-link>
                  </li>
                  <li
                    v-bind:class="{
                      active: currentPath == 'mentor-blog-details',
                    }"
                  >
                    <router-link to="/mentor/blog-details"
                      >Blog Details</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/admin/index" target="_blank"
                  >Admin</router-link
                >
              </li>
              <li class="login-link">
                <router-link to="/pages/login">Login / Signup</router-link>
              </li>
            </ul>
          </div>
          <ul class="nav header-navbar-rht">
            <li class="nav-item">
              <router-link
                class="nav-link header-login-two"
                to="/pages/register"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link header-login" to="/pages/login"
                >Log In</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <!-- /Header -->
</template>

<script>
import Util from "@/assets/utils/utils";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const currentPath = computed(() => {
      return useRoute().name;
    });

    const homeMenu = computed(() => {
      return Util.homeMenu(useRoute().name);
    });

    const mentorMenu = computed(() => {
      return Util.mentorMenu(useRoute().name);
    });

    const menteeMenu = computed(() => {
      return Util.menteeMenu(useRoute().name);
    });

    const pagesMenu = computed(() => {
      return Util.pagesMenu(useRoute().name);
    });

    const blogMenu = computed(() => {
      return Util.blogMenu(useRoute().name);
    });

    onMounted(() => {
      $(".header-fixed").append('<div class="sidebar-overlay"></div>');
      $(document).on("click", "#mobile_btn", function () {
        $("main-wrapper").toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").addClass("menu-opened");
        return false;
      });

      $(document).on("click", ".sidebar-overlay", function () {
        $("html").removeClass("menu-opened");
        $(this).removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
      });

      $(document).on("click", "#menu_close", function () {
        $("html").removeClass("menu-opened");
        $(".sidebar-overlay").removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
      });

      if ($(window).width() <= 991) {
        var Sidemenu = function () {
          this.$menuItem = $(".main-nav a");
        };
      }

      let $wrapper = $(".main-wrapper");

      $(".main-nav a").on("click", function (e) {
        if ($(this).parent().hasClass("has-submenu")) {
          e.preventDefault();
        } else {
          $wrapper.removeClass("slide-nav");
          $(".sidebar-overlay").removeClass("opened");
          $("html").removeClass("menu-opened");
        }

        if (!$(this).hasClass("submenu")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("submenu");
          $(this).next("ul").slideDown(350);
          $(this).addClass("submenu");
        } else if ($(this).hasClass("submenu")) {
          $(this).removeClass("submenu");
          $(this).next("ul").slideUp(350);
        }
      });
    });
    return {
      currentPath,
      homeMenu,
      mentorMenu,
      menteeMenu,
      pagesMenu,
      blogMenu,
    };
  },
};
</script>
