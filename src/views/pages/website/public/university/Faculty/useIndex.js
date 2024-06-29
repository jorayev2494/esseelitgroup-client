import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref, toRefs } from "vue"
import { useStore } from "vuex"

export default function useIndex({ props }) {

  const store = useStore();
  const { image } = useUrlPattern();
  const { university } = toRefs(props);

  const faculties = ref([]);

  const facultyMapper = faculty => {
    faculty.logo = image(faculty.logo);

    return faculty;
  }

  const loadFaculties = universityUuid => {
    store.dispatch('faculty/loadFacultyListAsync', {
      params: {
        filters: {
          university_uuids: [universityUuid],
        }
      }
    }).then(response => {
      faculties.value = response.data.map(facultyMapper)
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
