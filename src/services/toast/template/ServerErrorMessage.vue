<template>
  <div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ServerErrorMessage',
    props: {
      closeToast: Function,
      toastProps: Object,
    },
    setup(props) {
      const { message } = props.toastProps.data;

      return {
        message,
      };
    }
  };
</script>