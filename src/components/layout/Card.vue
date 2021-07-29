<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: max-content;
  border: var(--border);
  background-color: var(--content);
  border-radius: var(--border-radius);
  padding: var(--gap);
  user-select: none;
}
</style>
