import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useApplicationStatus from "../../useCases/useApplicationStatus";
import useStudentNationality from "../../useCases/useStudentNationality";
import { useDate } from "@/views/pages/utils/helpers";
import useParticipants from "../../useCases/useParticipants";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;

  const { dateTimeFromTimestamp } = useDate();
  const { applicationStatuses } = useApplicationStatus();
  const { studentNationalities } = useStudentNationality();

  const inputs = useInputs();

  const form = ref(null);
  const wonStudent = ref(null);
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const itemMapper = item => {
    item.start_time = dateTimeFromTimestamp(item.start_time);

    if (item.end_time) {
      item.end_time = dateTimeFromTimestamp(item.end_time);
    }

    return item
  }

  const loadItem = () => {
    store.dispatch('studentContext/contest/showContestAsync', { uuid })
      .then(response => {
        form.value = itemMapper(response.data);

        loadWonStudent(response.data.uuid);
      })
  }

  const loadWonStudent = companyUuid => {
    store.dispatch('studentContext/contest/showContestWonStudentAsync', { companyUuid })
      .then(response => {
        wonStudent.value = response.data;
      })
  }

  onMounted(() => {
    // loadApplicationStatuses();
    // loadStudentNationalities();
    loadItem()
    loadWonStudent()

    // if ('start_time' in form) {
    //   form.start_time = dateTimeFromTimestamp(Math.floor(Date.now() / 1000));
    // }
  })

  return {
    form,
    wonStudent,

    inputs,
    applicationStatuses,
    studentNationalities,

    activityOptions,
  }
}
