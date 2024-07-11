import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"

export default () => {
  const route = useRoute();
  const store = useStore();
  const { defaultImage } = useUrlPattern();
  const { uuid } = route.params

  const item = ref(null);

  const itemMapper = item => {
    item.avatar.url = item?.avatar?.url ?? defaultImage('avatar');

    return item;
  }

  const loadItem = () => {
    store.dispatch('manager/showManagerAsync', { uuid })
      .then(response => {
        item.value = itemMapper(response.data)
      })
  }

  onMounted(() => {
    loadItem()
  })

  return {
    item,
  }
}