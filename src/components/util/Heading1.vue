<template>
  <h1 :data-subheading="subheading ? subheading : null">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 60px;
}
h1[data-subheading]::before {
  content: attr(data-subheading);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  display: block;
}
</style>

<script>
export default {
  props: {
    subheading: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
