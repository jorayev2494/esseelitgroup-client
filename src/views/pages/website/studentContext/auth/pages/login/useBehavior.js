import { ref } from "vue"
import authService from '@/services/auth/student/useAuth'
import Tr from '@/services/translations/translation'
import { useRouter } from "vue-router"
import { toast } from "vue3-toastify"
import { useI18n } from "vue-i18n"

export default () => {
  const router = useRouter();
  const { t } = useI18n()

  const isShowPassword = ref(false);

  const form = ref({
    email: '',
    password: '',
  });

  const getData = () => form.value

  const login = () => {
    authService.login(getData()).then(response => {
      const { data } = response;

      router.push(Tr.i18nRoute({ name: 'student-dashboard' }))
        .then(() => {
          const { first_name } = data.auth_data;

          toast.success(t('studentContext.auth.login.flash_messages.success.welcome', { first_name }))
        });
    });
  }

  const toggleIsShowPassword = () => isShowPassword.value = !isShowPassword.value;

  return {
    isShowPassword,
    form,

    toggleIsShowPassword,
    login,
  }
}
