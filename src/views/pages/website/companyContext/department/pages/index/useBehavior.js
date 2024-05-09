import { usePaginator } from "@/views/pages/useCases/paginator"
import { useLoader } from "@/views/pages/useCases/useLoader"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import useFilters from "../../useCases/useFilters";
import useSearch from "@/views/pages/utils/useSearch"

export default () => {
  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { filters } = useFilters();
  const { form, toQueryParams } = useSearch('name');

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'university', title: t('companyContext.department.form.university') },
    { field: 'name', title: t('companyContext.department.form.name') },
    { field: 'information', title: t('companyContext.department.form.information') },
    { field: 'location', title: t('companyContext.department.form.location') },
    { field: 'price', title: t('companyContext.department.form.price') },
    // { field: 'created_at', title: t('system.created_at'), type: 'date' },
    // { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = (filters = []) => {
    items.value = [];
    loadItems(filters);
  }

  const applicationMapper = application => {
    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadItems = (filters) => {
    loading.value = true;

    store.dispatch('companyContext/department/loadDepartmentsAsync', { params: { ...paginator.toQueryParams(), ...toQueryParams(), filters } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(applicationMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
  });

  return {
    form,
    items,
    columns,
    loading,
    filters,

    paginator,

    reloadData,
    changeServer,
  }
}