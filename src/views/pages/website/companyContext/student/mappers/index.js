import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useDate } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";

export default () => {

  const { defaultImage } = useUrlPattern();
  const { dateFromTimestamp } = useDate();
  const { d } = useI18n();

  const avatar = student => {
    if (student.avatar?.url === undefined) {
      student.avatar = {
        url: defaultImage('avatar'),
      };
    }
  }

  const applications = student => {
    student.applications.forEach(i => {
      console.log('Item: ', i);
    })

    return student;
  }

  const createdAt = student => {
    student.created_at = d(dateFromTimestamp(student.created_at), 'short')
  }

  const indexStudentMapper = student => {
    avatar(student)
    applications(student)
    createdAt(student)

    return student;
  }

  return {
    indexStudentMapper,
  }
}
