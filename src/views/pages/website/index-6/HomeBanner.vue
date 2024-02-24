<template>
  <!-- Home Banner -->
  <section
    class="home-slide home-slide-five home-slide-eight d-flex align-items-center"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="home-slide-face slide-face-eight aos" data-aos="fade-up">
            <div class="home-slide-text">
              <h1>Learn New Skills with Top <span>Mentors</span></h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
            <!-- Search -->
            <div class="search-box search-eightbox">
              <form action="/mentee/mentor-search">
                <div
                  class="form-group search-info location-search location-search-four six-banner-search"
                >
                  <input
                    type="text"
                    class="form-control text-truncate key"
                    placeholder=" Keyword / Course Name"
                  />
                  <input
                    type="text"
                    class="form-control text-truncate city"
                    placeholder=" City or Postalcode"
                  />
                  <router-link to="/mentee/mentor-search" class=""
                    ><img src="@/assets/img/icon/search-10.svg" alt=""
                  /></router-link>
                </div>
              </form>
            </div>
            <!-- /Search -->
            <div class="pop-search">
              <p>
                <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
              </p>
            </div>
          </div>
        </div>
        <div class="banner-tab-card">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Near Your Location
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                tabindex="-1"
              >
                Popular
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-seo-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-seo"
                type="button"
                role="tab"
                aria-controls="pills-seo"
                aria-selected="false"
              >
                Best Rated
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade active show"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-01.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Steve kennedy</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-02.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Stephan</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-03.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Cinderella</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-04.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">John Mathew</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.7
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-01.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Steve kennedy</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-02.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Stephan</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-03.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Cinderella</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-04.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">John Mathew</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.7
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-seo"
            role="tabpanel"
            aria-labelledby="pills-seo-tab"
          >
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-01.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Steve kennedy</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-02.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Stephan</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-03.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">Cinderella</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="banner-cards">
                  <div class="banner-tab-img">
                    <router-link to="/mentee/mentor-profile"
                      ><img
                        src="@/assets/img/mendor/banner-card-04.jpg"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </div>
                  <div class="team-content">
                    <h4>
                      <router-link to="/mentee/mentor-profile">John Mathew</router-link>
                      <i class="fas fa-check-double"></i>
                    </h4>
                    <div class="view-student-three">
                      <ul
                        class="view-student-three-list justify-content-between"
                      >
                        <li>
                          <img
                            src="@/assets/img/icon/location-02.svg"
                            alt=""
                          />Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span class="star-rate"
                            ><i class="fas fa-star"></i>
                          </span>
                          4.7
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>
