<template>
  <!-- Search -->
  <div class="search-box mb-5">
    <form action="#">
      <div class="form-group search-info location-search location-search-four">
        <div class="container">
          <div class="row">

            <div class="col-10 col-md-10 px-0">
              <div class="form-group">
                <input type="text" class="form-control text-truncate key" v-model="form.search" :placeholder="$t('pages.index.header.search_placeholder_text')" />
              </div>
            </div>

            <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 px-0">
              <div class="form-group">
                <a href="#" class="btn bg-search align-items-center d-flex justify-content-center mt-1" @click.prevent="search">
                  <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </form>

    <div class="poular-search">
      <p>
        <span>{{ $t('pages.index.header.popular_search') }} : </span>
        <span class="cursor-pointer" style="color: #C1E2FF;" v-for="(item, idx) in popularSearch" :key="idx" @click="popularSearchHandler(item)">
           <template v-if="popularSearch.length !== ++idx">{{ item }}, </template>
           <template v-else>{{ item }}</template>
        </span>
      </p>
    </div>

  </div>
  <!-- /Search -->
</template>

<script setup>
  import { defineProps } from "vue-router";
  import useBehavior from './Behavior'

  defineProps({
      popularSearch: {
        type: Array,
        default: () => ['Designer', 'Developer', 'Web', 'iOS', 'PHP'],
      },
  })

  const {
    form,
    popularSearchHandler,

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

  .popular-search {
    color: #C1E2FF;
  }
</style>
