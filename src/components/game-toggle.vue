<template>
  <div class="toggle">
    <div
        @click="updateVariant(variant.value)"
        v-for="variant in variants"
        :key="variant.value"
        class="toggle__item"
        :class="{active: variant.isActive}"
    >{{ variant.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameToggle',
  data: function () {
    return {
      variants: [
        {
          name: 'Хомяки',
          value: 0,
          isActive: true
        },
        {
          name: 'Покемоны',
          value: 1,
          isActive: false
        }
      ]
    }
  },
  methods: {
    startNewGame: function () {
      this.$store.commit('END_GAME');
      this.$store.commit('UPDATE_GAME_VERSION');
    },
    updateVariant: function (value) {
      this.updateLocalActive(value);
      this.updateCards(value);
      this.startNewGame();
    },
    updateLocalActive: function (value) {
      this.variants.forEach(vars => {
        vars.isActive = false;
      })
      this.variants.find(vars => vars.value === value).isActive = true
    },
    updateCards: function (value) {
      this.$store.dispatch('getCards', value)
    },
  }
}
</script>

<style lang="scss">
.toggle {
  display: flex;
  max-width: fit-content;
  &__item {
    cursor: pointer;
    display: block;
    border: 1px solid;
    height: 38px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &.active {
      background: aquamarine;
    }
  }
}
</style>
