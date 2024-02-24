<template>
  <!-- Most Trending  Courses -->
  <section
    class="section trending-courses trending-courses-three popular-course-three popular-course-five five-course-card"
  >
    <div class="container">
      <div class="section-header section-head-left aos" data-aos="fade-up">
        <div class="section-head-five">
          <h4><span></span>Our trending courses</h4>
          <h2>Featured Courses Of The Day</h2>
        </div>
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
              All Categories
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
              Design
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
              Development
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
              Marketing
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
          <IndexFiveTabContent />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <IndexFiveTabProfile />
        </div>
        <div
          class="tab-pane fade"
          id="pills-seo"
          role="tabpanel"
          aria-labelledby="pills-seo-tab"
        >
          <IndexFiveTabSeo />
        </div>
        <div
          class="tab-pane fade"
          id="pills-sales"
          role="tabpanel"
          aria-labelledby="pills-sales-tab"
        >
          <IndexFiveTabSales />
        </div>
      </div>
    </div>
  </section>
  <!-- Most Trending Courses -->
</template>
