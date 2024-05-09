import FeaturedInstructor from "@/assets/json/website/featuredinstructor.json";
import { usePaginator } from "@/views/pages/useCases/paginator";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default () => {

  const store = useStore();
  const paginator = usePaginator();

  const items = ref([]);

  const reloadData = () => {
    // items.value = []
    loadItems()
  }

  const loadItems = (params = {}) => {
    store.dispatch('university/loadUniversitiesAsync', { params: { ...params, ...paginator.toQueryParams() } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        // items.value = ;
        data.data.forEach(item => items.value.push(item));
      })
  }

  const loadMore = () => {
    paginator.page.value = paginator.page.value + 1
    reloadData()
  }

  onMounted(() => {
    paginator.perPage.value = 14;
    reloadData()
  })

  return {
    items,
    paginator,
    loadMore,

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