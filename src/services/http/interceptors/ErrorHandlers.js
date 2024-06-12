import ServerErrorMessage from '@/services/toast/template/ServerErrorMessage.vue';
import ServerValidate from '@/services/toast/template/ServerValidate.vue';
import { toast } from 'vue3-toastify';
const accessToken = localStorage.getItem('access_token');

const toastHandler = ({ data }, template) => {
  const position = accessToken ? 'top-right' : 'top-center'

  toast.error(
    template,
    { position, data }
  );
}

const handlers = [
  {
    status: 422,
    handler: response => {
      toastHandler(response, ServerValidate)
    }
  },
  {
    statuses: [400, 404],
    handler: response => {
      toastHandler(response, ServerErrorMessage)
    }
  },
]

export default handlers;
