<template>
  <div class="main-wrapper main-wrapper-three">
    <layout-header-four />
    <Breadcrumb :paginator="paginator" />

    <!-- Page Content -->
    <div class="content">
      <div class="container">
        <div class="row">

          <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            <!-- <pre>{{ filterForm }}</pre> -->
            <Sidebar :filters="filters" :form="filterForm" @search="search" />
          </div>

          <!-- <pre>{{ filters }}</pre> -->

          <div class="col-md-12 col-lg-8 col-xl-9">

            <div class="col-md-12 col-lg-12 col-xl-12">
              <Search :form="searchForm" />
            </div>

            <!-- Mentor Widget -->
            <template v-if="searchResults.length">
              <div class="card" v-for="(item, idx) in searchResults" :key="idx">
                <div class="card-body">
                  <div class="mentor-widget">
                    <div class="user-info-left">

                      <div class="mentor-img">
                        <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: item.uuid } })">
                          <img :src="item.logo" class="img-fluid" alt="User Image" />
                        </router-link>
                      </div>

                      <div class="user-info-cont">
                        <h4 class="usr-name">
                          <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: item.uuid } })">
                            {{ item.name }}
                          </router-link>
                        </h4>

                        <p class="mentor-type">{{ item.label }}</p>

                        <!-- <div class="rating">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating">{{ item.ratings }}</span>
                        </div> -->

                        <div class="mentor-details" v-if="item.country">
                          <p class="user-location">
                            <i class="fas fa-map-marker-alt"></i>
                            {{ item.country?.value }}, {{ item.city?.value }}
                          </p>
                        </div>

                      </div>
                    </div>

                    <div class="user-info-right">

                      <div class="user-infos">
                        <ul>
                          <li>
                            <span class="text-success" v-if="item.is_on_the_country_list">
                              <i class="fas fa-check-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                              Has in country list
                            </span>

                            <span v-else>
                              <i class="fas fa-minus-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                              Has not in country list
                            </span>
                          </li>

                          <li>
                            <i class="far fa-comment"></i>
                            15
                          </li>
                          <li v-if="item.country">
                            <i class="fas fa-map-marker-alt"></i>
                            {{ item.country?.value }}, {{ item.city?.value }}
                          </li>
                          <!-- <li>
                            <i class="far fa-money-bill-alt"></i>
                            $300 -$1000
                            <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
                          </li> -->

                          
                        </ul>
                      </div>

                      <div class="mentor-booking">
                        <router-link class="apt-btn" :to="$tMakeRoute({ name: 'university-show', params: { uuid: item.uuid } })">{{ $t('system.apply_now') }}</router-link>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <center>
                <p class="text-secondary p-2">Universities not fund</p>
              </center>
            </template>

            <div class="load-more text-center" v-show="searchResults.length">
              <button
                :key="paginator.page"
                type="submit"
                class="btn btn-primary btn-sm"
                :disabled="paginator.isLastPage.value"
                @click="paginator.loadNextPage()"
              >{{ $t('search.load_more') }}</button>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- /Page Content -->

    <layout-footer></layout-footer>
  </div>
</template>

<script setup>

  import useIndex from './useIndex';
  import LayoutHeaderFour from "../../../../../../layouts/website/HeaderFour.vue";
  import Breadcrumb from './partials/Breadcrumb.vue';
  import Sidebar from './partials/Sidebar/Index.vue';
  import Search from './partials/Search.vue';
  
  const {
    searchForm,
    filterForm,
    filters,
    searchResults,
    paginator,

    search,
  } = useIndex();

</script>
