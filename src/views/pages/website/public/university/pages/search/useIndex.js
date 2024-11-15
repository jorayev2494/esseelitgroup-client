import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { usePaginate } from "@/views/pages/utils/usePaginate";
import useSearch from "@/views/pages/utils/useSearch";
import { onMounted, ref } from "vue"
import { useStore } from "vuex";

export default function useIndex()
{
  const store = useStore();
  const { image } = useUrlPattern();
  
  const { form: searchForm } = useSearch('name');
  const paginator = usePaginate();

  const searchResults = ref([]);

  const countries = ref([]);
  const cities = ref([]);
  const facultyNames = ref([]);
  const departments = ref([]);
  const departmentOptions = ref([]);
  const degrees = ref([]);
  const languages = ref([]);

  const filterForm = ref({});

  const filters = ref([
    {
      label: 'search.filter.labels.other_filters',
      field: 'only_in_country_list',
      type: 'checkbox',
      multiple: false,
      items: [
        {
          label: 'search.filter.titles.only_in_country_list',
          value: true,
          translate: true,
        }
      ],
    },
    {
      label: 'search.filter.labels.countries_and_cities',
      field: 'city_uuids',
      type: 'group-select',
      multiple: true,
      items: countries,
    },
    {
      label: 'search.filter.labels.languages',
      field: 'language_uuids',
      type: 'checkbox',
      multiple: true,
      items: languages,
    },
    {
      label: 'search.filter.labels.degrees',
      field: 'degree_uuids',
      type: 'checkbox',
      multiple: true,
      items: degrees,
    },
    {
      label: 'search.filter.labels.faculties_and_departments',
      field: 'department_uuids',
      type: 'group-select',
      multiple: true,
      items: departmentOptions,
    },
  ]);

  const getParams = () => {
    return {
      ...searchForm.value,
    };
  }

  const loadCountries = (params = {}) => {
    return store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      countries.value = response.data.map(({ uuid, value }) => ({
        uuid,
        label: value,
        value: uuid,
      }))
    })
  }

  const loadCities = (params = {}) => {
    return store.dispatch('city/loadCityListAsync', { params }).then(response => {
      cities.value = response.data.map(({ uuid, value, country_uuid }) => ({
        uuid,
        label: value,
        value: uuid,
        country_uuid,
      }))
    })
  }

  const loadDegrees = (params = {}) => {
    return store.dispatch('degree/loadDegreeListAsync', { params }).then(response => {
      degrees.value = response.data.map(({ uuid, value }) => ({
        uuid,
        label: value,
        value: uuid,
      }))
    })
  }

  const loadFacultyNames = (params = {}) => {
    return store.dispatch('facultyName/loadFacultyNameListAsync', { params }).then(response => {
      facultyNames.value = response.data.map(({ uuid, value }) => ({
        uuid,
        label: value,
        value: uuid,
      }))
    })
  }

  const loadLanguages = (params = {}) => {
    return store.dispatch('language/loadLanguageListAsync', { params }).then(response => {
      languages.value = response.data.map(({ uuid, value }) => ({
        uuid,
        label: value,
        value: uuid,
      }))
    })
  }

  const searchItemMapper = item => {
    item.logo = image(item.logo);

    return item;
  }

  const search = () => {
    searchResults.value = [];

    paginator.refreshData();
  }

  const loadMore = () => loadItems({ ...paginator.toQueryParams(), filters: filterForm.value })

  const loadItems = (params = {}) => {
    return store.dispatch('university/searchUniversityAsync', { params: { ...getParams(), ...params } }).then(response => {
      const { data } = response.data;

      searchResults.value = searchResults.value.concat(data.map(searchItemMapper));

      return response;
    })
  }

  const makeCountryAndCitySelect = () => {
    countries.value.forEach(country => {
      country.items = cities.value.filter(city => city.country_uuid === country.uuid)
    })
  }

  const loadDepartments = (params = {}) => {
    return store.dispatch('department/loadDepartmentListAsync', { params }).then(response => {
      departments.value = response.data.map(({ uuid, faculty, name }) => ({
        uuid,
        label: name?.value,
        value: uuid,
        faculty_name_uuid: faculty.name?.uuid,
      }))
    })
  }

  // #region Department
  const makeDepartmentOptions = () => {
    const res = [];

    facultyNames.value.forEach(facultyName => {
      departments.value.filter
      res.push({
        value: facultyName.uuid,
        label: facultyName.label,
        items: departments.value.filter(dep => dep.faculty_name_uuid === facultyName.uuid).map(d => ({
          value: d.uuid,
          label: d.label,
        }))
      })
    });

    departmentOptions.value = res;
  }
  // #endregion

  onMounted(() => {
    paginator.setHandler(loadMore);
    paginator.reloadData();

    Promise.all([
      loadCountries(),
      loadCities(),
      loadFacultyNames(),
      loadDepartments(),
      loadDegrees(),
      loadLanguages(),
    ]).then(() => {
      makeCountryAndCitySelect();
      makeDepartmentOptions();
    })
  })

  return {
    searchForm,
    filterForm,
    filters,
    searchResults,
    paginator,

    search,
  }
}