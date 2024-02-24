<template>
  <!-- Blog Section -->
  <section class="section section-blogs">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center aos" data-aos="fade-up">
        <span>IMPORTANT</span>
        <h2>Blogs & News</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <!-- /Section Header -->

      <div class="row blog-grid-row justify-content-center">
        <div class="col-md-6 col-lg-4 col-sm-12">
          <!-- Blog Post -->
          <div class="blog grid-blog aos" data-aos="fade-up">
            <div class="blog-image">
              <router-link to="mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-01.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-content">
              <ul class="entry-meta meta-item">
                <li>
                  <div class="post-author">
                    <router-link to="mentor/blog-details"
                      ><span>Tyrone Roberts</span></router-link
                    >
                  </div>
                </li>
                <li><i class="far fa-clock"></i> 4 Dec 2019</li>
              </ul>
              <h3 class="blog-title">
                <router-link to="mentor/blog-details"
                  >What is Lorem Ipsum? Lorem Ipsum is simply</router-link
                >
              </h3>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>
        <div class="col-md-6 col-lg-4 col-sm-12">
          <!-- Blog Post -->
          <div class="blog grid-blog aos" data-aos="fade-up">
            <div class="blog-image">
              <router-link to="mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-02.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-content">
              <ul class="entry-meta meta-item">
                <li>
                  <div class="post-author">
                    <router-link to="mentor/blog-details"
                      ><span>Brittany Garcia</span></router-link
                    >
                  </div>
                </li>
                <li><i class="far fa-clock"></i> 3 Dec 2019</li>
              </ul>
              <h3 class="blog-title">
                <router-link to="mentor/blog-details"
                  >Contrary to popular belief, Lorem Ipsum is</router-link
                >
              </h3>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>
        <div class="col-md-6 col-lg-4 col-sm-12">
          <!-- Blog Post -->
          <div class="blog grid-blog aos" data-aos="fade-up">
            <div class="blog-image">
              <router-link to="mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-04.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-content">
              <ul class="entry-meta meta-item">
                <li>
                  <div class="post-author">
                    <router-link to="mentor/blog-details"
                      ><span>William Lawrence</span></router-link
                    >
                  </div>
                </li>
                <li><i class="far fa-clock"></i> 2 Dec 2019</li>
              </ul>
              <h3 class="blog-title">
                <router-link to="mentor/blog-details"
                  >The standard Lorem Ipsum passage, used</router-link
                >
              </h3>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>
      </div>
      <div class="view-all text-center aos" data-aos="fade-up">
        <router-link to="blog/blog-list" class="btn btn-primary view-all"
          >View All Blogs</router-link
        >
      </div>
    </div>
  </section>
  <!-- /Blog Section -->
</template>
