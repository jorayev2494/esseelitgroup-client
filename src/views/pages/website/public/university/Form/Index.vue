
<template>
  <!-- Lets Work -->
  <section id="application-form" class="lets-work mt-10">
    <div class="container">
      <div class="lets-work-card">
        <div class="row align-items-center">

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
                      <img class="img-fluid rounded" :src="university.logo" alt="Logo" width="100" />
                    </div>
                  </div>
                </div>

                <div class="section-top-head top-head-three">
                  <div class="section-header aos" data-aos="fade-up">
                    <h2>{{ university.name }} Application Form</h2>
                    <center>
                      <p class="sub-title">
                        Find the Categories that’s perfect for you. about 800+ new courses
                        everyday
                      </p>
                    </center>
                  </div>
                </div>
              </div>

              <div v-for="(input, dIdx) in studentData" :key="dIdx" :class="input.class">
                <div class="form-group">
                  <template v-if="input.type === 'select'">
                    <label :for="input.name">{{ $t(`application_form.${input.name}`) }}</label><span class="text-danger" v-if="input.required"> ({{ $t('system.required') }})</span>
                    <!-- <input :type="input.type" :id="input.name" class="form-control" v-bind="input.bind" :name="input.name" v-model="formStudent[input.name]" :placeholder="$t(`application_form.${input.name}`)" :required="input.required" autocomplete="off" /></div> -->
                    <select class="form-select"  :id="input.name" :name="input.name" v-model="formStudent[input.name]" aria-label="Default select example" v-bind="input.bind" :required="input.required">
                      <option value="" disabled selected>{{ $t(`application_form.${input.name}`) }}</option>
                      <template v-if="input.options.value.length">
                        <option
                          v-for="(item, idx) of input.options.value" :key="idx"
                          :value="item.uuid"
                        >{{ item.label }}</option>
                      </template>
                    </select>
                  </template>
                  <template v-else>
                    <label :for="input.name">{{ $t(`application_form.${input.name}`) }}</label><span class="text-danger" v-if="input.required"> ({{ $t('system.required') }})</span>
                    <input :type="input.type" :id="input.name" class="form-control" v-bind="input.bind" :name="input.name" v-model="formStudent[input.name]" :placeholder="$t(`application_form.${input.name}`)" :required="input.required" autocomplete="off" />
                  </template>
                </div>
              </div>

              <!-- <div class="col-12 col-md-12">
                <div class="form-group">
                  <label for="email">{{ $t('application_form.country') }}</label>
                  <span class="text-danger"> ({{ $t('system.required') }})</span>
                  <select
                    name="university_uuid"
                    v-model="formStudent.country_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option value="" disabled selected>{{ $t('application_form.country') }}</option>
                    <option
                      v-for="(country, cIdx) of countries" :key="cIdx"
                      :value="country.uuid" 
                    >
                      {{ country.label }}
                    </option>
                  </select>
                </div>
              </div> -->

              <!-- <div class="col-12 col-md-12">
                <div class="form-group">
                  <label for="email">{{ $t('application_form.alias') }}</label>
                  <select
                    name="university_uuid"
                    v-model="formStudent.alias_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                    @change="aliasWasChanged"
                  >
                    <option value="" disabled selected>{{ $t('application_form.alias') }}</option>
                    <option
                      v-for="(alias, aIdx) of aliases" :key="aIdx"
                      :value="alias.uuid" 
                    >
                      {{ alias.name }}
                    </option>
                  </select>
                </div>
              </div> -->

              <!-- <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">{{ $t('application_form.university') }}</label>
                  <span class="text-danger"> ({{ $t('system.required') }})</span>
                  <select
                    name="university_uuid"
                    v-model="formStudent.university_uuid"
                    class="form-control form-select"
                    aria-label="Default select example"
                    required
                    @change="universityWasChanged"
                  >
                    <option value="" disabled selected>{{ $t('application_form.university') }}</option>
                    <option
                      v-for="(university, uIdx) of universities" :key="uIdx"
                      :value="university.uuid" 
                    >
                      {{ university.name }}
                    </option>
                  </select>
                </div>
              </div> -->

              <!-- <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">{{ $t('application_form.faculties_and_departments') }}</label><span class="text-danger"> ({{ $t('system.required') }})</span>

                  <VueMultiselect
                    v-model="selectedDepartments"
                    :options="departmentOptions"
                    :multiple="true"

                    :group-select="true"
                    group-label="faculty"
                    group-values="departments"
                    track-by="name"
                    label="name"

                    :placeholder="$t('application_form.faculties_and_departments_select.placeholder')"

                    :select-group-label="$t('application_form.faculties_and_departments_select.select_group_label')"
                    :deselect-group-label="$t('application_form.faculties_and_departments_select.deselect_group_label')"
                    
                    :select-label="$t('application_form.faculties_and_departments_select.select_label')"
                    :deselect-label="$t('application_form.faculties_and_departments_select.deselect_label')"
                    :selected-label="$t('application_form.faculties_and_departments_select.selected')"
                  >
                  </VueMultiselect>
                </div>
              </div> -->

              <div class="col-12 col-md-6" v-for="({ name, accept }, idx) in uploadFiles" :key="uploadFilesBlock + idx">
                <div class="form-group" :key="uploadFilesBlock">
                  <label :for="name" class="form-label">{{ $t(`application_form.${name}`) }}</label><span class="text-danger"> ({{ $t('system.required') }})</span>
                  <input class="form-control" type="file" :name="name" :id="name" @change="setUploadedFile" :accept="accept">
                  <!-- <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small> -->
                </div>
              </div>

              <!-- Additional Document -->
              <template v-for="(aDocument, aIdx) in additionalDocuments" :key="uploadFilesBlock + aIdx">
                <div class="col-12 col-md-6">
                  <div class="form-group" :key="uploadFilesBlock + aIdx + 1">
                    <label :for="`additional-doc-${aIdx}`">{{ $t(`application_form.additional_document`) }} {{ aIdx + 1 }}</label>
                    <span class="text-danger"> ({{ $t('system.required') }})</span>
                    <input
                      type="file"
                      :id="`additional-doc-${aIdx}`"
                      class="form-control"
                      :name="`additional-doc-${aIdx}`"
                      required
                      autocomplete="off"
                      @change="addAdditionalFile($event, aIdx)"
                    />
                    <!-- <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small> -->
                  </div>
                </div>

                <div class="col-11 col-md-5 input-additional-name">
                  <div class="form-group" :key="uploadFilesBlock + aIdx + 2">
                    <label for="phone">{{ $t('application_form.document_name') }}</label>
                    <span class="text-danger"> ({{ $t('system.required') }})</span>
                    <input type="text" id="phone" class="form-control" name="home_address" v-model="aDocument.description" :placeholder="$t('application_form.document_name')" required autocomplete="off" />
                  </div>
                </div>

                <div class="col-1 col-md-1 p-0">
                  <center>
                    <div class="btn-group" :key="uploadFilesBlock + aIdx + 3">

                      <span
                        role="button"
                        class="btn-additional-doc-delete"
                        @click.prevent="removeAdditionalDocument(aIdx)"
                      >
                        <i class="fa fa-trash-alt text-danger"></i>
                      </span>

                    </div>
                  </center>
                </div>
              </template>

              <div class="col-12 col-md-12">
                <center>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-group btn-outline-primary btn-sm"
                      :disabled="canAddNewAdditionalColumn"
                      @click.prevent="addAdditionalDocument"
                    >
                      {{ $t('application_form.add_additional_document') }}
                    </button>
                  </div>
                </center>
              </div>
              <!-- End Additional Document -->

              <ApplicationForm :form="formApplication" />

              <div class="col-12 col-md-12">
                <div class="form-check">
                  <input class="form-check-input" name="is_agreed_to_share_data" id="is_agreed_to_share_data" v-model="formApplication.is_agreed_to_share_data" type="checkbox" required>
                  <label class="form-check-label" for="is_agreed_to_share_data">
                    {{ $t('application_form.agreement_text') }} <span class="text-danger"> ({{ $t('system.required') }})</span>
                  </label>
                </div>
              </div>

              <!-- <pre>{{ selectedDepartments }}</pre> -->

              <center>
                <div class="submit-section mt-4">
                  <button ref="submitBtn" type="submit" class="btn btn-primary w-25">
                    {{ $t('system.send') }}
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
  import ApplicationForm from './Application/Index.vue'
  import useIndex from './useIndex.js'
  import { ref } from 'vue';
  import VueMultiselect from 'vue-multiselect'
  // import 'vue-multiselect/dist/vue-multiselect.css'

  const props = defineProps({
    university: {
      type: Object,
      required: true,
    }
  });

  const { 
    formStudent,
    formApplication,
    uploadFilesBlock,
    aliases,
    universities,
    countries,
    studentData,
    uploadFiles,
    aliasWasChanged,
    universityWasChanged,
    additionalDocuments,
    addAdditionalDocument,
    removeAdditionalDocument,
    addAdditionalFile,
    sendForm,
    setUploadedFile,
    canAddNewAdditionalColumn,
    departmentOptions,
    submitBtn,
  } = useIndex({ props });

</script>

<style scoped>
  @import '@/assets/css/website/vue-multiselect.css';

  input[type="file"] {
    padding-left: 12px;
  }

  .input-additional-name {
    padding-right: 0;
  }

  .btn-additional-doc-delete {
    margin-top: 38px;
  }

/* .additional-doc-description {
  margin-right: 10px;
} */
</style>