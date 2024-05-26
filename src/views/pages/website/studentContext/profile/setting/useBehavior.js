import useChangeImage from "@/views/pages/useCases/useChangeImage"
import { onMounted, ref } from "vue"
import { useStore } from "vuex"

export default () => {
  const store = useStore()
  const { imagePreview, uploadImage } = useChangeImage()

  const form = ref(null)

  const mapProfile = profile => {
    imagePreview.value = profile?.avatar?.url;

    return profile;
  }

  const loadProfile = () => {
    store.dispatch('studentContext/profile/loadProfileAsync').then(response => {
      form.value = mapProfile(response.data)
    })
  }

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        formData.append(key, value)
      }
    }

    return formData;
  }

  const update = () => {
    store.dispatch('studentContext/profile/updateProfileAsync', { data: getData() })
  }

  onMounted(() => {
    loadProfile()
  })

  return {
    form,
    imagePreview,

    uploadImage,
    update,
  }
}