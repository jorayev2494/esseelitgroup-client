import { ref } from 'vue';

export function useLoader() {
  const loading = ref(false)

  const start = () => loading.value = true;
  const stop = () => loading.value = false;
  const toggle = () => loading.value = !loading.value;

  // const start = startLoading;
  // const stop = stopLoading;

  return {
    loading,
    start,
    stop,
    toggle,
    // startLoading,
    // stopLoading,
    // toggleLoading,
  };
}
