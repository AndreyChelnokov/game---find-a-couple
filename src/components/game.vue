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

    <div class="game__found found">
      <GameFound v-for="(img, index) in foundCardImgList" :key="index" :img="img" />
    </div>
  </div>
</template>

<script>
import GameCard from './game-card';
import GameFound from './game-found';

export default {
  name: 'Game',
  data: function () {
    return {
    }
  },
  computed: {
    cards: function () {
      return this.$store.state.cards;
    },
    // doubleArray: function () {
    //   return [...this.cards, ...this.cards]
    // },
    cardsInRandomOrder: function () {
      return this.compareRandom(this.cards)
    },
    foundCardImgList: function () {
      return this.$store.state.foundCardsArrayImg;
    }
  },
  methods: {
    compareRandom: function (arr) {
      let count = 0;
      function rand() {
        count++;
        return Math.random() - 0.5;
      }

      return arr.sort(rand);
    }
  },
  components: {
    GameCard,
    GameFound
  }
}






</script>


<style lang="scss">
  .game {
    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 600px;
      width: 100%;
    }
  }
</style>
