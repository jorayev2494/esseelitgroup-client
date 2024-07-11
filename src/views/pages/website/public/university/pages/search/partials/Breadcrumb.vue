<template>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-12 col-12">
          <!-- <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Search</li>
            </ol>
          </nav> -->

          <!-- <pre>{{ paginator.totalRows }}</pre> -->

          <h2 class="breadcrumb-title">{{ $t('search.matches_found', { count: paginator.totalRows.value }) }}</h2>
        </div>

      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    paginator: {
      type: Object,
      required: true,
    },
    search: {
      type: Object,
      required: true,
    },
  })

</script>
