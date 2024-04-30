<template>
  <div class="row">
    <Announcement />
  </div>
  <div class="row">
    <div class="col-md-12 col-lg-4 dash-board-list blue">
      <div class="dash-widget">
        <div class="circle-bar">
          <div class="icon-col">
            <i class="fas fa-users"></i>
          </div>
        </div>
        <div class="dash-widget-info">
          <h3>23</h3>
          <h6>Members</h6>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-4 dash-board-list yellow">
      <div class="dash-widget">
        <div class="circle-bar">
          <div class="icon-col">
            <i class="fas fa-calendar-check"></i>
          </div>
        </div>
        <div class="dash-widget-info">
          <h3>33</h3>
          <h6>Appointments</h6>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-4 dash-board-list pink">
      <div class="dash-widget">
        <div class="circle-bar">
          <div class="icon-col">
            <i class="fas fa-wallet"></i>
          </div>
        </div>
        <div class="dash-widget-info">
          <h3>$14</h3>
          <h6>Total Earned</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <!-- <h4 class="mb-4">Mentee Lists</h4> -->
      <!-- <div class="card card-table">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>BASIC INFO</th>
                  <th>CREATED DATE</th>
                  <th class="text-center">TAGS</th>
                  <th class="text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in mentees" :key="item.id">
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
                      <router-link to="/mentee/mentor-profile">
                        {{ item.name
                        }}<span> {{ item.email }}</span></router-link
                      >
                    </h2>
                  </td>
                  <td>{{ item.created_date }}</td>
                  <td class="text-center">
                    <span
                      v-if="item.tags == 'pending'"
                      class="pending"
                      >{{ item.tags }}</span
                    >
                    <span
                      v-else-if="item.tags == 'accepted'"
                      class="accept"
                      >{{ item.tags }}</span
                    >
                    <span
                      v-else-if="item.tags == 'rejected'"
                      class="reject"
                      >{{ item.tags }}</span
                    >
                  </td>
                  <td class="text-center">
                    <router-link
                      to="/mentee/mentor-profile"
                      class="btn btn-sm bg-info-light"
                      ><i class="far fa-eye"></i> View</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Announcement from '../../../announcement/components/list/Index.vue'
import mentees from "@/assets/json/website/mentees.json";

export default {
  data() {
    return {
      mentees: mentees,
    };
  },
  components: {
    Announcement,
  },
};
</script>
