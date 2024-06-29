import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue";
import { useStore } from "vuex"

export default function useUniversity() {

  const store = useStore();
  const { image } = useUrlPattern();
  const limit = 6;

  const universities = ref([]);

  const universityMapper = university => {
    university.logo = image(university.logo);
    university.cover = image(university.cover);

    return university;
  }

  const loadUniversities = () => {
    store.dispatch('university/loadUniversityListAsync', {
      params: {
        limit, 
        filters: {
          // company_uuid: '885a3665-0684-43e5-be1c-677da726bbf6',
        }
      },
    })
      .then(response => {
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
