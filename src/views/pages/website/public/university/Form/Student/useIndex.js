import { toRef } from "vue"

export default function useIndex({ props }) {

  const {
    form
  } = toRef(props)

  return {
    form,
  }
}
