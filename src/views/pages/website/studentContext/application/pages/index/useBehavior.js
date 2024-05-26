import { usePaginator } from "@/views/pages/useCases/paginator"
import { useLoader } from "@/views/pages/useCases/useLoader"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { getStatusStyle } from "../../useCases/usePartials";

export default () => {
  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'student', title: t('studentContext.application.form.student') },
    { field: 'language', title: t('studentContext.application.form.language') },
    { field: 'degree.value', title: t('studentContext.application.form.degree') },
    { field: 'country', title: t('studentContext.application.form.country') },
    { field: 'university', title: t('studentContext.application.form.university') },
    { field: 'status', title: t('studentContext.application.form.status') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadApplications();
  }

  const applicationMapper = application => {
    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadApplications = () => {
    loading.value = true;

    store.dispatch('studentContext/application/loadApplicationsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(applicationMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the department '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('studentContext/application/deleteApplicationAsync', { uuid: data.value.uuid }).then(reloadData);
    }
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
  });

  return {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
    getStatusStyle,
  }
}