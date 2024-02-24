<template>
  <!-- Most popular course -->
  <section class="section trending-courses trending-courses-three">
    <div class="container">
      <div class="h-three tab-panel">
        <div class="section-header h-three aos" data-aos="fade-up">
          <h2>Our Trending Courses</h2>
          <div class="heading-bar">
            <span></span>
            <span></span>
          </div>
          <p class="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum
          </p>
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
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade active show"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
        <IndexFourTabContent/>
         
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
         <IndexFourTabProfile/>
        </div>

        <div
          class="tab-pane fade"
          id="pills-seo"
          role="tabpanel"
          aria-labelledby="pills-seo-tab"
        >
         <IndexFourTabSeo/>
        </div>
        <div
          class="tab-pane fade"
          id="pills-sales"
          role="tabpanel"
          aria-labelledby="pills-sales-tab"
        >
         <IndexFourTabSales/>
        </div>
      </div>
    </div>
  </section>
  <!-- /Most popular course -->
</template>
