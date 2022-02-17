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
    img: String,
    id: Number,
    fakeId: Number
  },
  data: function () {
    return {
      delay: 5000 // 2 сек
    }
  },
  methods: {
    isActiveTwoCard: function () {
      if (this.$store.state.currentCardArray.length === 2) {
        return true
      }

      return false;
    },
    isMatchCards: function () {
      return this.$store.state.currentCardArray[0] === this.$store.state.currentCardArray[1];
    },
    deactivatingAllCards: function () {
      this.$store.commit('DEACTIVATE_ALL')
      this.$store.commit('CLEAR_CURRENT_ARR')
    },
    changeCard: function (e) {
      if (this.isActiveTwoCard()) {
        console.log('Ошибка. Активный две карты.')
        return;
      }

      this.activatingCard()


      if (this.isActiveTwoCard()) {
        if (this.isMatchCards()) {
          this.$store.commit('FOUND_CARD')
        } else {
          setTimeout(() => {
            this.deactivatingAllCards();
          }, 1000)
        }
      }


      setTimeout(() => {
        this.deactivateCard()
      }, this.delay)
    },
    activatingCard: function () {
      this.$store.commit('ACTIVATING_CART', this.id)
      this.$store.commit('PUSH_CARD', this.fakeId);
    },
    deactivateCard: function () {
      this.$store.commit('DEACTIVATING_CART', this.id)
      this.$store.commit('REMOVE_CARD', this.fakeId);
    }
  },
  computed: {
    isActiveCart: function () {
      return this.$store.state.cards.find(item => item.id === this.id).active;
    },
    isFound: function () {
      return this.$store.state.cards.find(item => item.fakeId === this.fakeId).isFound;
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
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
