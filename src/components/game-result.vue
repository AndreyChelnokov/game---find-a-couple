<template>
  <div class="result-game">
    <div v-for="res in getResult" class="result-game__item">
      <div class="result-game__item-name">{{ res.name }}</div>
      <RenderTime
        :milliseconds="res.time.milliseconds"
        :seconds="res.time.seconds"
        :minutes="res.time.minutes"
        :class-name="'result-game'"
      />
    </div>
  </div>
</template>

<script>
import RenderTime from './render-time';

export default {
  name: 'GameResult',
  computed: {
    getResult: function () {
      return this.$store.state.globalData.result;
    }
  },
  components: {
    RenderTime,
  }
}
</script>

<style lang="scss">
  .result-game {
    &__item {
      display: flex;
      align-items: center;
      font-size: 20px;
      border: 1px solid;
      & > div {
        width: 50%;
        display: flex;
        justify-content: center;
      }
    }
    &__item-name{
      padding: 10px;
    }
    &__item-time {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 10px;

      border-left: 1px solid;
    }
  }
</style>
