<template>
  <div class="avatar" :style="{ backgroundImage: `url(${url})` }"></div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-position: center;
  background-size: cover;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
