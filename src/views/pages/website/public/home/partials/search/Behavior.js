import useSearch from "@/views/pages/utils/useSearch";
import { useRouter } from "vue-router";

export default function useBehavior()
{
  const router = useRouter();

  const {
    form,

    toQueryParams,
  } = useSearch('name');

  const popularSearchHandler = item => {
    form.value.search = item
  }

  const search = () => {
    router.push({ name: 'university-search', query: { ...toQueryParams() } })
  }

  return {
    form,
    popularSearchHandler,

    search,
  }
}