<template>
  <div class="buttons">
    <div class="buttons__list">
      <button @click="resetGame" type="button" class="button">Начать заново</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameButtons',
  methods: {
    resetGame: function () {
      this.$store.commit('UPDATE_GAME_VERSION')
    },
  }
}
</script>
