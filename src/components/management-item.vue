<template>
  <div class="management-item">
    <div class="management-item__header">
      <h3>{{ title }}</h3>
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
    title: {
      type: String,
      required: false,
    },
  }
}
</script>

<style lang="scss">
  .management-item {
    margin-bottom: 30px;
    &__header {
      margin-bottom: 10px;
      & h3 {
        text-align: left;
        margin: 0;
      }
    }
    &__body {
      text-align: left;
    }
  }
</style>
