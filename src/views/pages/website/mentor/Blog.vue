<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb5></breadcrumb5>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <sidebar></sidebar>
            </div>
          </div>

          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="row">
              <div class="col-12">
                <!-- Tab Menu -->
                <nav class="user-tabs">
                  <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li>
                      <a
                        class="nav-link active"
                        :class="{ active: currentPath === 'activeservice' }"
                        href="#activeservice"
                        data-bs-toggle="tab"
                        >Active Blog</a
                      >
                    </li>
                    <li>
                      <a
                        class="nav-link"
                        :class="{ active: currentPath === 'inactiveservice' }"
                        href="#inactiveservice"
                        data-bs-toggle="tab"
                        >Inactive Blog</a
                      >
                    </li>
                  </ul>
                </nav>
                <!-- /Tab Menu -->

                <!-- Tab Content -->
                <div class="tab-content">
                  <!-- Active Content -->
                  <div
                    role="tabpanel"
                    id="activeservice"
                    class="tab-pane fade show active"
                  >
                    <div class="row">
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-01.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part I</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-02.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part II</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-03.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-04.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part I</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-05.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part II</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-06.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="/mentor/edit-blog"
                                  class="text-success"
                                  ><i class="far fa-edit"></i> Edit</router-link
                                >
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                >
                                  <i class="far fa-trash-alt"></i> Inactive
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Active Content -->

                  <!-- Inactive Content -->
                  <div
                    role="tabpanel"
                    id="inactiveservice"
                    class="tab-pane fade"
                  >
                    <div class="row">
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-04.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-05.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-06.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-07.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-08.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-xl-4 d-flex">
                        <div class="course-box blog grid-blog">
                          <div class="blog-image mb-0">
                            <router-link to="/mentor/blog-details"
                              ><img
                                class="img-fluid"
                                src="@/assets/img/blog/blog-09.jpg"
                                alt="Post Image"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <span class="date">April 09 2020</span>
                            <span class="course-title"
                              >Abacus Study for beginner - Part III</span
                            >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                            <div class="row">
                              <div class="col">
                                <router-link
                                  to="edit-blog"
                                  class="text-success"
                                >
                                  <i class="far fa-edit"></i> Edit
                                </router-link>
                              </div>
                              <div class="col text-end">
                                <a
                                  href="javascript:void(0);"
                                  class="text-success"
                                >
                                  <i class="fas fa-toggle-on"></i> Active
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Inactive Content -->
                </div>
                <!-- /Tab Content -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
    <layout-footer></layout-footer>
  </div>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
  data() {
    return {
      activeClass: "active",
    };
    //  isactive : true
  },
};
</script>
