<template>
  <div class="col-xl-2">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('companyContext.student.form.avatar') }}</h4>
      </div>

      <center>
        <label for="avatar">
          <div class="card-body mb-4">
            <!-- <div class="avatar avatar-xxl mr-2"> -->
              <img class="avatar-img rounded" role="button" alt="Client Avatar" :src="avatarPreview" width="100%">
            <!-- </div> -->
          </div>
        </label>
      </center>
    
      <input class="form-control d-none" id="avatar" type="file" accept="image/*" @change="event => uploadAvatar(event, avatar => form.avatar = avatar)">
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('companyContext.student.student_info') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.student.form.first_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.first_name" class="form-control" :placeholder="$t('companyContext.student.form.first_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.student.form.last_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.last_name" class="form-control" :placeholder="$t('companyContext.student.form.last_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.student.form.birthday') }}</label>
              <div class="col-lg-9">
                  <input type="date" v-model="form.birthday" class="form-control" :placeholder="$t('companyContext.student.form.birthday')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.student.form.email') }}</label>
              <div class="col-lg-9">
                  <input type="email" v-model="form.email" class="form-control" :placeholder="$t('companyContext.student.form.email')" required>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.student.form.phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('companyContext.student.form.phone')" required>
              </div>
            </div> -->

            <div class="text-right">
              <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <!-- <pre>{{ additionalDocuments }}</pre> -->
  <!-- <pre>{{ form }}</pre> -->
  <div class="col-xl-4 d-flex">

  </div>
</template>

<script setup>
  import useIndex from './useIndex';

  const {
    form,
    avatarPreview,
    uploadAvatar,

    create,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
