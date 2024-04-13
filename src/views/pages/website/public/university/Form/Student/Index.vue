<template>
  <div>
    <!-- -->
  </div>
</template>

<script setup>
  import useIndex from './useIndex'
  import { defineProps } from 'vue'

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    }
  });

  const {
    form,
  } = useIndex({ props });
</script>
