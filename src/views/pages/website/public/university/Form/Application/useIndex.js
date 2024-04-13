import { onMounted, ref, toRefs } from "vue"
import { useAlias, useCountry, useLanguage, useDegree, useUniversity, useFaculty, useDepartment } from '../useCases/usePartials'

export default function useIndex({ props }) {

  const { aliases, loadAliases } = useAlias()
  const { languages, loadLanguages } = useLanguage()
  const { degrees, loadDegrees } = useDegree()
  const { countries, loadCountries } = useCountry()
  const { universities, loadUniversities } = useUniversity()
  const { departments, loadDepartments } = useDepartment()
  const { faculties, loadFaculties } = useFaculty()

  const {
    form,
  } = toRefs(props);
  
  const makePromiseValues = (changed, params) => {
    const value = [];

    console.log('makePromiseValues: ', changed, params);

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
    // selectedDepartments.value = [];

    console.log('faculties.value :>> ', faculties.value);
    console.log('departments.value :>> ', departments.value);


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

    console.log('object', changed, params);

    Promise.all(makePromiseValues(changed, params)).then(() => {
      setTimeout(makeDepartmentOptions, 1000);
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

  onMounted(() => {
    clear()
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