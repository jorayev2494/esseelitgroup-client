<template>
  <div class="col-sm-12">
    <div class="card">

      <div class="card-header">
        <h4 class="card-title">Default Datatable</h4>
        <p class="card-text">
          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>
          class to initialize datatables.
        </p>
      </div>

      <div class="card-body">

        <!-- <div class="mb-2">
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'application-create' })">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link>
        </div> -->

        <!-- <pre>{{ paginator }}</pre> -->

        <vue3-datatable
          :rows="items"
          :columns="columns"
          :loading="loading"
          :totalRows="paginator.total.value"
          :pageSize="paginator.perPage.value"
          :showNumbersCount="3"
          :pageSizeOptions="paginator.perPageOptions"
          :isServerMode="true"
          :paginationInfo="$t('system.pagination.info', { zero: '{0}', first: '{1}', two: '{2}' })"

          skin="bh-table-hover"

          @change="changeServer"
        >
          <template #university="data">
            <div class="d-flex flex-row" v-if="data.value.university">
              <img class="avatar-img rounded" :src="data.value.university.logo" :alt="data.value.university.logo" width="35" />
              <div class="m-2">{{ data.value.university.name }}</div>
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

          <template #status="data">
            <span class="badge" :style="getStatusStyle(data.value.status.value)">
              {{ data.value.status.value.value }}
            </span>
          </template>

          <template #actions="data">
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'company-application-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-eye"></i>
              <!-- {{ $t('system.show') }} -->
            </router-link>

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-application-edit', params: { uuid: data.value.uuid } })">
              <i class="fa fa-pencil"></i>
              <!-- {{ $t('system.edit') }} -->
            </router-link>
            
            <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i>
              <!-- {{ $t('system.delete') }} -->
            </span>
          </template>

        </vue3-datatable>

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex.js';
  import Vue3Datatable from '@bhplugin/vue3-datatable'
  import { defineProps } from 'vue'

  const props = defineProps({
    studentUuid: {
      type: String,
      required: true,
    },
  })

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
    getStatusStyle,
  } = useIndex({ props });  
</script>

<style lang="scss" scoped>

</style>
