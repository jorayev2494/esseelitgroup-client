import factory from "@/assets/css/html/plugins/select2/js/select2.full";
import httpClient from "@/services/http";
import { reactive, ref, onMounted, computed } from "vue"
import { useI18n } from "vue-i18n";
import { toast } from 'vue3-toastify';
import { useStore } from "vuex";

export default function useIndex({ props }) {

  const store = useStore();
  const { t } = useI18n();

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
    alias_uuid: '',
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

  const aliases = ref([]);
  const universities = ref([]);
  const faculties = ref([]);
  const departments = ref([]);
  const countries = ref([]);

  const submitBtn = ref(null);

  const selectedDepartments = ref([]);
  const departmentOptions = ref([]);

  const makeDepartmentOptions = () => {
    const res = [];

    faculties.value.forEach(faculty => {
      departments.value.filter
      res.push({
        faculty: faculty.name,
        departments: departments.value.filter(dep => dep.faculty_uuid === faculty.uuid).map(d => ({
          uuid: d.uuid,
          name: d.name,
          $isDisabled: d.is_filled,
          category: 'category',
        }))
      })
    });

    departmentOptions.value = res;
  }

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

  const loadUniversities = (params = {}) => {
    // const { uuid } = university.company;
    faculties.value = [];
    departments.value = [];

    httpClient.get(`/public/universities/universities/list`, { params }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }));
    })
  }

  const loadAliases = (params = {}) => {
    // const { uuid } = university.company;
    faculties.value = [];
    departments.value = [];

    store.dispatch(`alias/loadAliasListAsync`, { params }).then(response => {
      aliases.value = response.data.map(({ uuid, value }) => ({
        uuid,
        name: value,
      }));
    })
  }

  const aliasWasChanged = event => {
    universities.value = [];
    faculties.value = [];
    departments.value = [];

    const { name, value } = event.target;

    loadUniversities({
      filters: {
        alias_uuids: [
          value,
        ]
      }
    })
  }

  const universityWasChanged = event => {
    const { name, value } = event.target;

    Promise.all([
      loadFaculties(value),
      loadDepartments(value),
    ]).then(values => {
      setTimeout(makeDepartmentOptions, 1000);
    });
  }

  const loadFaculties = universityUuid => {
    httpClient.get('/public/universities/faculties/list', {
      params: {
        filters: {
          university_uuids: [universityUuid],
        }
      }
    }).then(response => {
      faculties.value = response.data.map(({uuid, name}) => ({
        uuid,
        name: name?.value,
      }));
    })
  }

  const loadDepartments = universityUuid => {
    httpClient.get(`/public/universities/departments/list`, {
      params: {
        filters: {
          university_uuids: [universityUuid],
        }
      }
    }).then(response => {
      departments.value = response.data.map(({ uuid, name, faculty_uuid, language, is_filled }) => ({
        uuid,
        name: name !== null ? name.value + ' Lang: ' + language?.value : name,
        faculty_uuid,
        is_filled,
      }));
    })
  }

  const loadCountries = () => {
    // const { uuid } = university.company;
    httpClient.get(`/public/universities/countries/list`, {
      params: {
        filters: {
          // company_uuid: uuid,
        }
      }
    }).then(response => {
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

    selectedDepartments.value.forEach(({ uuid }, idx) => {
      formData.append(`department_uuids[${idx}]`, uuid);
    });

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

    selectedDepartments.value = [];
  }

  const sendForm = () => {
    httpClient.post('/public/universities/applications', getData()).then(response => {
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
    loadAliases()
    loadUniversities()
    loadCountries()
  })

  return {
    form,
    uploadFilesBlock,
    aliases,
    universities,
    faculties,
    departments,
    countries,
    basicData,
    uploadFiles,
    aliasWasChanged,
    universityWasChanged,
    additionalDocuments,
    addAdditionalDocument,
    removeAdditionalDocument,
    addAdditionalFile,
    sendForm,
    canAddNewAdditionalColumn,
    setUploadedFile,
    selectedDepartments,
    departmentOptions,
    submitBtn,
  }
}
