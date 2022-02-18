<template>
  <div id="game" class="game">
    <div class="game__cards">
      <GameCard
          v-for="(card, index) in cardsInRandomOrder"
          :img="card.img"
          :key="index"
          :id="card.id"
          :fake-id="card.fakeId"
      />
    </div>

    <div @click="resetGame" class="game__overlay" :class="{ active: isActiveGameOverlay }">
      Чтобы начать новую игру - кликните сдесь!
    </div>

    <GameModal @sendModal="sendModal" :is-active="modalActive" />
  </div>
</template>

<script>
import GameCard from './game-card';
import GameModal from './game-modal'

export default {
  name: 'Game',
  data: function () {
    return {
      modalActive: false,
      isActiveGameOverlay: false,
    }
  },
  computed: {
    cards: function () {
      return this.$store.state.globalData.cards;
    },
    // doubleArray: function () {
    //   return [...this.cards, ...this.cards]
    // },
    cardsInRandomOrder: function () {
      return this.compareRandom(this.cards)
    },
    isFinal: function () {
      return this.$store.getters.getCountFoundCards === this.$store.state.globalData.cards.length / 2;
    }
  },
  methods: {
    resetGame: function () {
      this.$store.commit('UPDATE_GAME_VERSION')
    },
    compareRandom: function (arr) {
      let count = 0;
      function rand() {
        count++;
        return Math.random() - 0.5;
      }

      return arr.sort(rand);
    },
    endGame: function () {
      this.$store.commit('END_GAME'); // Завершаем игру
      this.modalActive = true; // Открыть модалку
      this.isActiveGameOverlay = true;
    },
    sendModal: function (userName) {
      this.modalActive = false;
      this.commitResultGame(userName)
    },
    commitResultGame: function (userName) {
      const resultTime = this.$store.state.globalData.resultLastTimer;
      this.$store.commit('ADD_NEW_RESULT', { name: userName, time: resultTime })
    }
  },
  components: {
    GameCard,
    GameModal,
  },
  watch: {
    isFinal: function (value) {
      if (value) {
        this.endGame();
      }
    }
  }
}






</script>


<style lang="scss">
  .game {
    max-width: 600px;
    width: 100%;
    position: relative;
    &__overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: beige;
      display: none;
      &.active {
        display: flex;
      }
    }
    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>
