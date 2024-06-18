import { usePaginator } from "@/views/pages/useCases/paginator"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export default () => {
  const store = useStore();
  const route = useRoute();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { uuid } = route.params

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'university', title: t('department.form.university') },
    { field: 'name', title: t('department.form.name') },
    { field: 'information', title: t('department.form.information') },
    { field: 'location', title: t('department.form.location') },
    { field: 'price', title: t('department.form.price') },
    // { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    const filters = {
      faculty_uuids: [
        uuid,
      ],
    };
    loadItems(filters);
  }

  const applicationMapper = application => {
    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadItems = (filters) => {
    loading.value = true;

    store.dispatch('department/loadDepartmentsAsync', { params: { ...paginator.toQueryParams(), filters } })
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

  return  {
    items,
    columns,
    loading,

    paginator,

    reloadData,
    changeServer,
  }
}
