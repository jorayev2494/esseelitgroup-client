<template>
  <!-- <div class="row form-row"> -->
    <!-- <div class="col-12 col-md-12"> -->

      <!-- <pre>{{ form }}</pre> -->
      <!-- <div class="form-group row">
        <label class="col-lg-3 col-form-label">{{ $t('application.form.university') }}</label>
        <div class="col-lg-9">
          <select class="form-select" v-model="form.university_uuid" @change="loadData('university')" required>
            <option value="" disabled selected>{{ $t('application.form.university') }}</option>
            <option
              v-for="({ uuid, name }, idx) of universities" :key="idx"
              :value="uuid"
              >
              {{ name }}
            </option>
          </select>
        </div>
      </div> -->

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.alias') }}</label>
          <!-- <span class="text-danger"> ({{ $t('system.required') }})</span> -->
          <select
            name="alias_uuid"
            v-model="form.alias_uuid"
            class="form-control form-select"
            aria-label="Default select example"
            @change="loadData('alias')"
          >
            <option value="" disabled selected>{{ $t('application_form.alias') }}</option>
            <option
              v-for="(alias, uIdx) of aliases" :key="uIdx"
              :value="alias.uuid" 
            >
              {{ alias.value }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.country') }}</label>
          <!-- <span class="text-danger"> ({{ $t('system.required') }})</span> -->
          <select
            name="country_uuid"
            v-model="form.country_uuid"
            class="form-control form-select"
            aria-label="Default select example"
            @change="loadData('country')"
          >
            <option value="" disabled selected>{{ $t('application_form.country') }}</option>
            <option
              v-for="(country, uIdx) of countries" :key="uIdx"
              :value="country.uuid" 
            >
              {{ country.value }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.language') }}</label>
          <span class="text-danger"> ({{ $t('system.required') }})</span>
          <select
            name="language_uuid"
            v-model="form.language_uuid"
            class="form-control form-select"
            aria-label="Default select example"
            required
            @change="loadData('language')"
          >
            <option value="" disabled selected>{{ $t('application_form.language') }}</option>
            <option
              v-for="(language, uIdx) of languages" :key="uIdx"
              :value="language.uuid" 
            >
              {{ language.value }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.degree') }}</label>
          <span class="text-danger"> ({{ $t('system.required') }})</span>
          <select
            name="degree_uuid"
            v-model="form.degree_uuid"
            class="form-control form-select"
            aria-label="Default select example"
            required
            @change="loadData('degree')"
          >
            <option value="" disabled selected>{{ $t('application_form.degree') }}</option>
            <option
              v-for="(degree, uIdx) of degrees" :key="uIdx"
              :value="degree.uuid" 
            >
              {{ degree.value }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.university') }}</label>
          <span class="text-danger"> ({{ $t('system.required') }})</span>
          <select
            name="university_uuid"
            v-model="form.university_uuid"
            class="form-control form-select"
            aria-label="Default select example"
            required
            @change="loadData('university')"
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
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="email">{{ $t('application_form.faculties_and_departments') }}</label>
          <span class="text-danger"> ({{ $t('system.required') }})</span>
          <VueMultiselect
            v-model="form.department_uuids"
            :options="departmentOptions"
            :multiple="true"

            :group-select="true"
            group-label="faculty"
            group-values="departments"
            track-by="name"

            label="name"
            :placeholder="$t('application_form.faculties_and_departments')"

            :select-group-label="$t('application_form.faculties_and_departments_select.select_group_label')"
            :deselect-group-label="$t('application_form.faculties_and_departments_select.deselect_group_label')"
            
            :select-label="$t('application_form.faculties_and_departments_select.select_label')"
            :deselect-label="$t('application_form.faculties_and_departments_select.deselect_label')"
            :selected-label="$t('application_form.faculties_and_departments_select.selected')"
          >
          </VueMultiselect>
        </div>
      </div>
  <!-- </div> -->
</template>

<script setup>
  import useIndex from './useIndex'
  import { defineProps, ref, watch } from 'vue'
  import VueMultiselect from 'vue-multiselect'

  // const selectedDepartmentOptions = ref([])

  // watch(selectedDepartmentOptions, nV => {
  //   selectedDepartments.value.length = 0;
  //   nV.forEach(item => selectedDepartments.value.push(item))
  // })

  // const selectDepartment = value => {
  //   console.log('value :>> ', value);
  //   value.value.forEach(item => {
  //     selectedDepartments.value.push(item)
  //   });
  // }

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
    selectedDepartments: {
      type: Array,
      required: true,
    },
  });

  const {
    form,
  
    aliases,
    languages,
    degrees,
    countries,
    universities,
    // selectedDepartments,
    departmentOptions,

    loadData,
  } = useIndex({ props });
</script>
