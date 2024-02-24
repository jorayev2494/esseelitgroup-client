import { reactive } from "vue"

export default function useIndex({ props }) {

  const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
  });


  return {
    form,
  }
}
