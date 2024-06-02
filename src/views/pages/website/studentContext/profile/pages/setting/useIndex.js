import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useNationality, useCountryOfResidence, useHighSchoolCountry } from '../../useCases/usePartials'
import useGender from "@/views/pages/useCases/useGender";
import useMaritalStatus from "@/views/pages/useCases/useMaritalStatus";
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useDate } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";
import { toast } from "vue3-toastify";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { d } = useI18n()
  const { image } = useUrlPattern();
  const { t } = useI18n();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { nationalityPreview, nationalities, loadNationalities } = useNationality();
  const { countryOfResidencePreview, countryOfResidences, loadCountryOfResidences } = useCountryOfResidence();
  const { highSchoolCountryPreview, highSchoolCountries, loadHighSchoolCountries } = useHighSchoolCountry();
  const { genderPreview, genders, findGender } = useGender();
  const { maritalStatusPreview, maritalStatuses, findMaritalStatus } = useMaritalStatus();

  const { dateFromTimestamp, formatDate } = useDate();

  const documents = [
    'passport',
    'passport_translation',
    'school_attestat',
    'school_attestat_translation',
    'transcript',
    'transcript_translation',
    'equivalence_document',
    'biometric_photo',
  ];

  const form = ref({});
  
  const additionalDocuments = reactive([]);

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (documents.includes(key) && !(value instanceof File)) {
          continue;
        }

        formData.append(key, value);
      }
    }

    formData.append(`additional_documents[]`, []);
    additionalDocuments.forEach(({ document, description }, idx) => {
      formData.append(`additional_documents[${idx}][document]`, document);
      formData.append(`additional_documents[${idx}][description]`, description);
    });

    return formData;
  };

  const update = () => {
    store.dispatch('studentContext/profile/updateProfileAsync', { data: getData() })
      .then(() => {
        toast.success(t('companyContext.profile.flash_messages.success.profile_was_updated'))
      })
  }

  const studentMapper = student => {
    student.birthday = formatDate(dateFromTimestamp(student.birthday));
    student.passport_date_of_expiry = formatDate(dateFromTimestamp(student.passport_date_of_expiry));
    student.passport_date_of_issue = formatDate(dateFromTimestamp(student.passport_date_of_issue));

    genderPreview.value = findGender(student.gender);
    maritalStatusPreview.value = findMaritalStatus(student.marital_type);
    
    avatarPreview.value = student.avatar !== null ? student.avatar.url : avatarPreview.value;
    student.avatar = '';

    // student.additional_documents = [];

    return student;
  }

  const loadStudent = () => {
    store.dispatch('studentContext/profile/loadProfileAsync', { uuid }).then(response => {
      form.value = studentMapper(response.data);
    })
  }

  onMounted(() => {
    loadStudent();

    loadNationalities();
    loadCountryOfResidences();
    loadHighSchoolCountries();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    genderPreview,
    genders,

    maritalStatusPreview,
    maritalStatuses,

    nationalityPreview,
    nationalities,

    countryOfResidencePreview,
    countryOfResidences,

    highSchoolCountryPreview,
    highSchoolCountries,

    additionalDocuments,

    update,
  }
}
