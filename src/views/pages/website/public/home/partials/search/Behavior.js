import useSearch from "@/views/pages/utils/useSearch";
import { useRouter } from "vue-router";

export default function useBehavior()
{
  const router = useRouter();

  const {
    form,

    toQueryParams,
  } = useSearch('name');

  const search = () => {
    console.log('object');

    router.push({ name: 'universities', query: { ...toQueryParams() } })
  }

  return {
    form,
    search,
  }
}