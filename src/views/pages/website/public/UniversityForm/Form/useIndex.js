import httpClient from "@/services/http";
import { reactive, ref, onMounted, computed } from "vue"
import { useI18n } from "vue-i18n";
import { toast } from 'vue3-toastify';

export default function useIndex({ props }) {

  const { t } = useI18n()

  const { university } = props;

  const basicData = [
    {
      name: 'full_name',
      type: 'text',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'birthday',
      type: 'date',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',
        // format: 'yy-mm-dd',
        pattern: "\d{4}-\d{2}-\d{2}",
      },
    },
    {
      name: 'father_name',
      type: 'text',
      required: false,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'mother_name',
      type: 'text',
      required: false,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'passport_number',
      type: 'text',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'phone',
      type: 'phone',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'friend_phone',
      type: 'text',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'home_address',
      type: 'text',
      required: true,
      class: 'col-12 col-md-12',
      bind: {
        title: 'title value',

      },
    },
  ]

  const uploadFilesBlock = ref(1)

  const uploadFiles = [
    {
      name: 'passport',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'passport_translation',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'school_attestat',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'school_attestat_translation',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'transcript',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'transcript_translation',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'equivalence_document',
      accept: '.pdf',
      required: true,
    },
    {
      name: 'biometric_photo',
      accept: '.pdf',
      required: true,
    },
  ]

  const maxCountAdditionalDocuments = 5;
  const additionalDocuments = reactive([]);

  const form = reactive({
    full_name: '',
    birthday: '',
    father_name: '',
    mother_name: '',
    passport_number: '',
    email: '',
    phone: '',
    friend_phone: '',
    home_address: '',

    country_uuid: '',
    university_uuid: '',
    faculty_uuid: '',
    department_uuid: '',

    passport: null,
    passport_translation: null,
    school_attestat: null,
    school_attestat_translation: null,
    transcript: null,
    transcript_translation: null,
    equivalence_document: null,
    biometric_photo: null,
    is_agreed_to_share_data: false,
  })

  const universities = ref([]);
  const faculties = ref([]);
  const departments = ref([]);
  const countries = ref([]);

  const submitBtn = ref(null);

  const setUploadedFile = event => {
    const { name, files } = event.target;
    const [file] = files;

    if (uploadFiles.map(i => i.name).includes(name) && Object.keys(form).includes(name)) {
      form[name] = file;
    }
  }

  const clearUploadedFiles = () => {
    uploadFilesBlock.value++;
  }

  const clearAdditionalDocuments = () => {
    additionalDocuments.splice(0);
  }

  const loadUniversities = () => {
    const { uuid } = university.company;
    faculties.value = [];
    departments.value = [];

    httpClient.get(`/public/universities/universities/list?filter_by_company_uuid=${uuid}`).then(response => {
      universities.value = response.data.map(({uuid, name}) => ({
        uuid,
        name,
      }));
    })
  }

  const loadFaculties = event => {
    const { name, value } = event.target;

    httpClient.get(`/public/universities/faculties/list?filter_by_university_uuid=${value}`).then(response => {
      faculties.value = response.data.map(({uuid, name}) => ({
        uuid,
        name,
      }));
    })
  }

  const loadDepartments = event => {
    const { name, value } = event.target;

    httpClient.get(`/public/universities/departments/list?filter_by_faculty_uuid=${value}`).then(response => {
      departments.value = response.data.map(({uuid, name}) => ({
        uuid,
        name,
      }));
    })
  }

  const loadCountries = () => {
    const { uuid } = university;
    httpClient.get(`/public/universities/countries/list?filter_by_company_uuid=${uuid}`).then(response => {
      countries.value = response.data.map(({ uuid, value }) => ({ uuid, value}));
    })
  }

  const getData = () => {
    const formData = new FormData();

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const value = form[key];

        if (key === 'is_agreed_to_share_data') {
          const boolValue = (value ? 1 : 0).toString();
          formData.append(key, boolValue);
          continue;
        }
        formData.append(key, value);
      }
    }

    additionalDocuments.forEach(console.log);

    additionalDocuments.forEach(({ document, description }, idx) => {
      formData.append(`additional_documents[${idx}][document]`, document);
      formData.append(`additional_documents[${idx}][description]`, description);
    });

    return formData;
  }

  const formClear = () => {
    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        form[key] = '';
      }
    }
  }

  const sendForm = () => {
    httpClient.post('/public/applications', getData()).then(response => {
      console.log('Response: ', response);
      formClear();
      clearUploadedFiles();
      clearAdditionalDocuments();
      toast.success(t('system.form_success_sent_message'), { position: "top-center" });
      setTimeout(() => {
        submitBtn.value.click();
      }, 100)
    })
  }

  const addAdditionalFile = (event, idx) => {
    const { name, files } = event.target;
    const [file] = files;

    additionalDocuments[idx].document = file;
  }

  const addAdditionalDocument = () => {
    additionalDocuments.push(
      {
        document: '',
        description: '',
      }
    )
  }

  const removeAdditionalDocument = index => {
    additionalDocuments.splice(index, 1);
  }

  const canAddNewAdditionalColumn = computed(() => additionalDocuments.length >= maxCountAdditionalDocuments)
 
  onMounted(() => {
    loadUniversities()
    loadCountries()
  })

  return {
    form,
    uploadFilesBlock,
    universities,
    faculties,
    departments,
    countries,
    basicData,
    uploadFiles,
    loadFaculties,
    loadDepartments,
    additionalDocuments,
    addAdditionalDocument,
    removeAdditionalDocument,
    addAdditionalFile,
    sendForm,
    canAddNewAdditionalColumn,
    setUploadedFile,
    submitBtn,
  }
}
