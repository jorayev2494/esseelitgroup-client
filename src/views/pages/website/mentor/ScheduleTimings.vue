<template>
  <div>
    <div class="main-wrapper">
      <layout-header1></layout-header1>
      <breadcrumb2></breadcrumb2>
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
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Schedule Timings</h4>
                      <div class="profile-box">
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label>Timing Slot Duration</label>
                              <vue-select :options="options" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="card schedule-widget mb-0">
                              <!-- Schedule Header -->
                              <div class="schedule-header">
                                <!-- Schedule Nav -->
                                <div class="schedule-nav">
                                  <ul class="nav nav-tabs nav-justified">
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_sunday"
                                        >Sunday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link active"
                                        data-bs-toggle="tab"
                                        href="#slot_monday"
                                        >Monday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_tuesday"
                                        >Tuesday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_wednesday"
                                        >Wednesday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_thursday"
                                        >Thursday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_friday"
                                        >Friday</a
                                      >
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        class="nav-link"
                                        data-bs-toggle="tab"
                                        href="#slot_saturday"
                                        >Saturday</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                                <!-- /Schedule Nav -->
                              </div>
                              <!-- /Schedule Header -->

                              <!-- Schedule Content -->
                              <div class="tab-content schedule-cont">
                                <!-- Sunday Slot -->
                                <div id="slot_sunday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Sunday Slot -->

                                <!-- Monday Slot -->
                                <div
                                  id="slot_monday"
                                  class="tab-pane fade show active"
                                >
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#edit_time_slot"
                                      ><i class="fa fa-edit mr-1"></i>Edit</a
                                    >
                                  </h4>

                                  <!-- Slot List -->
                                  <div class="user-times">
                                    <div class="user-slot-list">
                                      8:00 pm - 11:30 pm
                                      <a
                                        href="javascript:void(0)"
                                        class="delete_schedule"
                                      >
                                        <i class="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div class="user-slot-list">
                                      11:30 pm - 1:30 pm
                                      <a
                                        href="javascript:void(0)"
                                        class="delete_schedule"
                                      >
                                        <i class="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div class="user-slot-list">
                                      3:00 pm - 5:00 pm
                                      <a
                                        href="javascript:void(0)"
                                        class="delete_schedule"
                                      >
                                        <i class="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div class="user-slot-list">
                                      6:00 pm - 11:00 pm
                                      <a
                                        href="javascript:void(0)"
                                        class="delete_schedule"
                                      >
                                        <i class="fa fa-times"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <!-- /Slot List -->
                                </div>
                                <!-- /Monday Slot -->

                                <!-- Tuesday Slot -->
                                <div id="slot_tuesday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Tuesday Slot -->

                                <!-- Wednesday Slot -->
                                <div id="slot_wednesday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Wednesday Slot -->

                                <!-- Thursday Slot -->
                                <div id="slot_thursday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Thursday Slot -->

                                <!-- Friday Slot -->
                                <div id="slot_friday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Friday Slot -->

                                <!-- Saturday Slot -->
                                <div id="slot_saturday" class="tab-pane fade">
                                  <h4
                                    class="card-title d-flex justify-content-between"
                                  >
                                    <span>Time Slots</span>
                                    <a
                                      class="edit-link"
                                      data-bs-toggle="modal"
                                      href="#add_time_slot"
                                      ><i class="fa fa-plus-circle"></i> Add
                                      Slot</a
                                    >
                                  </h4>
                                  <p class="text-muted mb-0">Not Available</p>
                                </div>
                                <!-- /Saturday Slot -->
                              </div>
                              <!-- /Schedule Content -->
                            </div>
                          </div>
                        </div>
                      </div>
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
    <!-- Add Time Slot Modal -->
    <div class="modal fade custom-modal" id="add_time_slot">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Time Slots</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="hours-info">
                <div class="row form-row hours-cont">
                  <div class="col-12 col-md-10">
                    <div class="row form-row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Start Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>End Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="add-more mb-3">
                <a href="javascript:void(0);" class="add-hours"
                  ><i class="fa fa-plus-circle"></i> Add More</a
                >
              </div>
              <div class="submit-section text-center">
                <button type="submit" class="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Time Slot Modal -->

    <!-- Edit Time Slot Modal -->
    <div class="modal fade custom-modal" id="edit_time_slot">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Time Slots</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="hours-info">
                <div class="row form-row hours-cont">
                  <div class="col-12 col-md-10">
                    <div class="row form-row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Start Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>End Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row form-row hours-cont">
                  <div class="col-12 col-md-10">
                    <div class="row form-row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Start Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>End Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-2">
                    <label class="d-md-block d-sm-none d-none">&nbsp;</label
                    ><a href="#" class="btn btn-danger trash"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </div>
                </div>

                <div class="row form-row hours-cont">
                  <div class="col-12 col-md-10">
                    <div class="row form-row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Start Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>End Time</label>
                          <select class="form-control">
                            <option>Select</option>
                            <option>12.00 am</option>
                            <option>1.00 am</option>
                            <option>2.00 am</option>
                            <option>3.00 am</option>
                            <option>4.00 am</option>
                            <option>5.00 am</option>
                            <option>6.00 am</option>
                            <option>7.00 am</option>
                            <option>8.00 am</option>
                            <option>9.00 am</option>
                            <option>10.00 am</option>
                            <option>11.00 am</option>
                            <option>12.00 pm</option>
                            <option>1.00 pm</option>
                            <option>2.00 pm</option>
                            <option>3.00 pm</option>
                            <option>4.00 pm</option>
                            <option>5.00 pm</option>
                            <option>6.00 pm</option>
                            <option>7.00 pm</option>
                            <option>8.00 pm</option>
                            <option>9.00 pm</option>
                            <option>10.00 pm</option>
                            <option>11.00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-2">
                    <label class="d-md-block d-sm-none d-none">&nbsp;</label
                    ><a href="#" class="btn btn-danger trash"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div class="add-more mb-3">
                <a href="javascript:void(0);" class="add-hours"
                  ><i class="fa fa-plus-circle"></i> Add More</a
                >
              </div>
              <div class="submit-section text-center">
                <button type="submit" class="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Edit Time Slot Modal -->
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from "vue";
export default {
  data() {
    return {
      options: ["Select", "15 mins", "30 mins", "42 mins", "1 Hour"],
    };
  },
  setup() {
    onMounted(() => {
      $(".hours-info").on("click", ".trash", function () {
        $(this).closest(".hours-cont").remove();
        return false;
      });

      $(".add-hours").on("click", function () {
        var hourscontent =
          '<div class="row form-row hours-cont">' +
          '<div class="col-12 col-md-10">' +
          '<div class="row form-row">' +
          '<div class="col-12 col-md-6">' +
          '<div class="form-group">' +
          "<label>Start Time</label>" +
          '<select class="form-control">' +
          "<option>Select</option>" +
          "<option>12.00 am</option>" +
          "<option>1.00 am</option>" +
          "<option>2.00 am</option>" +
          "<option>3.00 am</option>" +
          "<option>4.00 am</option>" +
          "<option>5.00 am</option>" +
          "<option>6.00 am</option>" +
          "<option>7.00 am</option>" +
          "<option>8.00 am</option>" +
          "<option>9.00 am</option>" +
          "<option>10.00 am</option>" +
          "<option>11.00 am</option>" +
          "<option>1.00 pm</option>" +
          "<option>2.00 pm</option>" +
          "<option>3.00 pm</option>" +
          "<option>4.00 pm</option>" +
          "<option>5.00 pm</option>" +
          "<option>6.00 pm</option>" +
          "<option>7.00 pm</option>" +
          "<option>8.00 pm</option>" +
          "<option>9.00 pm</option>" +
          "<option>10.00 pm</option>" +
          "<option>11.00 pm</option>" +
          "</select>" +
          "</div>" +
          "</div>" +
          '<div class="col-12 col-md-6">' +
          '<div class="form-group">' +
          "<label>End Time</label>" +
          '<select class="form-control">' +
          "<option>Select</option>" +
          "<option>12.00 am</option>" +
          "<option>1.00 am</option>" +
          "<option>2.00 am</option>" +
          "<option>3.00 am</option>" +
          "<option>4.00 am</option>" +
          "<option>5.00 am</option>" +
          "<option>6.00 am</option>" +
          "<option>7.00 am</option>" +
          "<option>8.00 am</option>" +
          "<option>9.00 am</option>" +
          "<option>10.00 am</option>" +
          "<option>11.00 am</option>" +
          "<option>1.00 pm</option>" +
          "<option>2.00 pm</option>" +
          "<option>3.00 pm</option>" +
          "<option>4.00 pm</option>" +
          "<option>5.00 pm</option>" +
          "<option>6.00 pm</option>" +
          "<option>7.00 pm</option>" +
          "<option>8.00 pm</option>" +
          "<option>9.00 pm</option>" +
          "<option>10.00 pm</option>" +
          "<option>11.00 pm</option>" +
          "</select>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
          "</div>";

        $(".hours-info").append(hourscontent);
        return false;
      });
    });
  },
};
</script>
