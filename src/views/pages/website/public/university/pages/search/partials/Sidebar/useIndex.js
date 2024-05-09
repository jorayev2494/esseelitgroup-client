import { ref, toRefs } from "vue"

export default function useIndex({ props, emit })
{

  const previewForm = ref({})

  const {
    form
  } = toRefs(props)

  const addValue = (field, item, multiple) => {
    console.log('addValue: ', 'field: ', field, 'item: ', item, 'multiple: ', multiple);
    
    if (multiple) {
      if (! Array.isArray(form.value[field])) {
        form.value[field] = [];
      }

      if (Array.isArray(item)) {
        item.forEach(i => {
          addValue(field, i, multiple);
        });
      } else {
        form.value[field].includes(item.value)  ? removeValue(field, item, multiple)
                                                : form.value[field].push(item.value);
      }
    } else {
      if (field in form.value) {
        removeValue(field, item, multiple);
      } else {
        form.value[field] = item.value;
      }
    }
  }

  const removeValue = (field, item, multiple) => {
    console.log('removeValue: ', 'field: ', field, 'item: ', item, 'multiple: ', multiple);

    if (multiple) {
      if (Array.isArray(item)) {
        item.forEach(ii => {
          removeValue(field, ii, multiple)
        });
      } else {
        const idx = form.value[field].indexOf(item.value);

        if (idx >= 0) {
          form.value[field].splice(idx, 1);
        }
      }
    } else {
      delete form.value[field];
    }
  }

  const runSearch = () => {
    emit('search')
  }

  return {
    previewForm,

    addValue,
    removeValue,
    runSearch,
  }
}