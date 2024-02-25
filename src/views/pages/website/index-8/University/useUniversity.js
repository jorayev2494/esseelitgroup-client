import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue";
import { useStore } from "vuex"

export default function useUniversity() {

  const store = useStore();
  const { imageFromStorage } = useUrlPattern();

  const universities = ref([]);

  const universityMapper = university => {
    university.logo = imageFromStorage(university.logo);
    university.cover = imageFromStorage(university.cover);

    return university;
  }

  const loadUniversities = () => {
    store.dispatch('university/loadUniversityListAsync', {
      params: {
        filter_by_company_uuid: '885a3665-0684-43e5-be1c-677da726bbf6',
      },
    })
      .then(response => {
        console.log('adawdwadawd: ', universities.value);
        universities.value = response.data.map(universityMapper);
      })
      .catch(error => {

      });
  }

  onMounted(() => {
    loadUniversities();
  })

  return {
    universities,
  }
}
