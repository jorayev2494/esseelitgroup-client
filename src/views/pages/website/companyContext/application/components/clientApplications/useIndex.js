import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { onMounted, ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { getStatusStyle } from "../../useCases/usePartials";
import { usePaginator } from '@/views/pages/useCases/paginator';

export default function useIndex({ props }) {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();
  const { studentUuid } = toRefs(props)

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'university', title: t('companyContext.application.form.university') },
    { field: 'country', title: t('companyContext.application.form.country') },
    { field: 'language', title: t('companyContext.application.form.language') },
    { field: 'degree.value', title: t('companyContext.application.form.degree') },
    { field: 'status', title: t('companyContext.application.form.status') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadApplications();
  }

  const applicationMapper = application => {
    application.created_at = d(new Date(application.created_at * 1000), 'short');
    application.university.logo = image(application.university.logo);

    return application;
  }

  const loadApplications = () => {
    loading.value = true;

    store.dispatch('companyContext/application/loadStudentApplicationsAsync', { studentUuid: studentUuid.value, params: { ...paginator.toQueryParams(), } })
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
      store.dispatch('companyContext/application/deleteApplicationAsync', { uuid: data.value.uuid }).then(reloadData);
    }
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
    // setImmediate(reloadData, 2000)
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
