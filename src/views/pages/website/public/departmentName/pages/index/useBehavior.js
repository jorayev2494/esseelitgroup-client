import FeaturedInstructor from "@/assets/json/website/featuredinstructor.json";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default () => {

  const store = useStore();

  const items = ref([]);

  const reloadData = () => {
    loadItems()
  }

  const itemMapper = item => {
    const valueLength = 75;

    if (item.value?.length > valueLength) {
      item.value = item.value.substring(0, valueLength);
      item.value += '...';
    }

    return item;
  }

  const loadItems = (params = {}) => {
    store.dispatch('departmentName/loadDepartmentNameListAsync', { params: { ...params } })
      .then(response => {
        const { data } = response;

        data.map(itemMapper).forEach(item => items.value.push(item));
      })
  }

  onMounted(() => {
    reloadData()
  })

  return {
    items,

    FeaturedInstructor,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      575: {
        itemsToShow: 2,
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
    },
  }
}
