import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useI18n } from "vue-i18n";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { d } = useI18n()
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();

  const form = ref({});

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        formData.append(key, value);
      }
    }

    return formData;
  };

  const update = () => {
    store.dispatch('companyContext/employee/updateEmployeeAsync', { uuid, data: getData() })
      .then(() => {
        router.push(Tr.route({ name: 'company-employees' }))
      })
  }

  const studentMapper = student => {    
    avatarPreview.value = image(student.avatar);
    student.avatar = '';

    return student;
  }

  const loadItem = () => {
    store.dispatch('companyContext/employee/showEmployeeAsync', { uuid }).then(response => {
      form.value = studentMapper(response.data);
    })
  }

  onMounted(() => {
    loadItem();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    update,
  }
}
