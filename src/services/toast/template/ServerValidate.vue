<template>
  <div>
    <span>{{ message }}</span>
    <ul class="list-unstyled">
      <div v-for="(attributeErrors, attribute) in errors" :key="attribute">
        <li v-for="(attrError, key) in attributeErrors" :key="key">
          <small>{{ attrError }}</small>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ServerValidate',
    props: {
      closeToast: Function,
      toastProps: Object,
    },
    setup(props) {
      const {
        message,
        errors
      } = props.toastProps.data;

      return {
        message,
        errors,
      };
    }
  };
</script>