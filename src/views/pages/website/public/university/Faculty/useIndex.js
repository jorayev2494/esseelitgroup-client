import { onMounted, ref, toRefs } from "vue"
import { useStore } from "vuex"

export default function useIndex({ props }) {

  const store = useStore();
  const { university } = toRefs(props);

  const faculties = ref([]);

  const loadFaculties = universityUuid => {
    store.dispatch('faculty/loadFacultyListAsync', {
      params: {
        filter_by_university_uuid: universityUuid,
      }
    }).then(response => {
      faculties.value = response.data
    }).catch(error => {
      
    })
  }

  onMounted(() => {
    loadFaculties(university.value.uuid)
  })

  return {
    faculties,
  }
}