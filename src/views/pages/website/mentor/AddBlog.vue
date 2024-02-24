<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb7></breadcrumb7>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <sidebar></sidebar>
            </div>
          </div>

          <div class="col-md-7 col-lg-8 col-xl-9 custom-edit-service">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h3 class="pb-3">Add Blog</h3>

                    <form>
                      <div class="service-fields mb-3">
                        <h4 class="heading-2">Service Information</h4>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <label
                                >Blog Title
                                <span class="text-danger">*</span></label
                              >
                              <input
                                class="form-control"
                                type="text"
                                value="Abacus Study for beginner - Part I"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="service-fields mb-3">
                        <h4 class="heading-2">Blog Category</h4>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label
                                >Category
                                <span class="text-danger">*</span></label
                              >
                              <select
                                class="form-control select"
                                name="category"
                              >
                                <option value="1">
                                  Abacus Study for beginner - Part I
                                </option>
                                <option value="2" selected="selected">
                                  Abacus Study for beginner - Part II
                                </option>
                                <option value="3">
                                  Abacus Study for beginner - Part III
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label
                                >Sub Category
                                <span class="text-danger">*</span></label
                              >
                              <select
                                class="form-control select"
                                name="subcategory"
                              >
                                <option value="1">
                                  Abacus Study for experienced - Part I
                                </option>
                                <option value="2" selected="selected">
                                  Abacus Study for experienced - Part II
                                </option>
                                <option value="3">
                                  Abacus Study for experienced - Part III
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="service-fields mb-3">
                        <h4 class="heading-2">Blog Details</h4>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <label
                                >Descriptions
                                <span class="text-danger">*</span></label
                              >
                              <textarea
                                id="about"
                                class="form-control service-desc"
                                name="about"
                              >
note.</textarea
                              >
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="service-fields mb-3">
                        <h4 class="heading-2">Blog Images</h4>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="service-upload">
                              <i class="fas fa-cloud-upload-alt"></i>
                              <span>Upload Service Images *</span>
                              <input
                                type="file"
                                name="images[]"
                                id="images"
                                multiple=""
                              />
                            </div>
                            <div id="uploadPreview">
                              <ul class="upload-wrap">
                                <li>
                                  <div class="upload-images">
                                    <img
                                      alt=""
                                      src="@/assets/img/website/blog/blog-thumb-01.jpg"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div class="upload-images">
                                    <img
                                      alt=""
                                      src="@/assets/img/website/blog/blog-thumb-02.jpg"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div class="upload-images">
                                    <img
                                      alt=""
                                      src="@/assets/img/website/blog/blog-thumb-03.jpg"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="submit-section">
                        <button
                          class="btn btn-primary submit-btn"
                          type="button"
                          @click="$router.push('/mentor/blog')"
                          name="form_submit"
                          value="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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
