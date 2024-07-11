import { onMounted, ref } from "vue"
import authService from '@/services/auth/student/useAuth'
import Tr from '@/services/translations/translation'
import { useRoute, useRouter } from "vue-router"

export default () => {
  const route = useRoute();
  const router = useRouter();

  const form = ref({
    token: '',
    password: '',
    password_confirmation: ''
  });

  const getData = () => form.value;

  const send = () => {
    authService.restorePassword(getData()).then(() => {
      router.push(Tr.i18nRoute({ name: 'student-login' }));
    });
  }

  onMounted(() => {
    form.value.token = route.params.token;
  })

  return {
    form,

    send,
  }
}