<template>
  <Card>
    <h2>{{ username }}</h2>
    <div class="info">
      <p>{{ $t("points") }}: {{ points }}</p>
      <p>{{ $t("health") }}: {{ health }}</p>
      <p>{{ $t("range") }}: {{ range }}</p>
      <p>{{ $t("kills") }}: {{ kills }}</p>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.card {
  position: absolute;
  z-index: 1000;
  margin-top: var(--gap);

  .info {
    color: var(--text-secondary);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/layout/Card.vue";

export default defineComponent({
  name: "HoverCard",
  components: {
    Card,
  },
  props: {
    username: {
      type: String,
    },
    points: {
      type: Number,
    },
    health: {
      type: Number,
    },
    range: {
      type: Number,
    },
    kills: {
      type: Number,
    },
  },
});
</script>
