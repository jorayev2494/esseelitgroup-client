<template>
  <div>
    <vue3-datatable
      :rows="items"
      :columns="columns"
      :loading="loading"
      :totalRows="paginator.total.value"
      :pageSize="paginator.perPage.value"
      :showNumbers="false"
      :pageSizeOptions="paginator.perPageOptions"
      :isServerMode="true"

      skin="bh-table-hover"

      @change="changeServer"
    >
      <template #university="data">
        <div class="d-flex flex-row" v-if="data.value.university">

          <div class="avatar-showcase">
            <div class="avatars">
              <div class="avatar">

                <Badge :is-show="data.value.university.is_on_the_country_list" />
                <img class="avatar-img rounded" :src="data.value.university.logo" :alt="data.value.university.logo" width="35" />

              </div>
            </div>
          </div>

          <div class="m-2">
            <div>
              <span class="text-dark">{{ data.value.university.name }}</span>
            </div>
            <div>
              <span class="me-1">
                {{ data.value.university?.city?.value }},
              </span>
              <span v-if="data.value.university?.country">
                <i :class="`fi fi-${data.value.university.country.iso}`" width="300"></i>
                {{ data.value.university.country.value }}
              </span>
            </div>
          </div>

        </div>
      </template>

      <template #name="data">
        <div class="flex-row">
          <ul class="p-0 float-start">

            <li class="align-start">
              <div class="mx-1 mb-1 row">
                <span class="text-black p-0">
                  {{ data.value.name.value }}
                </span>
              </div>
            </li>

            <li class="align-start">
              <div class="mx-1 mb-1 row">
                <span class="text-black p-0">
                  <strong>{{ $t('companyContext.department.form.is_filled') }}: </strong>
                  <span class="mx-1" :class="data.value.is_filled ? 'text-danger' : 'text-success'">
                    {{ $t('system.' + (data.value.is_filled ? 'yes' : 'no')) }}
                  </span>
                </span>
              </div>
            </li>

          </ul>
        </div>
      </template>

      <template #information="data">
        <div class="flex-row">
          <ul class="p-0 float-start">

            <li class="align-start">
              <div class="mx-1 mb-1 row">
                <span class="text-black p-0">
                  <strong>{{ $t('companyContext.department.form.degree') }}: </strong>
                  <span class="mx-1">
                    {{ data.value?.degree?.value }}
                  </span>
                </span>
              </div>
            </li>

            <li class="align-start">
              <div class="mx-1 mb-1 row">
                <span class="text-black p-0">
                  <strong>{{ $t('companyContext.department.form.language') }}: </strong>
                  <span class="mx-1">
                    <i :class="`fi fi-${data.value.language.iso}`" width="300"></i>
                    {{ data.value.language.value }}
                  </span>
                </span>
              </div>
            </li>

          </ul>
        </div>
      </template>

      <!-- <template #location="data">
        <span>
          <span class="me-1">
            {{ data.value.university.city.value }},
          </span>
          <span>
            <i :class="`fi fi-${data.value.university.country.iso}`" width="300"></i>
            {{ data.value.university.country.value }}
          </span>
        </span>
      </template> -->

      <template #actions="data">
        <button
          v-if="data.value.is_filled"
          type="submit"
          class="btn btn-sm me-2 bg-danger-light"
          disabled
        >
          {{ $t('system.is_filled') }}
        </button>

        <router-link
          v-else
          class="btn btn-sm me-2 bg-primary-light"
          :to="$tMakeRoute({ name: 'university-show', params: { uuid: data.value.university.uuid }, query: { department_uuid: data.value.uuid } })"
        >
          {{ $t('system.apply_now') }}
        </router-link>

        <!-- <router-link
           v-if="data.value.uuid !== $store.getters['companyContext/auth/getAuthDataProperty']('uuid')"
          :to="$tMakeRoute({ name: 'company-employee-edit', params: { uuid: data.value.uuid } })"
          class="btn btn-sm bg-success-light me-2"
        >
          <i class="fa fa-edit"></i> {{ $t('system.edit') }}
        </router-link> -->
      </template>

      <template #price="data">
        <p class="text-black">
          {{ data.value.price }}
          {{ data.value.price_currency?.code }}
        </p>
      </template>

    </vue3-datatable>
  </div>
</template>

<script setup>
  import Vue3Datatable from '@bhplugin/vue3-datatable'
  import useBehavior from "./useBehavior";

  const {
    items,
    columns,
    paginator,

    changeServer,
  } = useBehavior()

</script>
