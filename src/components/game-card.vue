<template>
  <div
      @click="changeCard"
      :class="{ active: isActiveCart, found: isFound }"
      :data-id="id"
      :data-fake-id="fakeId"
      class="game-card"
  >
      <div class="game-card__content-wrap">
        <div class="game-card__content">
          <div class="game-card__content-front">
            <img src="./../assets/logo.png" alt="">
          </div>
          <div class="game-card__content-back">
            <img :src="'http://chelnokov.host/fake-server/game-vue/' + img" alt="">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    fakeId: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      delay: 5000, // 2 сек
    }
  },
  methods: {
    changeCard: function () {
      if (this.isActiveTwoCard()) {
        return;
      }

      if (!this.isGameLaunched()) {
        this.startGame();
      }

      this.activatingCard();
      this.compareCard()
    },

    isActiveTwoCard: function () {
      return this.$store.state.currentGameData.comparedCards.length === 2;
    },
    isMatchCards: function () {
      return this.$store.state.currentGameData.comparedCards[0] === this.$store.state.currentGameData.comparedCards[1];
    },
    deactivatingAllCards: function () {
      this.$store.commit('DEACTIVATE_ALL')
      this.$store.commit('CLEAR_COMPARISON_ALL')
    },
    startGame: function () {
      this.$store.commit('SET_START_TIME'); // Добавляем время начала игры
      this.$store.commit('START_GAME'); // Запускаем игру
    },
    compareCard: function () {
      if (this.isActiveTwoCard()) {
        if (this.isMatchCards()) {
          setTimeout(() => {
            this.foundCard();
          }, 500)
        } else {
          setTimeout(() => {
            this.deactivatingAllCards();
          }, 500)
        }
        return;
      }
    },
    foundCard: function () {
      this.$store.commit('FOUND_CARD');
      this.$store.commit('CLEAR_COMPARISON_ALL');
    },
    activatingCard: function () {
      this.$store.commit('ACTIVATING_CART', this.id)
      this.$store.commit('PUSH_TO_COMPARE', this.fakeId);
    },
    deactivateCard: function () {
      if (this.cartInStore.active) {
        this.$store.commit('DEACTIVATING_CART', this.id)
        this.$store.commit('UNPUSH_TO_COMPARE', this.fakeId);
      }
    },
    isGameLaunched: function() {
      return this.$store.state.currentGameData.gameLaunched;
    },
  },
  computed: {
    cartInStore: function () {
      return this.$store.state.globalData.cards.find(item => item.id === this.id)
    },
    isActiveCart: function () {
      return this.cartInStore.active;
    },
    isFound: function () {
      return this.$store.state.globalData.cards.find(item => item.fakeId === this.fakeId).isFound;
    }
  },
  watch: {
    isActiveCart: function (newValue, oldValue) {
      if (newValue === false, oldValue) {
        // Карточка закрылась
        clearTimeout(this.timeOutCard)
      }
      if (newValue, oldValue === false) {
        // Карточка открылась
        this.timeOutCard = setTimeout(() => {
          this.deactivateCard()
        }, this.delay)
      }
    }
  }
}
</script>

<style lang="scss">
  .game-card {
    width: calc((100% / 6) - 10px);
    margin-bottom: 10px;

    &.found {
      opacity: 0;
      pointer-events: none;
      transition: .5s;
    }
    &.active {
      pointer-events: none;
      & .game-card {
        &__content-back {
          transform: rotateY(360deg);
        }
        &__content-front {
          transform: rotateY(180deg);
        }
      }
    }

    &__content-wrap {
      padding-bottom: 113%;
      position: relative;
    }
    &__content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      perspective: 1000px;

      & div {
        width: 100%;
        height: 100%;
      }
    }
    &__content-front, &__content-back {
      position: absolute;
      top: 0;
      left: 0;
      transition: .5s;
      backface-visibility: hidden;
      border-radius: 4px;
      border: 1px solid;
    }
    &__content-front {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 55px;
      }
    }
    &__content-back {
      background-color: #fff;
      transform: rotateY(180deg);
      padding: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
