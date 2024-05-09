import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default () => {
  const route = useRoute();
  const store = useStore();
  const { uuid } = route.params

  const item = ref(null);
  const departments = ref([]);

  const itemMapper = item => {
    item.description = item.description ?? '';

    return item;
  }

  const loadItem = () => {
    store.dispatch('departmentName/showDepartmentNameAsync', { uuid })
      .then(response => {
        item.value = itemMapper(response.data);
      });
  }

  const loadUniversities = (params = {}) => {
    store.dispatch('department/loadDepartmentListAsync', { params })
      .then(response => {
        departments.value = response.data;
      })
  }

  onMounted(() => {
    loadItem()
    loadUniversities()
  })

  return {
    item,
    departments,
  }
}