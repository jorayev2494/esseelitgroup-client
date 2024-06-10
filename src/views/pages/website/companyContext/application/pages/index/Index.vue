<template>
  <div>
    <WidgetStatusValues :clear-item="{ label: 'system.all' }" @click="statusSelected" @clear="clearSelected" />
    <Search :form="searchForm" @search="loadFilters" placeholder="companyContext.application.search_placeholder_full_name" class="mb-3" />
    <TableFilter :filters="filters" @filter="loadFilters" class="mb-3" />

    <!-- <div class="mb-2">
      <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'company-student-create' })">
        <i class="fa fa-plus"></i> {{ $t('system.create') }}
      </router-link>
    </div> -->

    <vue3-datatable
      :rows="items"
      :columns="columns"
      :loading="loading"
      :totalRows="paginator.total.value"
      :pageSize="paginator.perPage.value"
      :showNumbersCount="3"
      :pageSizeOptions="paginator.perPageOptions"
      :isServerMode="true"

      skin="bh-table-hover"

      @change="changeServer"
    >
      <template #student="data">
        <div class="d-flex flex-row" v-if="data.value.student">

          <div class="avatar-showcase me-3" v-if="data.value.student.avatar">
            <div class="avatars">
              <div class="avatar">
                <img class="img-50 avatar-img rounded b-r-15" :src="data.value.student.avatar.url" :alt="data.value.student.avatar.url">
              </div>
            </div>
          </div>

          <div class="mt-1">
            <div>
              <span class="text-dark">{{ data.value.student.full_name }}</span>
            </div>
            <div>
              <span class="text-muted">{{ data.value.student.email }}</span>
            </div>
          </div>

        </div>
      </template>

      <template #country="data">
        <div class="d-flex flex-row" v-if="data.value.country">
          <p class="h3">
            <i :class="`fi fi-${data.value.country.iso}`" width="300"></i>
          </p>
          <div class="m-2">{{ data.value.country.value }}</div>
        </div>
      </template>

      <template #language="data">
        <div class="d-flex flex-row" v-if="data.value.language">
          <p class="h3">
            <i :class="`fi fi-${data.value.language.iso}`" width="300"></i>
          </p>
          <div class="m-2">{{ data.value.language.value }}</div>
        </div>
      </template>

      <template #university="data">
        <div class="d-flex flex-row" v-if="data.value.university">
          <img :src="data.value.university.logo.url" alt="user-profile" width="35" />
          <div class="m-2">{{ data.value.university.name }}</div>
        </div>
      </template>

      <template #status="data">
        <span class="badge" :style="useApplicationStatusStyle(data.value.status.value)">
          {{ data.value.status.value.value }}
        </span>
      </template>

      <template #actions="data">
        <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'company-application-show', params: { uuid: data.value.uuid } })">
          <i class="fa fa-eye"></i>
          <!-- {{ $t('system.show') }} -->
        </router-link>

        <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-application-edit', params: { uuid: data.value.uuid } })">
          <i class="fa fa-edit"></i>
          <!-- {{ $t('system.edit') }} -->
        </router-link>
        
        <span class="btn btn-sm bg-danger-light" @click="remove(data)">
          <i class="fa fa-trash"></i>
          <!-- {{ $t('system.delete') }} -->
        </span>
      </template>

    </vue3-datatable>

  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";
  import Vue3Datatable from '@bhplugin/vue3-datatable'
  import WidgetStatusValues from '../../components/widgetList/Index.vue'
  import Search from '@/views/pages/components/search/Index.vue'
  import TableFilter from '@/views/pages/components/tableFilter/Index.vue'
  
  const {
    searchForm,
    items,
    columns,
    paginator,
    filters,

    remove,
    changeServer,
    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    loadFilters,
  } = useBehavior()  
</script>
