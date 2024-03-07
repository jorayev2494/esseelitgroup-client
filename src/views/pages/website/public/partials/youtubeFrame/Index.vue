<template>
  <div class="player">
    <VueYtframe
      v-if="youtubeVideoId"
      class="iframe-wrapper"
      :video-id="youtubeVideoId"
      :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
      width="100%"
    />
  </div>
</template>

<script setup>
  import useIndex from './useIndex'

  import { defineProps } from 'vue'

  const props = defineProps({
    youtubeVideoId: {
      type: [String, null],
      required: true,
    },
  });

  const { } = useIndex({ props });
</script>

<style scoped>
.player {
  /* height: 250px; */
  /* max-width: 600px; */
  width: 100%;
  height: 268px;

  /* width: 560px; */
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); /*ios 7 border-radius-bug */
  -webkit-transform: rotate(0.000001deg); /*mac os 10.6 safari 5 border-radius-bug */
  -webkit-border-radius: 10px; 
  -moz-border-radius: 10px;
  border-radius: 10px; 
  overflow: hidden; 
}
</style>
