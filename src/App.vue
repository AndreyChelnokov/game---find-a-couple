<template>
  <div id="app" class="app">
    <div class="app__wrap">
      <Game :key="gameKey" />
      <Management />
    </div>
  </div>
</template>

<script>
import Game from './components/game';
import Management from './components/management'

export default {
  name: 'App',
  data: function () {
    return {
      gameKey: 1,
    }
  },
  methods: {
    reRenderCards: function (value) {
      this.gameKey = value;
    },
    resetDataForAllCards: function () {
      this.$store.commit('RESET_ALL_DATA_CARDS')
    },
    resetFoundCardImages: function () {
      this.$store.commit('RESET_ALL_FOUND_CARD_IMG')
    },
    resetGame: function (value) {
      this.resetDataForAllCards()
      this.reRenderCards(value);
      this.resetFoundCardImages();
      // Обнулить список совпадений
    },
  },
  computed: {
    gameVersion: function () {
      return this.$store.state.currentGameData.gameVersion;
    },
  },
  components: {
    Game,
    Management
  },
  watch: {
    gameVersion: function (value) {
      this.resetGame(value)
    }
  },
  mounted() {
    this.$store.dispatch('getCards')
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
}
.app__wrap {
  display: flex;
  align-items: flex-start;
  min-width: 1230px;
}
</style>
