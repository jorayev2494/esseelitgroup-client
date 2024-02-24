<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb1></breadcrumb1>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <sidebar></sidebar>
            </div>
          </div>
          <!-- /Sidebar -->

          <!-- Booking summary -->
          <div class="col-md-7 col-lg-8 col-xl-9">
            <h3 class="pb-3">Booking Summary</h3>
            <!-- Mentee List Tab -->
            <div class="tab-pane show active" id="mentee-list">
              <div class="card card-table">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>MENTEE LISTS</th>
                          <th>SCHEDULED DATE</th>
                          <th class="text-center">SCHEDULED TIMINGS</th>
                          <th class="text-center">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in bookings" :key="item.id">
                          <td>
                            <h2 class="table-avatar">
                              <router-link
                                to="/mentee/mentor-profile"
                                class="avatar avatar-sm me-2"
                                ><img
                                  class="avatar-img rounded-circle"
                                  :src="
                                    require(`@/assets/img/website/user/${item.image}`)
                                  "
                                  alt="User Image"
                              /></router-link>
                              <router-link to="/mentee/mentor-profile"
                                >{{ item.name
                                }}<span>{{ item.email }}</span></router-link
                              >
                            </h2>
                          </td>
                          <td>{{ item.scheduled_date }}</td>
                          <td class="text-center">
                            <span class="pending">{{
                              item.scheduled_timings
                            }}</span>
                          </td>
                          <td class="text-center">
                            <router-link
                              to="/mentor/mentee-profile"
                              class="btn btn-sm bg-info-light"
                              ><i class="far fa-eye"></i> View</router-link
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Mentee List Tab -->
          </div>
          <!-- /Booking summary -->
        </div>
      </div>
    </div>
    <!-- /Page Content -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import bookings from "@/assets/json/website/bookings.json";

export default {
  data() {
    return {
      bookings: bookings,
    };
  },
  methods: {},
};
</script>
