<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb10></breadcrumb10>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <sidebar></sidebar>
            </div>
          </div>
          <!-- /Profile Sidebar -->

          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <!-- Profile Settings Form -->
                <form>
                  <div class="row form-row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <div class="change-avatar">
                          <div class="profile-img">
                            <img
                              src="@/assets/img/website/user/user.jpg"
                              alt="User Image"
                            />
                          </div>
                          <div class="upload-img">
                            <div class="change-photo-btn">
                              <span
                                ><i class="fa fa-upload"></i> Upload Photo</span
                              >
                              <input type="file" class="upload" />
                            </div>
                            <small class="form-text text-muted"
                              >Allowed JPG, GIF or PNG. Max size of 2MB</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Jonathan"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" value="Doe" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Date of Birth</label>
                        <div class="cal-icon">
                          <datepicker />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Blood Group</label>
                        <select class="form-control select">
                          <option>A-</option>
                          <option>A+</option>
                          <option>B-</option>
                          <option>B+</option>
                          <option>AB-</option>
                          <option>AB+</option>
                          <option>O-</option>
                          <option>O+</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Email ID</label>
                        <input
                          type="email"
                          class="form-control"
                          value="jonathandoe@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Mobile</label>
                        <input
                          type="text"
                          value="+1 202-555-0125"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          class="form-control"
                          value="806 Twin Willow Lane"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Old Forge"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>State</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Newyork"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Zip Code</label>
                        <input type="text" class="form-control" value="13420" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Country</label>
                        <input
                          type="text"
                          class="form-control"
                          value="United States"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button type="submit" class="btn btn-primary submit-btn">
                      Save Changes
                    </button>
                  </div>
                </form>
                <!-- /Profile Settings Form -->
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
import Datepicker from "../datepicker";
export default {
  components: {
    datepicker: Datepicker,
  },
};
</script>
