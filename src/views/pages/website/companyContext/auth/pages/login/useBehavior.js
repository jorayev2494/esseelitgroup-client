import { ref } from "vue"
import authService from '@/services/auth/company/useAuth'
import Tr from '@/services/translations/translation'
import { useRouter } from "vue-router"

export default () => {
  const router = useRouter();

  const isShowPassword = ref(false);

  const form = ref({
    email: 'company@gmail.com',
    password: '12345Secret_',
  });

  const getData = () => form.value

  const login = () => {
    authService.login(getData()).then(() => {
      router.push(Tr.i18nRoute({ name: 'company-dashboard' }));
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
