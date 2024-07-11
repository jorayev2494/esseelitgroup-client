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
  const showUuid = ref(null);
  const modalShowData = ref({
    title: '',
    content: '',
  });

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'author', title: t('studentContext.announcement.form.author'), width: '200px' },
    { field: 'content', title: t('studentContext.announcement.form.content') },
    { field: 'created_at', title: t('system.created_at'), type: 'date', width: '150px' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end', width: '200px' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const announcementMapper = announcement => {
    const length = 120;
    if (announcement.content.length > length) {
      announcement.content = announcement.content.slice(0, length).trim() + '...'
    }

    announcement.created_at = d(dateFromTimestamp(announcement.created_at), 'short')
    announcement.author.avatar = image(announcement.author.avatar)

    return announcement;
  }

  const loadItems = (params = {}) => {
    loading.value = true;

    store.dispatch('studentContext/announcement/loadAnnouncementsAsync', { params: { ...params, ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(announcementMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const setModalShowData = uuid => {
    store.dispatch('studentContext/announcement/viewAnnouncementAsync', { uuid })
      .then(response => {
        modalShowData.value.title = response.data.title;
        modalShowData.value.content = response.data.content;
      })
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
  });

  return {
    showUuid,
    items,
    columns,
    loading,
    modalShowData,
    
    paginator,

    changeServer,
    setModalShowData,
  }
}
