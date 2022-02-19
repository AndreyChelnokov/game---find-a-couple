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

    <div @click="startNewGame" class="game__overlay" :class="{ active: isActiveGameOverlay }">
      Чтобы начать новую игру - кликните сдесь!
    </div>

    <GameModal @sendModal="sendModal" :is-active="isModalActive" />
  </div>
</template>

<script>
import GameCard from './game-card';
import GameModal from './game-modal'

export default {
  name: 'Game',
  data: function () {
    return {
      isModalActive: false,
      isActiveGameOverlay: false,
    }
  },
  computed: {
    cards: function () {
      return this.$store.state.globalData.cards;
    },
    cardsInRandomOrder: function () {
      return this.compareRandom(this.cards)
    },
    timeResultGame: function () {
      return this.$store.state.globalData.resultLastTimer;
    },
    isFoundAllCards : function () {
      return this.$store.getters.isFoundAllCards;
    }
  },
  methods: {
    startNewGame: function () {
      this.$store.commit('UPDATE_GAME_VERSION');
    },
    compareRandom: function (arr) {
      let count = 0;
      function rand() {
        count++;
        return Math.random() - 0.5;
      }

      return arr.sort(rand);
    },

    commitResultGame: function (userName) {
      this.$store.commit('ADD_NEW_RESULT', { name: userName, time: this.timeResultGame })
    },

    switchOffGame: function () {
      this.$store.dispatch('finishGame');
      this.isActiveGameOverlay = true;
    },

    // result modal
    openModal: function () {
      this.isModalActive = true;
    },
    hiddenModal: function () {
      this.isModalActive = false;
    },
    sendModal: function (userName) {
      this.hiddenModal()
      this.commitResultGame(userName)
    },

    eventEndGame: function () {
      this.switchOffGame();
      this.openModal();
    },
  },
  components: {
    GameCard,
    GameModal,
  },
  watch: {
    isFoundAllCards: function (newValue) {
      // Если все карты совпали
      if (newValue === true) {
        this.eventEndGame()
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
