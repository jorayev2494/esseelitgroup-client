import { usePaginator } from '@/views/pages/useCases/paginator';
import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useDate } from '@/views/pages/utils/helpers';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'title', title: t('studentContext.contest.form.title') },
    { field: 'start_time', title: t('studentContext.contest.form.start_time') },
    { field: 'end_time', title: t('studentContext.contest.form.end_time') },
    { field: 'is_active', title: t('studentContext.contest.form.is_active') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const departmentMapper = department => {
    department.start_time = d(dateFromTimestamp(department.start_time), 'short');
    department.end_time = d(dateFromTimestamp(department.end_time), 'short');
    department.created_at = d(dateFromTimestamp(department.created_at), 'short');

    return department;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('studentContext/contest/loadContestsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(departmentMapper);
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
    items,
    columns,
    loading,

    paginator,
    loadItems,

    changeServer,
  }
}
