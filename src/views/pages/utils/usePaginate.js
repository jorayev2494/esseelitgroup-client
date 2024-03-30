import { computed, ref, watch } from "vue"
import { useStore } from "vuex";

export function usePaginate() {

  const store = useStore();

  const handler = ref(null);
  const currentPage = ref(1);
  const page = ref(1);
  const perPage = ref(10);
  const lastPage = ref(1);
  const toRows = ref(0);
  const totalRows = ref(0);
  const perPageOptions = [15, 25, 50, 75, 100];

  const isWatch = ref(true);

  const toQueryParams = () => ({
    page: page.value,
    per_page: perPage.value,
  })

  const reloadData = () => {
    store.commit('setIsLoadingPage', true);

    handler.value().then(response => {
      setMetaData(response.data)
    }).catch(() => {
      
    }).finally(() => {
      setTimeout(() => {
        store.commit('setIsLoadingPage', false);
      }, 100)
    });
  }

  const setMetaData = data => {
    const { current_page, last_page, to, total } = data
  
    currentPage.value = current_page;
    lastPage.value = last_page;
    toRows.value = to
    totalRows.value = total
  }

  const isLastPage = computed(() => lastPage.value === null || currentPage.value === lastPage.value)

  watch([page, perPage], () => {
    if (isWatch.value) {
      reloadData()
    }

    isWatch.value = true;
  });

  const serverPaginate = (p = 1, pPage = null) => {
    perPage.value = pPage ?? perPage.value;
    page.value = p;
  }

  const loadPage = (p = 1, watch = true) => {
    isWatch.value = watch;
    page.value = p;
  }

  const loadNextPage = (p = 1) => {
    page.value += p;
  }

  const refreshData = () => {
    if (page.value === 1) {
      reloadData();
    } else {
      page.value = 1
    }
  }

  const setHandler = h => handler.value = h

  return {
    page,
    perPage,
    lastPage,
    toRows,
    totalRows,
    perPageOptions,

    setHandler,
    loadPage,
    loadNextPage,
    setMetaData,
    serverPaginate,
    toQueryParams,
    isLastPage,
    reloadData,
    refreshData,
  };
}