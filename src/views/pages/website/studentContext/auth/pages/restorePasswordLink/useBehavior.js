import { ref } from "vue"
import authService from '@/services/auth/student/useAuth'
import Tr from '@/services/translations/translation'
import { useRouter } from "vue-router"

export default () => {
  const router = useRouter();

  const form = ref({
    email: 'student@gmail.com',
  });

  const getData = () => form.value;

  const send = () => {
    authService.forgotPassword(getData()).then(() => {
      router.push(Tr.i18nRoute({ name: 'company-login' }));
    });
  }

  return {
    form,

    send,
  }
}