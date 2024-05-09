<template>
<!-- class="stickysidebar" -->
  <div>
    <!-- Search Filter -->
    <div class="card search-filter">
      <div class="card-header">
        <h4 class="card-title mb-0">{{ $t('search.search_filter') }}</h4>
      </div>

      <form action="#" @submit.prevent="runSearch">
        <div class="card-body">
          <!-- <pre>{{ filters }}</pre> -->
          <!-- <pre>{{ form }}</pre> -->
          <!-- { label, field, type, items, multiple } -->

          <div
            v-for="(filter, idx) of filters" :key="idx"
            class="filter-widget"
          >
            <h4>{{ $t(filter.label) }}</h4>

            <template v-if="filter.type === 'checkbox'">
              <div v-for="({ label: lLabel, value, translate, disabled }, iIdx) of filter.items" :key="iIdx">
                <label class="custom_check">
                  <input type="checkbox" name="gender_type" @click="() => addValue(filter.field, { value }, filter.multiple)" :disabled="disabled" />
                  <span class="checkmark"></span>
                  <span :class="disabled ? 'text-secondary' : 'text-dark'">
                    {{ translate ? $t(lLabel) : lLabel }}
                  </span>
                  <!-- <component :is="disabled ? 'del' : 'span'">
                    {{ translate ? $t(lLabel) : lLabel }}
                  </component> -->
                </label>
              </div>
            </template>

            <template v-if="filter.type === 'group-select'">
              <VueMultiselect
                v-model="previewForm[filter.field]"
                :options="filter.items"
                :multiple="true"

                :group-select="true"
                group-label="label"
                group-values="items"
                track-by="label"
                label="label"

                @select="i => addValue(filter.field, i, filter.multiple)"
                @remove="i => removeValue(filter.field, i, filter.multiple)"
              >
              </VueMultiselect>

              <!-- :placeholder="$t('application_form.faculties_and_departments_select.placeholder')"

              :select-group-label="$t('application_form.faculties_and_departments_select.select_group_label')"
              :deselect-group-label="$t('application_form.faculties_and_departments_select.deselect_group_label')"
              
              :select-label="$t('application_form.faculties_and_departments_select.select_label')"
              :deselect-label="$t('application_form.faculties_and_departments_select.deselect_label')"
              :selected-label="$t('application_form.faculties_and_departments_select.selected')" -->
            </template>
            
          </div>

          <div class="btn-search">
            <button type="submit" class="btn btn-block w-100">
              {{ $t('search.search_btn') }}
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- /Search Filter -->
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  import useIndex from './useIndex'
  import VueMultiselect from 'vue-multiselect'

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    }
  })

  const emit = defineEmits(['search'])

  const {
    previewForm,

    addValue,
    removeValue,
    runSearch,
  } = useIndex({ props, emit })

</script>

<style scoped>
  @import '@/assets/css/website/vue-multiselect.css';
</style>
