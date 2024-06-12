import { usePaginator } from "@/views/pages/useCases/paginator"
import { useLoader } from "@/views/pages/useCases/useLoader"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import useMappers from '../../mappers/index.js';
import { useApplicationStatusStyle } from "../../../../../useCases/useApplicationStatusStyle";
import useSearch from "@/views/pages/utils/useSearch.js"
import useFilters from "../../useCases/useFilters";

export default () => {
  const store = useStore()
  const { t } = useI18n()
  const { filters } = useFilters()
  const paginator = usePaginator()
  const loader = useLoader()
  const { indexStudentMapper } = useMappers() 
  const { form: searchForm, toQueryParams } = useSearch('full_name')

  const items = ref([])
  const columns = [
    { field: 'full_name', title: t('companyContext.student.form.full_name') },
    { field: 'application_language', title: t('companyContext.student.application.language') },
    { field: 'application_degree', title: t('companyContext.student.application.degree') },
    { field: 'application_country', title: t('companyContext.student.application.country') },
    { field: 'application_university', title: t('companyContext.student.application.university') },
    { field: 'application_departments', title: t('companyContext.student.application.departments') },
    { field: 'application_status', title: t('companyContext.student.application.status') },
    // { field: 'company.name', title: t('companyContext.student.form.company') },
    // { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ]

  const reloadData = (params = {}) => {
    items.value = [];
    loadItems(params);
  }

  const loadFilters = filters => {
    reloadData({ filters })
  }

  const statusSelected = ({ uuid }) => {
    loadFilters({
      status_value_uuids: [uuid],
    })
  }

  const clearSelected = () => reloadData()

  const loadItems = (params = {}) => {
    loader.start()
    store.dispatch('companyContext/student/loadStudentsAsync', { params: { ...paginator.toQueryParams(), ...toQueryParams(), ...params, } }).then(response => {
      items.value = response.data.data.map(indexStudentMapper)
    }).catch(() => {
      
    }).finally(() => {
      loader.stop()
    });
  }

  const remove = data => {
    const confirmed = confirm(`Do you want delete the student '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('companyContext/student/deleteStudentAsync', { uuid: data.value.uuid }).then(reloadData);
    }
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    loadItems()
  })

  return {
    searchForm,
    items,
    columns,
    paginator,
    loader,
    filters,

    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    remove,
    changeServer,
    loadFilters,
  }
}