<template>
  <div class="col-xl-1">
    
  </div>

  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('companyContext.application.application_form') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" enctype="multipart/form-data">

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.company') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.company_uuid" aria-label="Default select example" :placeholder="$t('companyContext.application.form.company')" @change="companyWasChanged" required>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.company') }}</option>
                  <option
                    v-for="({ uuid, name }, idx) of companies" :key="idx"
                    :value="uuid"
                    >
                    {{ name }}
                  </option>
                </select>
              </div>
            </div> -->

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.alias') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.alias_uuid" :placeholder="$t('companyContext.application.form.country')" @change="loadData('alias')" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.alias') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of aliases" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.country') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.country_uuid" :placeholder="$t('companyContext.application.form.country')" @change="loadData('country')" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.country') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of countries" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.language') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.language_uuid" :placeholder="$t('companyContext.application.form.language')" @change="loadData('language')" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.language') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of languages" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.degree') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.degree_uuid" :placeholder="$t('companyContext.application.form.degree')" @change="loadData('degree')" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.degree') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of degrees" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.university') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.university_uuid" @change="loadData('university')" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.university') }}</option>
                  <option
                    v-for="({ uuid, name }, idx) of universities" :key="idx"
                    :value="uuid"
                    >
                    {{ name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.faculties_and_departments') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="selectedDepartments"
                  :options="departmentOptions"
                  :multiple="true"

                  :group-select="true"
                  group-label="faculty"
                  group-values="departments"
                  track-by="name"

                  label="name"
                  :placeholder="$t('companyContext.application.form.faculties_and_departments_select.placeholder')"

                  :select-group-label="$t('companyContext.application.form.faculties_and_departments_select.select_group_label')"
                  :deselect-group-label="$t('companyContext.application.form.faculties_and_departments_select.deselect_group_label')"
                  
                  :select-label="$t('companyContext.application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('companyContext.application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('companyContext.application.form.faculties_and_departments_select.selected')"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row" v-if="form.status">
              <label class="col-lg-3 col-form-label">{{ $t('companyContext.application.form.status') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.status.value" disabled>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.status') }}</option>
                  <option
                    v-for="(value, idx) of statuses" :key="idx"
                    :value="value"
                    :selected="value === form.status.value"
                  >
                    {{ value.value }}
                  </option>
                </select>
              </div>
            </div>

          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-5">
    <!-- <pre>{{ form.status }}</pre> -->
    <Inputs v-if="form?.status" :form="form.status" :inputs="statusInputs" :values="form.status.translations" :block-title="'application.form.status_note'" readonly />
  </div>
</template>

<script setup>
  import VueMultiselect from 'vue-multiselect'
  import Inputs from '../../../../../components/InputCard/Index.vue'
  import useIndex from './useIndex';

  const {
    form,
    aliases,
    languages,
    degrees,
    // companies,
    countries,
    universities,
    statuses,
    statusInputs,

    selectedDepartments,
    departmentOptions,

    loadData,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
