<template>
  <div>
    <div class="main-wrapper">
      <layout-header1></layout-header1>
      <breadcrumb24></breadcrumb24>
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
              <div class="appointments">
                <!-- Appointment List -->
                <div
                  class="appointment-list"
                  v-for="item in appointments"
                  :key="item.id"
                >
                  <div class="profile-info-widget">
                    <router-link
                      to="/mentor/mentee-profile"
                      class="booking-user-img"
                    >
                      <img
                        :src="
                          require(`@/assets/img/website/user/${item.image}`)
                        "
                        alt="User Image"
                      />
                    </router-link>
                    <div class="profile-det-info">
                      <h3>
                        <router-link to="/mentor/mentee-profile">{{
                          item.name
                        }}</router-link>
                      </h3>
                      <div class="mentee-details">
                        <h5>
                          <i class="far fa-clock"></i>{{ item.appt_date }}
                        </h5>
                        <h5>
                          <i class="fas fa-map-marker-alt"></i
                          >{{ item.location }}
                        </h5>
                        <h5>
                          <i class="fas fa-envelope"></i>{{ item.location }}
                        </h5>
                        <h5 class="mb-0">
                          <i class="fas fa-phone"></i>{{ item.phone }}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="appointment-action">
                    <a
                      href="#"
                      class="btn btn-sm bg-info-light"
                      data-bs-toggle="modal"
                      data-target="#appt_details"
                    >
                      <i class="far fa-eye"></i> View
                    </a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-sm bg-success-light"
                    >
                      <i class="fas fa-check"></i> Accept
                    </a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-sm bg-danger-light"
                    >
                      <i class="fas fa-times"></i> Cancel
                    </a>
                  </div>
                </div>
                <!-- /Appointment List -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
      <layout-footer></layout-footer>
    </div>
    <!-- Appointment Details Modal -->
    <div class="modal fade custom-modal" id="appt_details">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Appointment Details</h5>
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
            <ul class="info-details">
              <li>
                <div class="details-header">
                  <div class="row">
                    <div class="col-md-6">
                      <span class="title">#APT0001</span>
                      <span class="text">21 Oct 2019 10:00 AM</span>
                    </div>
                    <div class="col-md-6">
                      <div class="text-right">
                        <button
                          type="button"
                          class="btn bg-success-light btn-sm"
                          id="topup_status"
                        >
                          Completed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span class="title">Status:</span>
                <span class="text">Completed</span>
              </li>
              <li>
                <span class="title">Confirm Date:</span>
                <span class="text">29 Jun 2019</span>
              </li>
              <li>
                <span class="title">Paid Amount</span>
                <span class="text">$450</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /Appointment Details Modal -->
  </div>
</template>
<script>
import appointments from "@/assets/json/website/appointments.json";

export default {
  data() {
    return {
      appointments: appointments,
    };
  },
  methods: {},
};
</script>
