<template>
  <div class="management-item">
    <div class="management-item__header">
      <h2>{{ title }}</h2>
    </div>
    <div class="management-item__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagementItem',
  props: {
    title: String,
  }
}
</script>

<style lang="scss">
  .management-item {
    margin-bottom: 30px;
    &__header {
      margin-bottom: 10px;
      & h2 {
        text-align: left;
        margin: 0;
      }
    }
  }
</style>
