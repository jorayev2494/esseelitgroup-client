import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, toRefs } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function useIndex({ props })
{
  const route = useRoute();
  const store = useStore();
  const { image } = useUrlPattern();
  const { university } = toRefs(props);

  const faculty = ref(null)

  const facultyMapper = faculty => {
    faculty.logo = image(faculty.logo);

    return faculty;
  }

  const loadFaculty = uuid => {
    store.dispatch('faculty/loadFacultyShowAsync', { uuid }).then(response => {
      faculty.value = facultyMapper(response.data)
    }).catch(error => {
      
    })
  }

  onMounted(() => {
    loadFaculty(route.params.uuid);
  })

  return {
    faculty,
  }
}