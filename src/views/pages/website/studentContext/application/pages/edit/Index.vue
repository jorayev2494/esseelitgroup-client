<template>
  <div class="col-xl-2">
    
  </div>

  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('companyContext.application.application_form') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">

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
                <select class="form-select" v-model="form.alias_uuid" :placeholder="$t('companyContext.application.form.country')" @change="loadData('alias')" required>
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
                <select class="form-select" v-model="form.country_uuid" :placeholder="$t('companyContext.application.form.country')" @change="loadData('country')" required>
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
                <select class="form-select" v-model="form.language_uuid" :placeholder="$t('companyContext.application.form.language')" @change="loadData('language')" required>
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
                <select class="form-select" v-model="form.degree_uuid" :placeholder="$t('companyContext.application.form.degree')" @change="loadData('degree')" required>
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
                <select class="form-select" v-model="form.university_uuid" @change="loadData('university')" required>
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

                <select class="form-select" v-model="form.status_value_uuid" required>
                  <option value="" disabled selected>{{ $t('companyContext.application.form.status') }}</option>
                  <option
                    v-for="(status, idx) of statuses" :key="idx"
                    :value="status.uuid"
                    :selected="status.uuid === form.status_value_uuid"
                    :style="getStatusStyle(status)"
                  >
                    {{ status.value }}
                  </option>
                </select>

              </div>
            </div>

            <div>
              <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
              <button type="submit" class="btn btn-danger ms-2" @click="clear">{{ $t('system.clear') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-4">
    <!-- <Inputs v-if="form?.status" :form="form.status" :inputs="statusInputs" :values="form.status.translations" :block-title="'application.form.status_note'" /> -->
  </div>
</template>

<script setup>
  import VueMultiselect from 'vue-multiselect'
  // import Inputs from '../../../../../components/InputCard/Index.vue'
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

    getStatusStyle,
    loadData,
    clear,
    update,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
