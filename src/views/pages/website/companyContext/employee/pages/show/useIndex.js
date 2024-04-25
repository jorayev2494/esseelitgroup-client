import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useDate } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { d } = useI18n()
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();

  const showInfo = [
    {
      label: 'companyContext.employee.form.full_name',
      icon: 'fa fa-user',
      key: 'full_name',
    },
    {
      label: 'companyContext.employee.form.email',
      icon: 'fa fa-envelope',
      key: 'email',
    },
    // {
    //   label: 'Phone',
    //   icon: 'fa fa-phone',
    //   key: 'phone',
    // },
  ]

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
    store.dispatch('student/updateStudentAsync', { uuid, data: getData() })
      .then(() => {
        router.push(Tr.makeRoute({ name: 'students' }))
      })
  }

  const employeeMapper = employee => {    
    avatarPreview.value = employee.avatar !== null ? employee.avatar.url : avatarPreview.value;
    employee.avatar = '';

    return employee;
  }

  const loadEmployee = () => {
    store.dispatch('companyContext/employee/showEmployeeAsync', { uuid }).then(response => {
      form.value = employeeMapper(response.data);
    })
  }

  onMounted(() => {
    loadEmployee();
  })

  return {
    showInfo,
    form,
    avatarPreview,
    uploadAvatar,

    update,
  }
}
