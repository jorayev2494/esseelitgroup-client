import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default function useUniversityForm() {

  const { image } = useUrlPattern();
  const router = useRouter();
  const store = useStore();

  const university = ref(null);

  const loadUniversity = () => {
    const uuid = router.currentRoute.value.params.uuid;

    store.dispatch('university/showUniversityAsync', uuid).then(({ data }) => {
      university.value = data;
      university.value.cover = image(university.value.cover);
      university.value.logo = image(university.value.logo);
    })
  }

  onMounted(() => {
    loadUniversity();
  })

  return {
    university,
  }
}