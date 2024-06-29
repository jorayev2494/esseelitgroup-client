import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue";
import { useStore } from "vuex"

export default () => {
  const store = useStore();
  const { image } = useUrlPattern();

  const slug = 'about-us';
  const data = ref(null);

  const loadPageData = () => {
    store.dispatch('staticPage/showStaticPageAsync', { slug })
      .then(response => {
        data.value = response.data
        data.value.cover = image(data.value.cover);
      })
  }

  onMounted(() => {
    loadPageData()
  })

  return {
    data,
  }
}
