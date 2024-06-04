import { usePaginator } from "@/views/pages/useCases/paginator"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { getStatusStyle } from "../../useCases/usePartials";
import { useUrlPattern } from "@/views/pages/utils/UrlPattern"

export default () => {
  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { defaultImage } = useUrlPattern();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'student', title: t('companyContext.application.form.student') },
    { field: 'language', title: t('companyContext.application.form.language') },
    { field: 'degree.value', title: t('companyContext.application.form.degree') },
    { field: 'country', title: t('companyContext.application.form.country') },
    { field: 'university', title: t('companyContext.application.form.university') },
    { field: 'status', title: t('companyContext.application.form.status') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadApplications();
  }

  const applicationMapper = application => {
    if (application.student.avatar?.url === undefined) {
      application.student.avatar = {
        url: defaultImage('avatar'),
      };
    }

    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadApplications = () => {
    loading.value = true;

    store.dispatch('companyContext/application/loadApplicationsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(applicationMapper);
        console.log('Department data: ', data.data)
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