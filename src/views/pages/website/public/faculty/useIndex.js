import { onMounted, toRefs } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function useIndex({ props })
{
  const route = useRoute();
  const store = useStore();
  const { university } = toRefs(props);

  const faculty = ref(null)

  const loadFaculty = uuid => {
    store.dispatch('faculty/loadFacultyShowAsync', { uuid }).then(response => {
      faculty.value = response.data
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