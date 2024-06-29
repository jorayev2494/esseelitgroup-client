import useChangeImage from "@/views/pages/useCases/useChangeImage"
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import { toast } from "vue3-toastify";
import { useStore } from "vuex"

export default () => {
  const store = useStore()
  const { imagePreview, uploadImage } = useChangeImage()
  const { image } = useUrlPattern()
  const { t } = useI18n();

  const form = ref(null)

  const mapProfile = profile => {
    imagePreview.value = image(profile?.avatar);
    profile.avatar = '';

    return profile;
  }

  const loadProfile = () => {
    store.dispatch('companyContext/profile/loadProfileAsync').then(response => {
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
    store.dispatch('companyContext/profile/updateProfileAsync', { data: getData() })
      .then(() => {
        toast.success(t('companyContext.profile.flash_messages.success.profile_was_updated'))
      })
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