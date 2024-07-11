import { onMounted, ref } from "vue";
import { useStore } from "vuex"

export default () => {
  const store = useStore();

  const items = ref([]);

  const download = ({ uuid, title, file: { extension } }) => {
    store.dispatch('document/downloadDocumentAsync', { uuid, name: `${title}.${extension}` })
  }

  const loadItems = (params = {}) => {
    store.dispatch('document/loadDocumentListAsync', { params })
      .then(response => {
        items.value = response.data
      })
  }

  onMounted(() => {
    loadItems()
  })

  return {
    items,

    download
  }
}