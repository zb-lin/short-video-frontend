<template>
  <div>
    <video
      :src="defaultVideo"
      controls
      width="1325"
      height="575"
      preload="auto"
    ></video>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const defaultVideo = ref(
  "http://s32x7tly6.hn-bkt.clouddn.com/pexels-eberhard-grossgasteiger-10079386%20%281080p%29.mp4"
);
</script>

<style scoped></style>
