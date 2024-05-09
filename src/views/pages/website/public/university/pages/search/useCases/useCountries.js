import { ref } from "vue";
import { useStore } from "vuex";

export default function useCountries()
{
  const store = useStore();

  const countries = ref([]);

  const loadCountries = (params = {}) => {
    store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      countries.value = response.data
    })
  }

  return {
    countries,
    loadCountries,
  };
}
