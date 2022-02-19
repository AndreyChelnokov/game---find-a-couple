<template>
  <div class="control">
    <div class="control__list">
      <div class="control__item">
        <div @click="startNewGame">
          <AppButton >
            Начать игру заново
          </AppButton>
        </div>
      </div>
      <div class="control__item">
        <GameToggle />
      </div>
    </div>
  </div>
</template>

<script>
import GameToggle from './game-toggle'
import AppButton from './app-button'

export default {
  name: 'GameButtons',
  components: {
    GameToggle,
    AppButton,
  },
  methods: {
    startNewGame: function () {
      this.$store.commit('END_GAME');
      this.$store.commit('UPDATE_GAME_VERSION');
    },
  }
}
</script>

<style lang="scss">
  .control {
    &__item {
      display: flex;
      margin-bottom: 10px;
    }
  }
</style>
