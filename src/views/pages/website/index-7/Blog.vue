<template>
  <!-- Blog Section -->
  <section class="section section-blogs-eight">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-eight text-center aos" data-aos="fade-up">
        <span>LATEST</span>
        <h2>Blogs & News</h2>
        <p class="sub-title">
          Are you looking to join online institutions? Now it's very simple,
          Sign up with mentoring
        </p>
        <div class="sec-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- /Section Header -->

      <div class="row blog-grid-row justify-content-center">
        <div class="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
          <!-- Blog Post -->
          <div class="blog-card">
            <div class="blog-card-image">
              <router-link to="/mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-01.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-card-content">
              <div class="blog-month">04 <span>Dec</span></div>
              <ul class="meta-item-eight">
                <li>
                  <div class="post-author-eight">
                    <router-link to="/mentor/blog-details"><span>Tyrone Roberts</span></router-link>
                  </div>
                </li>
              </ul>
              <h3 class="blog-title-eight">
                <router-link to="/mentor/blog-details"
                  >What is Lorem Ipsum? Lorem Ipsum is simply</router-link
                >
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
              <router-link to="/mentor/blog-details" class="read">Read more</router-link>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>

        <div class="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
          <!-- Blog Post -->
          <div class="blog-card">
            <div class="blog-card-image">
              <router-link to="/mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-16.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-card-content">
              <div class="blog-month">05 <span>Jan</span></div>
              <ul class="meta-item-eight">
                <li>
                  <div class="post-author-eight">
                    <router-link to="/mentor/blog-details"><span>Brittany Garcia</span></router-link>
                  </div>
                </li>
              </ul>
              <h3 class="blog-title-eight">
                <router-link to="/mentor/blog-details"
                  >Contrary to popular belief, Lorem Ipsum is</router-link
                >
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
              <router-link to="/mentor/blog-details" class="read">Read more</router-link>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>

        <div class="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
          <!-- Blog Post -->
          <div class="blog-card">
            <div class="blog-card-image">
              <router-link to="/mentor/blog-details"
                ><img
                  class="img-fluid"
                  src="@/assets/img/blog/blog-17.jpg"
                  alt="Post Image"
              /></router-link>
            </div>
            <div class="blog-card-content">
              <div class="blog-month">06 <span>May</span></div>
              <ul class="meta-item-eight">
                <li>
                  <div class="post-author-eight">
                    <router-link to="/mentor/blog-details"><span>Allen Davis</span></router-link>
                  </div>
                </li>
              </ul>
              <h3 class="blog-title-eight">
                <router-link to="/mentor/blog-details"
                  >The standard chunk of Lorem Ipsum used</router-link
                >
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
              <router-link to="/mentor/blog-details" class="read">Read more</router-link>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>
      </div>
      <div class="view-all text-center aos" data-aos="fade-up">
        <router-link to="/blog/blog-list" class="btn btn-primary btn-view">View All</router-link>
      </div>
    </div>
  </section>
  <!-- /Blog Section -->
</template>
