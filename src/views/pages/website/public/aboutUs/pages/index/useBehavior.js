import { onMounted, ref } from "vue";
import { useStore } from "vuex"

export default () => {
  const store = useStore();

  const slug = 'about-us';
  const data = ref(null);

  const loadPageData = () => {
    store.dispatch('staticPage/showStaticPageAsync', { slug })
      .then(response => {
        data.value = response.data
      })
  }

  onMounted(() => {
    loadPageData()
  })

  return {
    data,
  }
}
