import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useNationality, useCountryOfResidence, useHighSchoolCountry, useLanguage } from '../../useCases/usePartials' 
import Tr from '@/services/translations/translation'
import useGender from "@/views/pages/useCases/useGender";
import useMaritalStatus from "@/views/pages/useCases/useMaritalStatus";
import useChangeImage from "@/views/pages/useCases/useChangeImage";

export default () => {

  const router = useRouter();
  const store = useStore();
  const { image } = useUrlPattern();

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { nationalityPreview, nationalities, loadNationalities } = useNationality();
  const { countryOfResidencePreview, countryOfResidences, loadCountryOfResidences } = useCountryOfResidence();
  const { highSchoolCountryPreview, highSchoolCountries, loadHighSchoolCountries } = useHighSchoolCountry();
  const { genderPreview, genders } = useGender();
  const { maritalStatusPreview, maritalStatuses } = useMaritalStatus();
  const { languagePreview, languages, loadLanguages } = useLanguage();

  const additionalDocuments = reactive([]);

  const form = ref({
    first_name: '',
    last_name: '',
    avatar: '',
    birthday: '',
    father_name: '',
    mother_name: '',
    passport_number: '',
    passport_date_of_issue: '',
    passport_date_of_expiry: '',
    email: '',
    phone: '',
    nationality_uuid: '',
    country_of_residence_uuid: '',
    high_school_name: '',
    high_school_country_uuid: '',
    high_school_grade_average: '',
    communication_language_uuid: '',
    home_address: '',
    friend_phone: '',
    gender: '',
    marital_type: '',
  });

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
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

  const create = () => {
    store.dispatch('companyContext/student/createStudentAsync', { data: getData() })
      .then(() => {
        router.push(Tr.route({ name: 'company-students' }))
      })
  }

  onMounted(() => {
    loadNationalities();
    loadCountryOfResidences();
    loadHighSchoolCountries();
    loadLanguages();
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

    languagePreview,
    languages,

    additionalDocuments,

    create,
  }
}
