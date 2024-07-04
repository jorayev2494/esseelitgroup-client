<template>
  <div>

    <Search :form="form" @search="reloadData" class="mb-3" />
    <TableFilter :filters="filters" @filter="reloadData" class="mb-3" />

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
      <template #university="data">
        <div class="d-flex flex-row" v-if="data.value.university">

          <div class="avatar-showcase">
            <div class="avatars">
              <div class="avatar">

                <Badge :is-show="data.value.university.is_on_the_country_list" />
                <img class="img-50 avatar-img rounded" :src="data.value.university.logo" :alt="data.value.university.logo" width="35" />

              </div>
            </div>
          </div>

          <div class="m-2">
            <div>
              <span class="text-dark">{{ data.value.university.name }}</span>
            </div>
            <div>
              <span class="text-muted">{{ data.value.university.label }}</span>
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
                    {{ $t('system.' + (data.value.is_filled ? 'no' : 'have')) }}
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

            <li class="align-start" v-if="data.value.degree">
              <div class="mx-1 mb-1 row">
                <span class="text-black p-0">
                  <strong>{{ $t('companyContext.department.form.degree') }}: </strong>
                  <span class="mx-1">
                    {{ data.value.degree.value }}
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

      <template #location="data">
        <div v-if="data.value?.university?.city">
          <span>
            <span class="me-1">
              {{ data.value.university.city.value }},
            </span>
            <span>
              <i :class="`fi fi-${data.value.university.country.iso}`" width="300"></i>
              {{ data.value.university.country.value }}
            </span>
          </span>
        </div>
      </template>

      <template #price="data">
        <div class="d-flex flex-row">
          <p class="mt-2">
            <span>
              <p v-if="!data.value.discount_price" class="text-primary mb-1">
                <strong>
                  {{ data.value.price }}
                  {{ data.value.price_currency?.code }}
                </strong>
              </p>
              <p v-else class="text-danger mb-1">
                <em>
                  <del>
                    {{ data.value.price }}
                    {{ data.value.price_currency?.code }}
                  </del>
                </em>
              </p>
            </span>
            <span v-if="data.value.discount_price" class="text-primary">
              <strong>
                {{ data.value.discount_price }}
                {{ data.value.price_currency?.code }}
              </strong>
            </span>
          </p>
        </div>
      </template>

    </vue3-datatable>

  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";
  import Vue3Datatable from '@bhplugin/vue3-datatable'
  import Search from '@/views/pages/components/search/Index.vue'
  import TableFilter from '@/views/pages/components/tableFilter/Index.vue'
  
  const {
    form,
    items,
    columns,
    paginator,
    filters,

    reloadData,
    changeServer,
  } = useBehavior()
</script>
