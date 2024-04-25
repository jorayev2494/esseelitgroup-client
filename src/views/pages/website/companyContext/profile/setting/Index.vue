<template>
  <div class="card">
    <div class="card-body" v-if="form">
      <!-- Profile Settings Form -->
      <form method="POST" @submit.prevent="update">
        <div class="row form-row">
          <div class="col-12 col-md-12">
            <div class="form-group">
              <div class="change-avatar">
                <div class="profile-img">
                  <img :src="imagePreview" alt="Profile Image" />
                </div>
                <div class="upload-img">

                  <div class="change-photo-btn">
                    <span>
                      <i class="fa fa-upload"></i>
                      Upload Photo
                    </span>
                    <input type="file" name="avatar" class="upload" accept=".jpeg, jpg, .png" @change="event => uploadImage(event, avatar => form.avatar = avatar)" />
                  </div>

                  <!-- <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label>{{ $t('companyContext.profile.form.first_name') }}</label>
              <input type="text" v-model="form.first_name" name="first_name" class="form-control" required />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label>{{ $t('companyContext.profile.form.last_name') }}</label>
              <input type="text" v-model="form.last_name" name="last_name" class="form-control" required />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label>{{ $t('companyContext.profile.form.email') }}</label>
              <input type="text" v-model="form.email" name="email" class="form-control" required />
            </div>
          </div>
          <!-- <div class="col-12 col-md-6">
            <div class="form-group">
              <label>Blood Group</label>
              <select class="form-control select">
                <option>A-</option>
                <option>A+</option>
                <option>B-</option>
                <option>B+</option>
                <option>AB-</option>
                <option>AB+</option>
                <option>O-</option>
                <option>O+</option>
              </select>
            </div>
          </div> -->
        </div>
        <div class="submit-section">
          <button type="submit" class="btn btn-primary submit-btn">
            {{ $t('system.save_changes') }}
          </button>
        </div>
      </form>
      <!-- /Profile Settings Form -->
    </div>
  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";

  const {
    form,
    imagePreview,

    uploadImage,
    update,
  } = useBehavior()

</script>
