<template>
  <div class="col-xl-12">
    <div class="mb-2">
      <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-employee-edit', params: { uuid: $route.params.uuid } })">
        <i class="fa fa-edit"></i> {{ $t('system.edit') }}
      </router-link>

      <!-- <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'application-create', params: { student_uuid: $route.params.uuid } })">
        <i class="fa fa-plus"></i> {{ $t('system.create') }}
      </router-link> -->

      <!-- <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'application-create', params: { student_uuid: $route.params.uuid } })">
        <i class="fa fa-plus"></i> {{ $t('system.create') }}
      </router-link> -->

    </div>
  </div>

  <div class="col-xl-2">
    <div class="card flex-fill">
      <!-- <div> -->
        <div class="card-header">
          <h4 class="card-title">{{ $t('companyContext.employee.form.avatar') }}</h4>
        </div>

        <center>
          <div class="card-body mb-1">
            <!-- <div class="avatar avatar-xxl mr-2"> -->
              <img class="avatar-img rounded" role="button" :src="avatarPreview" :alt="avatarPreview" width="100%">
            <!-- </div> -->
          </div>
        </center>
      <!-- </div> -->

      <hr>

      <span v-for="(item, idx) of showInfo" :key="idx">
        <!-- <span> -->
          <div class="mx-3 mb-3 text-secondary">
            <span class="text-secondary">
              <i :class="item.icon" aria-hidden="true"></i>
              <small class="ms-2">{{ $t(item.label) }}</small>
            </span>
            <p class="text-dark">{{ $_.get(form, item.key) }}</p>
          </div>
        <!-- </span> -->
      </span>

    </div>
  </div>

  <div class="col-xl-10">

    <div class="row">
      <div class="col-xl-7 d-flex">
        <div class="card flex-fill">
            <div class="card-header">
              <h4 class="card-title">{{ $t('companyContext.employee.employee_info') }}</h4>
            </div>

            <div class="card-body">
              <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('companyContext.employee.form.first_name') }}</label>
                  <div class="col-lg-9">
                      <input type="text" v-model="form.first_name" class="form-control" :placeholder="$t('companyContext.employee.form.first_name')" disabled>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('companyContext.employee.form.last_name') }}</label>
                  <div class="col-lg-9">
                      <input type="text" v-model="form.last_name" class="form-control" :placeholder="$t('companyContext.employee.form.last_name')" disabled>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('companyContext.employee.form.email') }}</label>
                  <div class="col-lg-9">
                    <input type="email" v-model="form.email" class="form-control" :placeholder="$t('companyContext.employee.form.email')" disabled>
                  </div>
                </div>

                <!-- <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('companyContext.employee.form.phone') }}</label>
                  <div class="col-lg-9">
                      <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('companyContext.employee.form.phone')" disabled>
                  </div>
                </div> -->
                
              </form>
            </div>
        </div>
      </div>

      <div class="col-xl-5 d-flex">

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex';

  const {
    showInfo,
    form,
    avatarPreview,

    update,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
