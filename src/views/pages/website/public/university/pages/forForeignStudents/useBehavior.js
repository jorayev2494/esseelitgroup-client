import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useString } from "@/views/pages/utils/helpers";

export function useBehavior()
{
  const store = useStore();
  const { image } = useUrlPattern();
  const { strCropper } = useString();

  const items = ref([]);

  const itemMapper = item => {
    item.logo = image(item.logo);
    item.name = strCropper(item.name, 39);

    return item;
  }

  const loadUniversityList = (params = {}) => {
    store.dispatch('university/loadUniversityListAsync', { params })
      .then(response => {
        const { data } = response;

        items.value = data.map(itemMapper);
      });
  }

  onMounted(() => {
    loadUniversityList({ 
      filters: {
        is_for_foreign: true,
      }
    });
  })

  return {
    items,
  }
}
