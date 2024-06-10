<template>
  <div>
    <WidgetStatusValues :clear-item="{ label: 'system.all' }" @click="statusSelected" @clear="clearSelected" />
    <Search :form="searchForm" @search="loadFilters" placeholder="companyContext.application.search_placeholder_full_name" class="mb-3" />
    <TableFilter :filters="filters" @filter="loadFilters" class="mb-3" />

    <div class="mb-2">
      <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'company-student-create' })">
        <i class="fa fa-plus"></i> {{ $t('system.create') }}
      </router-link>
    </div>

    <vue3-datatable
      :rows="items"
      :columns="columns"
      :totalRows="items.length"
      :loading="loader.loading"
      :pageSize="paginator.perPage.value"
      :showNumbersCount="3"
      :pageSizeOptions="paginator.perPageOptions"
      :isServerMode="true"
      @change="changeServer">

      <template #full_name="data">
        <div class="d-flex flex-row">

          <div class="avatar-showcase me-3" v-if="data.value.avatar">
            <div class="avatars">
              <div class="avatar">
                <img class="img-50 avatar-img rounded b-r-15" :src="data.value.avatar.url" :alt="data.value.avatar.url">
              </div>
            </div>
          </div>

          <div class="mt-1">
            <div>
              <span class="text-dark">{{ data.value.full_name }}</span>
            </div>
            <div>
              <span class="text-muted">{{ data.value.email }}</span>
            </div>
          </div>

        </div>
      </template>

      <template #application_language="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ language }, idx) of data.value.applications" :key="idx">
            <div class="d-flex flex-row" v-if="language">
              <p class="h3">
                <i :class="`fi fi-${language.iso}`" width="300"></i>
              </p>
              <div class="m-2">{{ language.value }}</div>
            </div>
          </template>
        </div>
      </template>

      <template #application_country="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ country }, idx) of data.value.applications" :key="idx">
            <div class="d-flex flex-row" v-if="country">
              <p class="h3">
                <i :class="`fi fi-${country.iso}`" width="300"></i>
              </p>
              <div class="m-2">{{ country.value }}</div>
            </div>
          </template>
        </div>
      </template>

      <template #application_university="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ university }, idx) of data.value.applications" :key="idx">
            <div class="d-flex flex-row" v-if="university">
              <img :src="university.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ university.name }}</div>
            </div>
          </template>
        </div>        
      </template>

      <template #application_degree="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ degree: { uuid, value } }, idx) of data.value.applications" :key="uuid">
            <div class="d-flex flex-row" v-if="value">
              <div class="m-2">{{ value }}</div>
            </div>
          </template>
        </div>        
      </template>

      <template #application_departments="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ departments }, idx) of data.value.applications" :key="idx">
            <div class="d-flex flex-row" v-if="departments.length">
              <template v-for="({ department }, dIdx) of departments" :key="dIdx">
                <div class="m-2">{{ department?.name?.value }}</div>
              </template>
            </div>
          </template>
        </div>        
      </template>

      <template #application_status="data">
        <div v-if="data.value.applications.length">
          <template v-for="({ status }, idx) of data.value.applications" :key="idx">
            <span class="badge" :style="useApplicationStatusStyle(status.value)" v-if="status" :key="idx">
              {{ status.value.value }}
            </span>
          </template>
        </div>        
      </template>

      <!-- <template #status="data">
        
      </template> -->

      <template #actions="data">
        <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'company-student-show', params: { uuid: data.value.uuid } })">
          <i class="fa fa-eye"></i>
          <!-- {{ $t('system.show') }} -->
        </router-link>

        <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-student-edit', params: { uuid: data.value.uuid } })">
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
    loader,
    filters,

    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    remove,
    changeServer,
    loadFilters,
  } = useBehavior()  
</script>
