<template>
  <button type="button" class="button" :class="className + '__button'">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    className: String
  }
}
</script>

<style lang="scss">
  .button {
    height: 38px;
    width: 400px;
    border: 1px solid;
    border-radius: 3px;
  }
</style>
