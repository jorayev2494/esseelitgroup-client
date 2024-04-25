<template>
  <div class="main-wrapper">
    <Header />
    <Breadcrumb></Breadcrumb>
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-lg-3 col-xl-2 theiaStickySidebar">
            <div class="stickysidebar">
              <Sidebar />
            </div>
          </div>

          <div class="col-md-8 col-lg-9 col-xl-10">
            <div class="row">
              <router-view></router-view>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- /Page Content -->
    <Footer />
  </div>
</template>

<script setup>
  import Header from './Header.vue'
  import Breadcrumb from './Breadcrumb.vue'
  import Sidebar from './partials/Sidebar/Index.vue'
  import Footer from './Footer.vue'
</script>
