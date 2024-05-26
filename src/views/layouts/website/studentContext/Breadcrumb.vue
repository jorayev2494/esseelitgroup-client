<template>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-1">{{ $t($route.meta.title) }}</h2>
          <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb" v-if="$route.meta.breadcrumbs">
              <template v-for="({ label, route }, idx) in $route.meta.breadcrumbs" :key="idx">
                <li class="breadcrumb-item" v-if="++idx !== $route.meta.breadcrumbs.length">
                  <router-link :to="$tMakeRoute(route)">{{ $t(label) }}</router-link>
                </li>
                <li class="breadcrumb-item active" v-else>{{ $t(label) }}</li>
              </template>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->
</template>



<script setup>

</script>

<style lang="scss" scoped>

</style>
