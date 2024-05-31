import IndexFourInstructor from "@/assets/json/website/indexfourinstructor.json";
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default () => {

  const store = useStore()
  const { defaultImage } = useUrlPattern();

  // IndexFourInstructor: IndexFourInstructor,
  const settings = {
    itemsToShow: 1,
    snapAlign: "center",
  }

  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  const breakpoints = {
    575: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // 700px and up
    767: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // 991 and up
    991: {
      itemsToShow: 4,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  }

  const items = ref([])

  const itemMapper = item => {
    if (item?.avatar?.url) {
      item.avatar.url = item?.avatar?.url ?? defaultImage('avatar');
    }

    return item;
  }

  const loadItems = (params = {}) => {
    store.dispatch('manager/loadManagerListAsync', { params })
      .then(response => {
        items.value = response.data.filter(i => i.avatar).map(itemMapper)
      })
  }

  onMounted(() => {
    loadItems()
  })

  return {
    items,
    IndexFourInstructor,
    settings,
    breakpoints, 
  }
}