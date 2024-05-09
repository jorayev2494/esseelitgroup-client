<template>
  <div class="card p-2">
    <div class="row">

      <div class="col-md-10 col-lg-10 col-xl-10">
        <input class="form-control" type="search" v-model="form.search" :placeholder="$t('search.search_placeholder')" aria-label="Search">
      </div>

      <div class="col-md-2 col-2">
        <div class="sort-by w-100">
          <!-- <span class="sort-title">Sort by</span> -->
          <!-- <select class="form-control form-select" aria-label="Default select example">
            <option value="" selected disabled>{{ $t('search.sort') }}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { defineProps, onBeforeMount, toRefs } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    }
  })

  const mountQueryParamsSearch = () => {
    const queryParams = route.query;

    if ('search' in queryParams && 'search_by' in queryParams) {
      form.value.search = queryParams.search.trim();
      form.value.search_by = queryParams.search_by.trim();
    }
  }

  onBeforeMount(() => {
    mountQueryParamsSearch()
  })

  const {
    form,
  } = toRefs(props);

</script>
