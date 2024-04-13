import httpClient from "@/services/http";
import { ref } from "vue";
import { useStore } from "vuex";

export const useCompany = () => {
  const store = useStore();

  const companies = ref([]);

  const loadCompanies = () => {
    companies.value = []
    httpClient.dispatch('company/loadCompanyListAsync', {}).then(response => {
      companies.value = response.data;
    })
  }

  return {
    companies,

    loadCompanies,
  }
}

export const useAlias = () => {
  // const store = useStore();

  const aliases = ref([]);

  const loadAliases = (params = {}) => {
    aliases.value = []
    httpClient.get('/public/universities/aliases/list', { params }).then(response => {
      aliases.value = response.data
    });
  }

  return {
    aliases,

    loadAliases
  }
}

export const useLanguage = () => {
  // const store = useStore();

  const languages = ref([]);

  const loadLanguages = (params= {}) => {
    languages.value = []
    httpClient.get('/public/languages/languages/list', { params }).then(response => {
      languages.value = response.data;
    })
  }

  return {
    languages,

    loadLanguages,
  }
}

export const useDegree = () => {
  const store = useStore();

  const degrees = ref([]);

  const loadDegrees = (params= {}) => {
    degrees.value = []
    httpClient.get('public/universities/degrees/list', { params }).then(response => {
      degrees.value = response.data;
    })
  }

  return {
    degrees,

    loadDegrees,
  }
}

export const useCountry = () => {
  // const store = useStore();

  const countries = ref([]);

  const loadCountries = (params = {}) => {
    countries.value = []
    httpClient.get('public/universities/countries/list', { params }).then(response => {
      countries.value = response.data;
    })
  }

  return {
    countries,

    loadCountries,
  }
}

export const useUniversity = () => {
  // const store = useStore();

  const universities = ref([]);

  const loadUniversities = (params = {}) => {
    universities.value = []
    httpClient.get('public/universities/universities/list', { params }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({ uuid, name }));
    })
  }

  return {
    universities,

    loadUniversities,
  }
}

export const useFaculty = () => {
  // const store = useStore();

  const faculties = ref([]);

  const loadFaculties = (params = {}) => {
    faculties.value = []
    httpClient.get('public/universities/faculties/list', { params }).then(response => {
      faculties.value = response.data;
    })
  }

  return {
    faculties,

    loadFaculties,
  }
}

export const useDepartment = () => {
  // const store = useStore();

  const departments = ref([]);

  const loadDepartments = (params = {}) => {
    departments.value = []
    httpClient.get('public/universities/departments/list', { params }).then(response => {
      departments.value = response.data.map(({ uuid, name, faculty_uuid }) => ({
        uuid,
        name,
        faculty_uuid,
      }));
    })
  }

  return {
    departments,

    loadDepartments,
  }
}
