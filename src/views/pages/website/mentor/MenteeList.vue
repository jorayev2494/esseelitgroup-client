<template>
  <div class="main-wrapper">
    <layout-header1></layout-header1>
    <breadcrumb3></breadcrumb3>
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
            <div class="row row-grid">
              <div
                class="col-md-6 col-lg-4 col-xl-3"
                v-for="item in menteelist"
                :key="item.id"
              >
                <div class="card widget-profile user-widget-profile">
                  <div class="card-body">
                    <div class="pro-widget-content">
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
                            <h5><b>Mentee ID : </b>{{ item.mentee_id }}</h5>
                            <h5 class="mb-0">
                              <i class="fas fa-map-marker-alt"></i>
                              {{ item.location }}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mentee-info">
                      <ul>
                        <li>
                          Phone <span>{{ item.phone }}</span>
                        </li>
                        <li>
                          Age <span>{{ item.age }}, {{ item.gender }}</span>
                        </li>
                        <li>
                          Blood Group <span>{{ item.blood_group }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="blog-pagination mt-4">
              <nav>
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1"
                      ><i class="fas fa-angle-double-left"></i
                    ></a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#"
                      >2 <span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"
                      ><i class="fas fa-angle-double-right"></i
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </div>
  <layout-footer></layout-footer>
</template>

<script>
import menteelist from "@/assets/json/website/menteelist.json";

export default {
  data() {
    return {
      menteelist: menteelist,
    };
  },
  methods: {},
};
</script>
