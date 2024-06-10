<template>
  <div>
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

      <!-- <template #header>
        <h1>test</h1>
      </template> -->

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

      <template #actions="data">
        <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'company-employee-show', params: { uuid: data.value.uuid } })">
          <i class="fa fa-eye"></i> {{ $t('system.show') }}
        </router-link>

        <router-link
           v-if="data.value.uuid !== $store.getters['companyContext/auth/getAuthDataProperty']('uuid')"
          :to="$tMakeRoute({ name: 'company-employee-edit', params: { uuid: data.value.uuid } })"
          class="btn btn-sm bg-success-light me-2"
        >
          <i class="fa fa-edit"></i> {{ $t('system.edit') }}
        </router-link>
        
        <span
          v-if="data.value.uuid !== $store.getters['companyContext/auth/getAuthDataProperty']('uuid')"
          class="btn btn-sm bg-danger-light"
          @click="remove(data)"
        >
          <i class="fa fa-trash"></i> {{ $t('system.delete') }}
        </span>
      </template>

    </vue3-datatable>
  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";
  import Vue3Datatable from '@bhplugin/vue3-datatable'
  
  const {
    items,
    columns,
    paginator,
    loader,

    remove,
    changeServer,
  } = useBehavior()  
</script>
