import { onMounted, ref, toRefs, watch } from "vue"
import { useAlias, useCountry, useLanguage, useDegree, useUniversity, useFaculty, useDepartment } from '../useCases/usePartials'
import { useRoute } from "vue-router"
import { useStore } from "vuex";

export default function useIndex({ props }) {
  const route = useRoute();
  const store = useStore();

  const { aliases, loadAliases } = useAlias()
  const { languages, loadLanguages } = useLanguage()
  const { degrees, loadDegrees } = useDegree()
  const { countries, loadCountries } = useCountry()
  const { universities, loadUniversities } = useUniversity()
  const { departments, loadDepartments } = useDepartment()
  const { faculties, loadFaculties } = useFaculty()

  const { university_uuid: universityUuid, department_uuid: departmentUuid } = toRefs(route.query)

  const {
    form,
  } = toRefs(props);
  
  const makePromiseValues = (changed, params) => {
    const value = [];

    value.push(loadCountries(params));
    value.push(loadLanguages(params));
    value.push(loadDegrees(params));
    value.push(loadUniversities(params));
    value.push(loadFaculties(params));
    value.push(loadDepartments(params));

    return value;
  }

  // #region Department
  // const selectedDepartments = ref([]);
  const departmentOptions = ref([]);

  const makeDepartmentOptions = () => {
    const res = [];

    faculties.value.forEach(faculty => {
      departments.value.filter
      res.push({
        faculty: faculty.name?.value,
        departments: departments.value.filter(dep => dep.faculty_uuid === faculty.uuid).map(d => {
          

          return {
            uuid: d.uuid,
            name: d.name?.value,
            category: 'category',
          }
        })
      })
    });

    departmentOptions.value = res;
  }
  // #endregion

  const loadData = changed => {
    form.value.department_uuids = [];

    const params = {
      filters: {
        alias_uuids: form.value.alias_uuid.length ? [form.value.alias_uuid] : [],
        country_uuids: form.value.country_uuid.length ? [form.value.country_uuid] : [],
        language_uuids: form.value.language_uuid.length ? [form.value.language_uuid] : [],
        university_uuids: form.value.university_uuid.length ? [form.value.university_uuid] : [],
        degree_uuids: form.value.degree_uuid.length ? [form.value.degree_uuid] : [],
      },
    }

    Promise.all(makePromiseValues(changed, params)).then(() => {
      setTimeout(makeDepartmentOptions, 1500);
    });
  }

  const clear = () => {
    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        form.value[key] = '';
      }
    }

    loadAliases()
    loadLanguages()
    loadDegrees()
    loadCountries()
    loadUniversities()
  }

  const checkDepartmentUuid = () => {
    if (departmentUuid?.value) {
      store.dispatch('department/showDepartmentAsync', { uuid: departmentUuid.value })
        .then(response => {
          const {
            uuid,
            name,
            alias_uuid,
            university: { country_uuid },
            language_uuid,
            degree_uuid,
            university_uuid,
          } = response.data;

          form.value.alias_uuid = alias_uuid;
          form.value.country_uuid = country_uuid;
          form.value.language_uuid = language_uuid;
          form.value.degree_uuid = degree_uuid;
          form.value.university_uuid = university_uuid;
          loadData()
          form.value.department_uuids = [{ uuid, name: name?.value }];
        })
    }
  }

  const checkUniversityUuid = () => {
    if (universityUuid?.value) {
      store.dispatch('university/showUniversityAsync', universityUuid.value)
        .then(response => {
          console.log('checkUniversityUuid response: ', response);
          const {
            uuid,
            country_uuid,
          } = response.data;

          // form.value.alias_uuid = alias_uuid;
          form.value.country_uuid = country_uuid;
          // form.value.language_uuid = language_uuid;
          // form.value.degree_uuid = degree_uuid;
          form.value.university_uuid = uuid;
          loadData()
        })
    }
  }

  onMounted(() => {
    clear()
    checkDepartmentUuid()
    checkUniversityUuid()
  })

  return {
    form,

    aliases,
    languages,
    degrees,
    countries,
    universities,
    departmentOptions,

    loadData,
  }
}