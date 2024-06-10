import { usePaginator } from "@/views/pages/useCases/paginator"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { useApplicationStatusStyle } from "../../../../../useCases/useApplicationStatusStyle";
import { useUrlPattern } from "@/views/pages/utils/UrlPattern"
import useFilters from "../../useCases/useFilters";
import useSearch from "@/views/pages/utils/useSearch";

export default () => {
  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { filters } = useFilters();
  const { defaultImage } = useUrlPattern();
  const { form: searchForm, toQueryParams } = useSearch('full_name');

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

  const reloadData = (params = {}) => {
    items.value = [];
    loadApplications(params);
  }

  const loadFilters = filters => {
    reloadData({ filters })
  }

  const statusSelected = ({ uuid, application_count }) => {

    if (application_count <= 0) {
      return
    }

    loadFilters({
      status_value_uuids: [uuid],
    })
  }

  const clearSelected = () => reloadData()

  const applicationMapper = application => {
    if (application.student.avatar?.url === undefined) {
      application.student.avatar = {
        url: defaultImage('avatar'),
      };
    }

    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadApplications = (params = {}) => {
    loading.value = true;

    store.dispatch('companyContext/application/loadApplicationsAsync', { params: { ...paginator.toQueryParams(), ...toQueryParams(), ...params } })
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
    searchForm,
    items,
    columns,
    loading,
    filters,
    remove,

    paginator,

    changeServer,
    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    loadFilters,
  }
}