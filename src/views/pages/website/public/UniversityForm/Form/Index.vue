
<template>
  <!-- Lets Work -->
  <section class="lets-work">
    <div class="container">
      <div class="lets-work-card">
        <div class="row align-items-center">
          <!-- <div class="col-lg-8">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="explore-img">
                  <img
                    src="@/assets/img/work-img.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="explore-title">
                  <h2>
                    Let’s Work Together <span> & Explore Opportunities</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="work-btns">
              <div class="btn-reg">
                <router-link to="/pages/register">Register Now</router-link>
              </div>
              <div class="btn-log">
                <router-link to="/pages/login">Sign In</router-link>
              </div>
            </div>
          </div> -->

          <!-- <pre>{{ universities }}</pre> -->
          <!-- <pre>{{ faculties }}</pre> -->
          <!-- <pre>{{ departments }}</pre> -->
          <!-- <pre>{{ form }}</pre> -->
          <!-- <pre>{{ additionalDocuments }}</pre> -->
          <!-- <pre>{{ countries }}</pre> -->

          <form action="/" method="POST" enctype="multipart/form-data" @submit.prevent="sendForm">

            <div class="row form-row">

              <div class="col-12 col-md-12">
                <div class="section-top-head top-head-three">
                  <div class="form-group">
                    <div class="change-avatar">
                      <img :src="university.logo" alt="Logo" width="100" />
                    </div>
                  </div>
                </div>

                <div class="section-top-head top-head-three">
                  <div class="section-header aos" data-aos="fade-up">
                    <h2>{{ university.name }} Application Form</h2>
                    <p class="sub-title">
                      Find the Categories that’s perfect for you. about 800+ new courses
                      everyday
                    </p>
                  </div>
                </div>
              </div>

              <div v-for="(input, dIdx) in basicData" :key="dIdx" :class="input.class">
                <div class="form-group">
                  <label :for="input.name">{{ $t(`system.${input.name}`) }}</label><span class="text-danger" v-if="input.required"> (Required)</span>
                  <input :type="input.type" :id="input.name" class="form-control" v-bind="input.bind" :name="input.name" v-model="form[input.name]" :placeholder="$t(`system.${input.name}`)" :required="input.required" autocomplete="off" />
                </div>
              </div>

              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label for="email">{{ $t('system.country') }}</label>
                  <span class="text-danger"> (Required)</span>
                  <select
                    name="university_uuid"
                    v-model="form.country_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Open this select menu</option>
                    <option
                      v-for="(country, cIdx) of countries" :key="cIdx"
                      :value="country.uuid" 
                    >
                      {{ country.value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">{{ $t('system.university') }}</label>
                  <span class="text-danger"> (Required)</span>
                  <select
                    name="university_uuid"
                    v-model="form.university_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                    @change="loadFaculties"
                  >
                    <option selected>Open this select menu</option>
                    <option
                      v-for="(university, uIdx) of universities" :key="uIdx"
                      :value="university.uuid" 
                    >
                      {{ university.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">{{ $t('system.faculty') }}</label><span class="text-danger"> (Required)</span>
                  <select
                    name="faculty_uuid"
                    v-model="form.faculty_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Open this select menu</option>
                    <option
                      v-for="(faculty, fIdx) of faculties" :key="fIdx"
                      :value="faculty.uuid" 
                    >
                      {{ faculty.name }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">{{ $t('system.department') }}</label>
                  <span class="text-danger"> (Required)</span>
                  <select
                    name="department_uuid"
                    v-model="form.department_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Open this select menu</option>
                    <option
                      v-for="(department, dIdx) of departments" :key="dIdx"
                      :value="department.uuid" 
                    >
                      {{ department.name }}
                    </option>
                  </select>
                </div>
              </div> -->

              <div class="col-12 col-md-6" v-for="({ name, accept }, idx) in uploadFiles" :key="uploadFilesBlock + idx">
                <div class="form-group" :key="uploadFilesBlock">
                  <label :for="name" class="form-label">{{ $t(`system.${name}`) }}</label><span class="text-danger"> (Required)</span>
                  <input class="form-control" type="file" :name="name" :id="name" @change="setUploadedFile" :accept="accept">
                  <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                </div>
              </div>

              <template v-for="(aDocument, aIdx) in additionalDocuments" :key="uploadFilesBlock + aIdx">
                <div class="col-12 col-md-6">
                  <div class="form-group" :key="uploadFilesBlock + aIdx + 1">
                    <label :for="`additional-doc-${aIdx}`">{{ $t(`system.additional_document`) }} {{ aIdx + 1 }}</label>
                    <span class="text-danger"> (Required)</span>
                    <input
                      type="file"
                      :id="`additional-doc-${aIdx}`"
                      class="form-control"
                      :name="`additional-doc-${aIdx}`"
                      accept=".pdf"
                      required
                      autocomplete="off"
                      @change="addAdditionalFile($event, aIdx)"
                    />
                    <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                  </div>
                </div>

                <div class="col-10 col-md-5">
                  <div class="form-group" :key="uploadFilesBlock + aIdx + 2">
                    <label for="phone">{{ $t('system.document_name') }}</label>
                    <span class="text-danger"> (Required)</span>
                    <input type="text" id="phone" class="form-control" name="home_address" v-model="aDocument.description" :placeholder="$t('system.home_address')" required autocomplete="off" />
                  </div>
                </div>

                <div class="col-2 col-md-1">
                  <div class="btn-group d-flex" :key="uploadFilesBlock + aIdx + 3">
                    <button
                      type="submit"
                      class="btn btn-block btn-outline-danger btn-additional-doc-delete"
                      @click.prevent="removeAdditionalDocument(aIdx)"
                    >
                      <i class="fa fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </template>

              <div class="col-12 col-md-12">
                <center>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-group btn-outline-danger"
                      :disabled="canAddNewAdditionalColumn"
                      @click.prevent="addAdditionalDocument"
                    >
                      {{ $t('system.add_additional_document') }}
                    </button>
                  </div>
                </center>
              </div>

              <div class="col-12 col-md-12">
                <div class="form-check">
                  <input class="form-check-input" name="is_agreed_to_share_data" v-model="form.is_agreed_to_share_data" type="checkbox" required>
                  <label class="form-check-label">
                    I confirm that my data may be shared with the partner universities of Esse Elite Group. I allow Esse Elite Group to apply for the above mentioned department(s) to multiple universities. <span class="text-danger"> (Required)</span>
                  </label>
                </div>
              </div>

              <center>
                <div class="submit-section mt-4">
                  <button ref="submitBtn" type="submit" class="btn btn-primary w-25">
                    Primary
                  </button>
                </div>
              </center>

            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { defineProps } from 'vue';
  import useIndex from './useIndex.js'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    }
  });

  const { 
    form,
    uploadFilesBlock,
    universities,
    faculties,
    departments,
    countries,
    basicData,
    uploadFiles,
    loadFaculties,
    loadDepartments,
    additionalDocuments,
    addAdditionalDocument,
    removeAdditionalDocument,
    addAdditionalFile,
    sendForm,
    setUploadedFile,
    canAddNewAdditionalColumn,
    submitBtn,
  } = useIndex({ props });

</script>

<style scoped>
  input[type="file"] {
    padding-left: 12px;
  }

.btn-additional-doc-delete {
  margin-top: 30px;
}

/* .additional-doc-description {
  margin-right: 10px;
} */
</style>