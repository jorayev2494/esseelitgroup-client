import { usePaginate } from "@/views/pages/utils/usePaginate";
import useSearch from "@/views/pages/utils/useSearch";
import { onMounted, ref, watch } from "vue"
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default function useIndex()
{
  const store = useStore();
  
  const { form: searchForm } = useSearch('name');
  const paginator = usePaginate();

  const searchResults = ref([]);

  const countries = ref([]);
  const cities = ref([]);
  const faculties = ref([]);
  const departments = ref([]);
  const degrees = ref([]);

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
      label: 'search.filter.labels.degrees',
      field: 'degree_uuids',
      type: 'checkbox',
      multiple: true,
      items: degrees,
    },
    {
      label: 'search.filter.labels.faculties',
      field: 'faculty_uuids',
      type: 'checkbox',
      multiple: true,
      items: faculties,
    },
    {
      label: 'search.filter.labels.departments',
      field: 'department_uuids',
      type: 'checkbox',
      multiple: true,
      items: departments,
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

  const loadFaculties = (params = {}) => {
    return store.dispatch('faculty/loadFacultyListAsync', { params }).then(response => {
      faculties.value = response.data.map(({ uuid, name }) => ({
        uuid,
        label: name,
        value: uuid,
      }))
    })
  }

  const loadDepartments = (params = {}) => {
    return store.dispatch('department/loadDepartmentListAsync', { params }).then(response => {
      departments.value = response.data.map(({ uuid, name, is_filled }) => ({
        uuid,
        label: name,
        value: uuid,
        disabled: is_filled,
      }))
    })
  }

  const searchItemMapper = item => {

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

  onMounted(() => {
    paginator.setHandler(loadMore);
    paginator.reloadData();

    Promise.all([
      loadCountries(),
      loadCities(),
      loadFaculties(),
      loadDepartments(),
      loadDegrees()
    ]).then(() => {
      makeCountryAndCitySelect();
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