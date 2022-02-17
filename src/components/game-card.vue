<template>
  <div @click="changeCard" :class="isActiveCart ? 'active': ''" :data-id="id" class="game-card">
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
  },
  data: function () {
    return {
      isActiveCart: false,
      delay: 2000 // 2 сек
    }
  },
  methods: {
    changeCard: function (e) {
      this.activatingCard()

      setTimeout(() => {
        this.deactivateCard()
      }, this.delay)
    },
    activatingCard: function () {
      this.isActiveCart = true;
      this.$emit('pushCard', this.id)
    },
    deactivateCard: function () {
      this.isActiveCart = false;
      this.$emit('removeCard', this.id)
    }
  }
}
</script>

<style lang="scss">
  .game-card {
    width: calc((100% / 6) - 10px);
    margin-bottom: 10px;

    &.active {
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
