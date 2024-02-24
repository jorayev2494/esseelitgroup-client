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
    console.log('adawdwadawd: loadUniversities');
    store.dispatch('university/loadUniversitiesAsync')
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
