import { usePaginator } from "@/views/pages/useCases/paginator"
import { useLoader } from "@/views/pages/useCases/useLoader"
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"

export default () => {
  const store = useStore()
  const { t } = useI18n()
  const paginator = usePaginator()
  const loader = useLoader()

  const items = ref([])
  const columns = [
    { field: 'full_name', title: t('companyContext.student.form.full_name'), },
    // { field: 'gender', title: t('system.gender.label') },
    // { field: 'company.name', title: t('companyContext.student.form.company') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ]

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const loadItems = () => {
    loader.start()
    store.dispatch('companyContext/employee/loadEmployeesAsync', { params: { ...paginator.toQueryParams(), } }).then(response => {
      items.value = response.data.data
    }).catch(() => {
      
    }).finally(() => {
      loader.stop()
    });
  }

  const remove = data => {
    const confirmed = confirm(`Do you want delete the employee '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('companyContext/employee/deleteEmployeeAsync', { uuid: data.value.uuid }).then(reloadData);
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
    items,
    columns,
    paginator,
    loader,

    remove,
    changeServer,
  }
}