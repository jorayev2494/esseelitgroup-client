<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb18></breadcrumb18>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <!-- Blog Post -->
            <div class="blog">
              <div class="blog-image">
                <router-link to="/mentor/blog-details"
                  ><img
                    class="img-fluid"
                    src="@/assets/img/website/blog/blog-01.jpg"
                    alt="Post Image"
                /></router-link>
              </div>
              <h3 class="blog-title">
                <router-link to="/mentor/blog-details"
                  >Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem</router-link
                >
              </h3>
              <div class="blog-info clearfix">
                <div class="post-left">
                  <ul>
                    <li>
                      <div class="post-author">
                        <router-link to="/mentee/mentor-profile"
                          ><img
                            src="@/assets/img/website/user/user.jpg"
                            alt="Post Author"
                          />
                          <span>Ruby Perrin</span></router-link
                        >
                      </div>
                    </li>
                    <li><i class="far fa-clock"></i>4 Dec 2019</li>
                    <li><i class="far fa-comments"></i>12 Comments</li>
                    <li><i class="fa fa-tags"></i>HTML</li>
                  </ul>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                  laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <router-link to="/mentor/blog-details" class="read-more"
                  >Read More</router-link
                >
              </div>
            </div>
            <!-- /Blog Post -->

            <!-- Blog Post -->
            <div class="blog">
              <div class="blog-image">
                <router-link to="/mentor/blog-details"
                  ><img
                    class="img-fluid"
                    src="@/assets/img/website/blog/blog-02.jpg"
                    alt=""
                /></router-link>
              </div>
              <h3 class="blog-title">
                <router-link to="/mentor/blog-details"
                  >1914 translation by H. Rackham</router-link
                >
              </h3>
              <div class="blog-info clearfix">
                <div class="post-left">
                  <ul>
                    <li>
                      <div class="post-author">
                        <router-link to="/mentee/mentor-profile"
                          ><img
                            src="@/assets/img/website/user/user1.jpg"
                            alt="Post Author"
                          />
                          <span>Darren Elder</span></router-link
                        >
                      </div>
                    </li>
                    <li><i class="far fa-clock"></i>3 Dec 2019</li>
                    <li><i class="far fa-comments"></i>7 Comments</li>
                    <li><i class="fa fa-tags"></i>Java Script</li>
                  </ul>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                  laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <router-link to="/mentor/blog-details" class="read-more"
                  >Read More</router-link
                >
              </div>
            </div>
            <!-- /Blog Post -->

            <!-- Blog Post -->
            <div class="blog">
              <div class="blog-image">
                <div class="video">
                  <iframe
                    width="940"
                    src="https://www.youtube.com/embed/ZMty6R0Bn0I"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <h3 class="blog-title">
                <router-link to="/mentor/blog-details"
                  >The standard Lorem Ipsum passage, used since the</router-link
                >
              </h3>
              <div class="blog-info clearfix">
                <div class="post-left">
                  <ul>
                    <li>
                      <div class="post-author">
                        <router-link to="/mentee/mentor-profile"
                          ><img
                            src="@/assets/img/website/user/user2.jpg"
                            alt="Post Author"
                          />
                          <span>Deborah Angel</span></router-link
                        >
                      </div>
                    </li>
                    <li><i class="far fa-clock"></i>3 Dec 2019</li>
                    <li><i class="far fa-comments"></i>2 Comments</li>
                    <li><i class="fa fa-tags"></i>C++</li>
                  </ul>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                  laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <router-link to="/mentor/blog-details" class="read-more"
                  >Read More</router-link
                >
              </div>
            </div>
            <!-- /Blog Post -->

            <!-- Blog Post -->
            <div class="blog">
              <div class="blog-image">
                <div class="video">
                  <iframe
                    width="940"
                    src="https://www.youtube.com/embed/svmGQhQLuBQ"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <h3 class="blog-title">
                <router-link to="/mentor/blog-details"
                  >Section 1.10.32 of "de Finibus Bonorum et
                  Malorum</router-link
                >
              </h3>
              <div class="blog-info clearfix">
                <div class="post-left">
                  <ul>
                    <li>
                      <div class="post-author">
                        <router-link to="/mentee/mentor-profile"
                          ><img
                            src="@/assets/img/website/user/user3.jpg"
                            alt="Post Author"
                          />
                          <span>Sofia Brient</span></router-link
                        >
                      </div>
                    </li>
                    <li><i class="far fa-clock"></i>2 Dec 2019</li>
                    <li><i class="far fa-comments"></i>41 Comments</li>
                    <li><i class="fa fa-tags"></i>Css</li>
                  </ul>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                  laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <router-link to="/mentor/blog-details" class="read-more"
                  >Read More</router-link
                >
              </div>
            </div>
            <!-- /Blog Post -->

            <!-- Blog Pagination -->
            <div class="row">
              <div class="col-md-12">
                <div class="blog-pagination">
                  <nav>
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1"
                          ><i class="fas fa-angle-double-left"></i
                        ></a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#"
                          >2 <span class="sr-only">(current)</span></a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"
                          ><i class="fas fa-angle-double-right"></i
                        ></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- /Blog Pagination -->
          </div>

          <!-- Blog Sidebar -->
          <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
            <div class="stickysidebar">
              <!-- Search -->
              <div class="card search-widget">
                <div class="card-body">
                  <form class="search-form">
                    <div class="input-group">
                      <input
                        type="text"
                        placeholder="Search..."
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /Search -->

              <!-- Latest Posts -->
              <div class="card post-widget">
                <div class="card-header">
                  <h4 class="card-title">Latest Posts</h4>
                </div>
                <div class="card-body">
                  <ul class="latest-posts">
                    <li>
                      <div class="post-thumb">
                        <router-link to="/mentor/blog-details">
                          <img
                            class="img-fluid"
                            src="@/assets/img/website/blog/blog-thumb-01.jpg"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div class="post-info">
                        <h4>
                          <router-link to="/mentor/blog-details"
                            >Lorem Ipsum is simply dummy text of the
                            printing</router-link
                          >
                        </h4>
                        <p>4 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div class="post-thumb">
                        <router-link to="/mentor/blog-details">
                          <img
                            class="img-fluid"
                            src="@/assets/img/website/blog/blog-thumb-02.jpg"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div class="post-info">
                        <h4>
                          <router-link to="/mentor/blog-details"
                            >It is a long established fact that a reader will
                            be</router-link
                          >
                        </h4>
                        <p>3 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div class="post-thumb">
                        <router-link to="/mentor/blog-details">
                          <img
                            class="img-fluid"
                            src="@/assets/img/website/blog/blog-thumb-03.jpg"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div class="post-info">
                        <h4>
                          <router-link to="/mentor/blog-details"
                            >here are many variations of passages of Lorem
                            Ipsum</router-link
                          >
                        </h4>
                        <p>3 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div class="post-thumb">
                        <router-link to="/mentor/blog-details">
                          <img
                            class="img-fluid"
                            src="@/assets/img/website/blog/blog-thumb-04.jpg"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div class="post-info">
                        <h4>
                          <router-link to="/mentor/blog-details"
                            >The standard chunk of Lorem Ipsum used since
                            the</router-link
                          >
                        </h4>
                        <p>2 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div class="post-thumb">
                        <router-link to="/mentor/blog-details">
                          <img
                            class="img-fluid"
                            src="@/assets/img/website/blog/blog-thumb-05.jpg"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div class="post-info">
                        <h4>
                          <router-link to="/mentor/blog-details"
                            >generate Lorem Ipsum which looks
                            reasonable</router-link
                          >
                        </h4>
                        <p>1 Dec 2019</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /Latest Posts -->

              <!-- Categories -->
              <div class="card category-widget">
                <div class="card-header">
                  <h4 class="card-title">Blog Categories</h4>
                </div>
                <div class="card-body">
                  <ul class="categories">
                    <li>
                      <a href="#">HTML <span>(62)</span></a>
                    </li>
                    <li>
                      <a href="#">Css <span>(27)</span></a>
                    </li>
                    <li>
                      <a href="#">Java Script <span>(41)</span></a>
                    </li>
                    <li>
                      <a href="#">Photoshop <span>(16)</span></a>
                    </li>
                    <li>
                      <a href="#">Wordpress <span>(55)</span></a>
                    </li>
                    <li>
                      <a href="#">VB <span>(07)</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /Categories -->

              <!-- Tags -->
              <div class="card tags-widget">
                <div class="card-header">
                  <h4 class="card-title">Tags</h4>
                </div>
                <div class="card-body">
                  <ul class="tags">
                    <li><a href="#" class="tag">HTML</a></li>
                    <li><a href="#" class="tag">Css</a></li>
                    <li><a href="#" class="tag">Java Script</a></li>
                    <li><a href="#" class="tag">Jquery</a></li>
                    <li><a href="#" class="tag">Wordpress</a></li>
                    <li><a href="#" class="tag">Php</a></li>
                    <li><a href="#" class="tag">Angular js</a></li>
                    <li><a href="#" class="tag">React js</a></li>
                    <li><a href="#" class="tag">Vue js</a></li>
                    <li><a href="#" class="tag">Photoshop</a></li>
                    <li><a href="#" class="tag">Ajax</a></li>
                    <li><a href="#" class="tag">Json</a></li>
                    <li><a href="#" class="tag">C</a></li>
                    <li><a href="#" class="tag">C++</a></li>
                    <li><a href="#" class="tag">Vb</a></li>
                    <li><a href="#" class="tag">Vb.net</a></li>
                    <li><a href="#" class="tag">Asp.net</a></li>
                  </ul>
                </div>
              </div>
              <!-- /Tags -->
            </div>
            <!-- /Blog Sidebar -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
    <layout-footer></layout-footer>
  </div>
</template>
