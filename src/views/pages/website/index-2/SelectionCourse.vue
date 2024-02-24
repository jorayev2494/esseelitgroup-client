<template>
  <!-- Selection Cources -->
  <section class="section trending-courses selection-cource">
    <div class="container">
      <div class="section-header section-head-one aos" data-aos="fade-up">
        <h2>A Broad Selection Of Courses</h2>
        <div class="title-bar">
          <img src="@/assets/img/icon/index-title-bar.svg" alt="" />
        </div>
        <p class="sub-title">
          We collect reviews from our users so you can get an honest opinion of
          what an experience with our website are really like!
        </p>
      </div>
      <div class="broad-course-tab" data-aos="fade-up">
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
          <TabContent />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <TabProfile />
        </div>
        <div
          class="tab-pane fade"
          id="pills-seo"
          role="tabpanel"
          aria-labelledby="pills-seo-tab"
        >
          <TabSeo />
        </div>
        <div
          class="tab-pane fade"
          id="pills-sales"
          role="tabpanel"
          aria-labelledby="pills-sales-tab"
        >
          <TabSales />
        </div>
        <div
          class="tab-pane fade"
          id="pills-java"
          role="tabpanel"
          aria-labelledby="pills-java-tab"
        >
          <TabJava />
        </div>
        <div
          class="tab-pane fade"
          id="pills-it"
          role="tabpanel"
          aria-labelledby="pills-it-tab"
        >
          <TabIt />
        </div>
      </div>
    </div>
  </section>
  <!-- /Selection Cources -->
</template>

