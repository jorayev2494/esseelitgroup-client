<template>
  <!-- Most trending course -->
  <section class="section trending-courses trending-courses-two trend-two">
    <div class="container">
      <div class="section-top-head top-head-three">
        <div class="section-header aos" data-aos="fade-up">
          <h2>Featured courses of the day</h2>
          <p class="sub-title">Featured courses of the day</p>
        </div>
      </div>
      <div class="broad-course-tab trending-tab">
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
              All
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
              Web development
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
              SEO
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-sales-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-sales"
              type="button"
              role="tab"
              aria-controls="pills-sales"
              aria-selected="false"
              tabindex="-1"
            >
              Sales
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-java-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-java"
              type="button"
              role="tab"
              aria-controls="pills-java"
              aria-selected="false"
            >
              Javascript
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-it-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-it"
              type="button"
              role="tab"
              aria-controls="pills-it"
              aria-selected="false"
              tabindex="-1"
            >
              IT Secuity
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade active show"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user3.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user4.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user5.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user6.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user7.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
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
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user3.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user4.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user5.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user6.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
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
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user4.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user5.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user7.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user6.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user3.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-sales"
          role="tabpanel"
          aria-labelledby="pills-sales-tab"
        >
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-java"
          role="tabpanel"
          aria-labelledby="pills-java-tab"
        >
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-it"
          role="tabpanel"
          aria-labelledby="pills-it-tab"
        >
          <div class="course-two-all aos" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-02.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />700 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$300</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-03.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />50 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$150</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-04.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />500 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />80 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$400</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-05.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />800 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />60 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Learn CorelDraw – Interactive Tutorial</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$200</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="course-box course-box-three">
                  <div class="product">
                    <div class="product-img">
                      <a href="javascript:void(0);">
                        <img
                          class="img-fluid"
                          alt=""
                          src="@/assets/img/blog/trend-img-01.jpg"
                          width="600"
                          height="300"
                        />
                      </a>
                    </div>
                    <div class="fav-star">
                      <span class="average-rating rate-point three-rate">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        5.0
                      </span>
                      <span class="favourite">
                        <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="rating-img">
                      <img src="@/assets/img/user/user2.jpg" alt="" />
                    </div>
                    <div class="product-content">
                      <div class="course-info d-flex align-items-center">
                        <div class="user-student">
                          <span
                            ><img
                              src="@/assets/img/icon/user-icon-05.svg"
                              alt=""
                            />400 Students</span
                          >
                        </div>
                        <div class="user-lesson">
                          <span
                            ><img
                              src="@/assets/img/icon/book-content-icon.svg"
                              alt=""
                            />40 Lessons</span
                          >
                        </div>
                      </div>
                      <h3 class="title">
                        <a href="javascript:void(0);"
                          >Information About UI/UX Design Degree</a
                        >
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular
                      </p>
                      <div
                        class="rating rating-star rating-two align-items-center"
                      >
                        <div class="course-price">
                          <h4>$100</h4>
                        </div>
                        <div class="book">
                          <a href="javascript:void(0);">Book Now</a>
                        </div>
                      </div>
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
  <!-- /Most trending course -->
</template>
