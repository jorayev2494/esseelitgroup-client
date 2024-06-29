<template>
  <div class="col-md-12">
    <div class="profile-menu">
      <ul class="nav nav-tabs nav-tabs-solid">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#per_details_tab">{{ $t('companyContext.profile.context_title') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#password_tab">{{ $t('companyContext.profile.partials.change_password.label') }}</a>
        </li>
      </ul>
    </div>

    <div class="tab-content profile-tab-cont pt-4">
      <!-- Personal Details Tab -->
      <div class="tab-pane fade show active" id="per_details_tab">
        <!-- Personal Details -->
          
          <div class="card">
            <div class="card-body" v-if="form">
              <!-- Profile Settings Form -->
              <form method="POST" @submit.prevent="update">
                <div class="row form-row">
                  <div class="col-12 col-md-12">
                    <div class="form-group">
                      <div class="change-avatar">
                        <div class="profile-img">
                          <img :src="imagePreview" :alt="imagePreview" />
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

        <!-- /Personal Details -->
      </div>
      <!-- /Personal Details Tab -->
      
      <!-- Change Password Tab -->
      <div id="password_tab" class="tab-pane fade">
        <div class="col-md-6 col-xl-6">
          <ChangePassword />
        </div>
      </div>
      <!-- /Change Password Tab -->
    </div>
  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";
  import ChangePassword from './partials/changePassword/Index.vue'

  const {
    form,
    imagePreview,

    uploadImage,
    update,
  } = useBehavior()

</script>
