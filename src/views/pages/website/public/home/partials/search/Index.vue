<template>
  <!-- Search -->
  <div class="search-box mb-5">
    <form action="#">
      <div class="form-group search-info location-search location-search-four">
        <div class="col-10 col-md-10">
          <!-- <pre>{{ form }}</pre> -->
          <div class="form-group">
          <input type="text" class="form-control text-truncate key" v-model="form.search" :placeholder="$t('pages.index.header.search_placeholder_text')" />
          <!-- <input type="text" class="form-control city" placeholder=" City or Postalcode" /> -->
          </div>
        </div>

        <!-- <div class="col-4 col-md-4">
          <select id="search-county-select" class="form-control">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> -->

        <div class="col-2 col-md-2">

          <!-- <router-link to="/mentee/mentor-search" class="btn bg-search align-items-center d-flex justify-content-center">
            <i class="fa-solid fa-angle-right"></i>
          </router-link> -->

          <a href="#" class="btn bg-search align-items-center d-flex justify-content-center" @click.prevent="search">
            <i class="fa-solid fa-angle-right"></i>
          </a>

        </div>
      </div>
    </form>
  </div>
  <!-- /Search -->
  <!-- <div class="poular-search">
    <p>
      <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
    </p>
  </div> -->
</template>

<script setup>
  import useBehavior from './Behavior'

  const {
    form,

    search,
  } = useBehavior()

</script>

<style scoped>
  #search-county-select {
    height: 0px;
    padding-right: 0px;
    padding-left: 28px;
    border: none;
    background: transparent url('@/assets/img/icon/locate-blue.svg') no-repeat -3px 15px;
    box-shadow: none;
  }
</style>
