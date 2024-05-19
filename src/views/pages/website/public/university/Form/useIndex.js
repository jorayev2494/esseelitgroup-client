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
  const countries = ref([]);
  const companies = ref([]);

  const studentData = [
    {
      name: 'first_name',
      type: 'text',
      required: true,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'last_name',
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
    // {
    //   name: 'friend_phone',
    //   type: 'text',
    //   required: true,
    //   class: 'col-12 col-md-6',
    //   bind: {
    //     title: 'title value',

    //   },
    // },
    {
      name: 'passport_number',
      type: 'text',
      required: false,
      class: 'col-12 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    // {
    //   name: 'passport_date_of_issue',
    //   type: 'date',
    //   required: true,
    //   class: 'col-12 col-md-6',
    //   bind: {
    //     title: 'title value',

    //   },
    // },
    
    // {
    //   name: 'passport_date_of_expiry',
    //   type: 'date',
    //   required: true,
    //   class: 'col-12 col-md-6',
    //   bind: {
    //     title: 'title value',

    //   },
    // },

    {
      name: 'nationality_uuid',
      type: 'select',
      options: countries,
      // options: [
      //   countries
      // ],
      required: true,
      class: 'col-6 col-md-6',
      bind: {
        title: 'title value',

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
      name: 'country_of_residence_uuid',
      type: 'select',
      options: countries,
      // options: [
      //   countries
      // ],
      required: true,
      class: 'col-6 col-md-6',
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
      name: 'high_school_country_uuid',
      type: 'select',
      options: countries,
      // options: [
      //   countries
      // ],
      required: true,
      class: 'col-6 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    {
      name: 'company_uuid',
      type: 'select',
      options: companies,
      // options: [
      //   countries
      // ],
      required: true,
      class: 'col-6 col-md-6',
      bind: {
        title: 'title value',

      },
    },
    // {
    //   name: 'high_school_name',
    //   type: 'text',
    //   required: true,
    //   class: 'col-6 col-md-6',
    //   bind: {
    //     title: 'title value',

    //   },
    // },
    // {
    //   name: 'high_school_grade_average',
    //   type: 'text',
    //   required: true,
    //   class: 'col-6 col-md-6',
    //   bind: {
    //     title: 'title value',

    //   },
    // },
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

  const uploadFiles = ref([
    {
      name: 'passport',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'passport_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'school_attestat',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'school_attestat_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'transcript',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'transcript_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'equivalence_document',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      name: 'biometric_photo',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
  ])

  const maxCountAdditionalDocuments = 5;
  const additionalDocuments = reactive([]);

  const formStudent = reactive({
    first_name: '',
    last_name: '',
    birthday: '',
    email: '',
    phone: '',
    friend_phone: '',
    passport_number: '',
    passport_date_of_issue: '',
    passport_date_of_expiry: '',
    father_name: '',
    mother_name: '',
    home_address: '',

    nationality_uuid: '',
    country_of_residence_uuid: '',
    high_school_name: '',
    high_school_country_uuid: '',
    high_school_grade_average: '',
    company_uuid: '',

    passport: null,
    passport_translation: null,
    school_attestat: null,
    school_attestat_translation: null,
    transcript: null,
    transcript_translation: null,
    equivalence_document: null,
    biometric_photo: null,
  })

  const formApplication = reactive({
    student_uuid: '',
    alias_uuid: '',
    language_uuid: '',
    degree_uuid: '',
    country_uuid: '',
    university_uuid: '',
    department_uuids: [],
    is_agreed_to_share_data: false,
  })

  const aliases = ref([]);
  const universities = ref([]);
  const faculties = ref([]);
  const departments = ref([]);
  // const countries = ref([]);

  const submitBtn = ref(null);

  // const selectedDepartments = ref(null);
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

    if (uploadFiles.value.map(i => i.name).includes(name) && Object.keys(formStudent).includes(name)) {
      formStudent[name] = file;
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
    formApplication.department_uuids = [];
    // selectedDepartments.value.length = 0;

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
    formApplication.department_uuids = [];

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
      departments.value = response.data.map(({ uuid, name, faculty_uuid, language, is_filled }) => {
        const lang = language ? ' (' + language?.value + ')' : '';

        return {
          uuid,
          name: name !== null ? name.value + lang : null,
          faculty_uuid,
          is_filled,
        }
      });
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
      countries.value = response.data.map(({ uuid, value }) => ({ uuid, label: value }));
    })
  }

  const loadCompanies = () => {
    // const { uuid } = university.company;
    httpClient.get(`/public/companies/companies/list`, {
      params: {
        filters: {
          // company_uuid: uuid,
        }
      }
    }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({ uuid, label: name }));
    })
  }

  const getStudentData = () => {
    const formData = new FormData();

    for (const key in formStudent) {
      if (Object.hasOwnProperty.call(formStudent, key)) {
        const value = formStudent[key];
        formData.append(key, value);
      }
    }

    formData.append(`additional_documents[]`, []);
    additionalDocuments.forEach(({ document, description }, idx) => {
      formData.append(`additional_documents[${idx}][document]`, document);
      formData.append(`additional_documents[${idx}][description]`, description);
    });

    return formData;
  }

  const getApplicationData = () => {
    const formData = new FormData();

    // formApplication.student_uuid = uuid;
    // formData.append('student_uuid', uuid);

    for (const key in formApplication) {
      if (Object.hasOwnProperty.call(formApplication, key)) {
        const value = formApplication[key];

        if (key === 'department_uuids') {
          continue;
        }

        if (key === 'is_agreed_to_share_data') {
          const boolValue = (value ? 1 : 0).toString();
          formData.append(key, boolValue);
          continue;
        }
        formData.append(key, value);
      }
    }

    formApplication.department_uuids.forEach(({ uuid }, idx) => {
      formData.append(`department_uuids[${idx}]`, uuid);
    });

    return formData;
  }

  const studentFormClear = () => {
    for (const key in formStudent) {
      if (Object.hasOwnProperty.call(formStudent, key)) {
        formStudent[key] = '';
      }
    }
  }

  const applicationFormClear = () => {
    for (const key in formApplication) {
      if (Object.hasOwnProperty.call(formApplication, key)) {
        formApplication[key] = '';
      }
    }

    formApplication.department_uuids = [];
  }

  // const formClear = () => {
  //   studentFormClear()
  //   applicationFormClear()
  // }

  const sendForm = () => {
    sendStudentForm().then(({ data }) => {
      formApplication.student_uuid = data.uuid;
      sendApplicationForm()
    })
  }

  const sendStudentForm = () => {
    return httpClient.post('/public/students/students', getStudentData()).then(response => response)
  }

  const sendApplicationForm = () => {
    return httpClient.post('/public/universities/applications', getApplicationData()).then(response => {
      studentFormClear();
      clearUploadedFiles();
      clearAdditionalDocuments();
      applicationFormClear();
      
      toast.success(t('system.form_success_sent_message'), { position: "top-center" });
      setTimeout(() => {
        submitBtn.value.click();
      }, 100)

      return response;
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
    loadCompanies()
  })

  return {
    formStudent,
    formApplication,
    uploadFilesBlock,
    aliases,
    universities,
    faculties,
    departments,
    countries,
    studentData,
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
    departmentOptions,
    submitBtn,
  }
}
