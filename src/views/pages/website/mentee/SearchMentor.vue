<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb12></breadcrumb12>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <!-- Search Filter -->
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0">Search Filter</h4>
                </div>
                <div class="card-body">
                  <div class="filter-widget">
                    <div class="cal-icon">
                      <datepicker />
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" checked />
                        <span class="checkmark"></span> Male
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span class="checkmark"></span> Female
                      </label>
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Select Courses</h4>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span class="checkmark"></span> Digital Marketer
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span class="checkmark"></span> UNIX, Calculus,
                        Trigonometry
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Computer Programming
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> ASP.NET,Computer Gaming
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> HTML, Css
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> VB, VB.net
                      </label>
                    </div>
                  </div>
                  <div class="btn-search">
                    <button type="button" class="btn btn-block w-100">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <!-- /Search Filter -->
            </div>
          </div>

          <div class="col-md-12 col-lg-8 col-xl-9">
            <!-- Mentor Widget -->
            <div class="card" v-for="item in searchresults" :key="item.id">
              <div class="card-body">
                <div class="mentor-widget">
                  <div class="user-info-left">
                    <div class="mentor-img">
                      <router-link to="/mentee/mentor-profile">
                        <img
                          :src="
                            require(`@/assets/img/website/user/${item.image}`)
                          "
                          class="img-fluid"
                          alt="User Image"
                        />
                      </router-link>
                    </div>
                    <div class="user-info-cont">
                      <h4 class="usr-name">
                        <router-link to="/mentee/mentor-profile">{{
                          item.mentor_name
                        }}</router-link>
                      </h4>
                      <p class="mentor-type">{{ item.speciallist }}</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">{{
                          item.ratings
                        }}</span>
                      </div>
                      <div class="mentor-details">
                        <p class="user-location">
                          <i class="fas fa-map-marker-alt"></i>
                          {{ item.location1 }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="user-info-right">
                    <div class="user-infos">
                      <ul>
                        <li>
                          <i class="far fa-comment"></i>{{ item.feedback }}
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {{ item.location2 }}
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> {{ item.fees }}
                          <i
                            class="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                    </div>
                    <div class="mentor-booking">
                      <router-link class="apt-btn" to="/booking"
                        >Book Appointment</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Mentor Widget -->
            <div class="load-more text-center">
              <a class="btn btn-primary btn-sm" href="javascript:void(0);"
                >Load More</a
              >
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
import searchresults from "@/assets/json/website/searchresults.json";
import Datepicker from "../datepicker";

export default {
  data() {
    return {
      searchresults: searchresults,
      selected: new Date(),
    };
  },
  components: {
    datepicker: Datepicker,
  },
  methods: {},
};
</script>
