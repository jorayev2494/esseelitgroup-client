<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb11></breadcrumb11>
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
            <div class="doc-review review-listing">
              <!-- Review Listing -->
              <ul class="comments-list">
                <!-- Comment List -->
                <li>
                  <div class="comment">
                    <img
                      class="avatar rounded-circle"
                      alt="User Image"
                      src="@/assets/img/website/user/user.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author">Richard Wilson</span>
                        <span class="comment-date">Reviewed 2 Days ago</span>
                        <div class="review-count rating">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                      <p class="recommended">
                        <i class="far fa-thumbs-up"></i> I recommend the
                        consectetur
                      </p>
                      <p class="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. Curabitur non nulla sit amet nisl
                        tempus
                      </p>
                      <div class="comment-reply">
                        <a class="comment-btn" href="#">
                          <i class="fas fa-reply"></i> Reply
                        </a>
                        <p class="recommend-btn">
                          <span>Recommend?</span>
                          <a href="#" class="like-btn">
                            <i class="far fa-thumbs-up"></i> Yes
                          </a>
                          <a href="#" class="dislike-btn">
                            <i class="far fa-thumbs-down"></i> No
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Comment Reply -->
                  <ul class="comments-reply">
                    <!-- Comment Reply List -->
                    <li>
                      <div class="comment">
                        <img
                          class="avatar rounded-circle"
                          alt="User Image"
                          src="@/assets/img/website/user/user.jpg"
                        />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Dr. Darren Elder</span>
                            <span class="comment-date"
                              >Reviewed 3 Days ago</span
                            >
                          </div>
                          <p class="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div class="comment-reply">
                            <a class="comment-btn" href="#">
                              <i class="fas fa-reply"></i> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!-- /Comment Reply List -->
                  </ul>
                  <!-- /Comment Reply -->
                </li>
                <!-- /Comment List -->

                <!-- Comment List -->
                <li>
                  <div class="comment">
                    <img
                      class="avatar rounded-circle"
                      alt="User Image"
                      src="@/assets/img/website/user/user.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author">Travis Trimble</span>
                        <span class="comment-date">Reviewed 4 Days ago</span>
                        <div class="review-count rating">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                        </div>
                      </div>
                      <p class="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. Curabitur non nulla sit amet nisl
                        tempus
                      </p>
                      <div class="comment-reply">
                        <a class="comment-btn" href="#">
                          <i class="fas fa-reply"></i> Reply
                        </a>
                        <p class="recommend-btn">
                          <span>Recommend?</span>
                          <a href="#" class="like-btn">
                            <i class="far fa-thumbs-up"></i> Yes
                          </a>
                          <a href="#" class="dislike-btn">
                            <i class="far fa-thumbs-down"></i> No
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- /Comment List -->

                <!-- Comment List -->
                <li>
                  <div class="comment">
                    <img
                      class="avatar rounded-circle"
                      alt="User Image"
                      src="@/assets/img/website/user/user3.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author">Carl Kelly</span>
                        <span class="comment-date">Reviewed 5 Days ago</span>
                        <div class="review-count rating">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                        </div>
                      </div>
                      <p class="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. Curabitur non nulla sit amet nisl
                        tempus
                      </p>
                      <div class="comment-reply">
                        <a class="comment-btn" href="#">
                          <i class="fas fa-reply"></i> Reply
                        </a>
                        <p class="recommend-btn">
                          <span>Recommend?</span>
                          <a href="#" class="like-btn">
                            <i class="far fa-thumbs-up"></i> Yes
                          </a>
                          <a href="#" class="dislike-btn">
                            <i class="far fa-thumbs-down"></i> No
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- /Comment List -->
              </ul>
              <!-- /Comment List -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
    <layout-footer></layout-footer>
  </div>
</template>
