<template>
  <div id="game" class="game">
    <div class="game__cards">
      <GameCard
          v-for="(card, index) in cardsInRandomOrder"
          :img="card.img"
          :key="index"
          :id="card.id"
          @pushCard="pushCard"
          @removeCard="removeCard"
      />
    </div>
  </div>
</template>

<script>
import GameCard from './game-card'
export default {
  name: 'Game',
  data: function () {
    return {
      currentCardArray: [],
      cards: [
        {
          img: '1.jpeg',
          id: 1,
        },
        {
          img: '2.jpeg',
          id: 2,
        },
        {
          img: '3.jpeg',
          id: 3,
        },
        {
          img: '4.jpeg',
          id: 4,
        },
        {
          img: '5.jpeg',
          id: 5,
        },
        {
          img: '6.jpeg',
          id: 6,
        },
        {
          img: '7.jpeg',
          id: 7,
        },
        {
          img: '8.png',
          id: 8,
        },
        {
          img: '9.jpeg',
          id: 9,
        },
        {
          img: '10.png',
          id: 10,
        },
        {
          img: '11.png',
          id: 11,
        },
        {
          img: '12.png',
          id: 12,
        },
        {
          img: '13.jpeg',
          id: 13,
        },
        {
          img: '14.jpeg',
          id: 14,
        },
        {
          img: '15.png',
          id: 15,
        },
        {
          img: '16.jpeg',
          id: 16,
        },
        {
          img: '17.jpeg',
          id: 17,
        },
        {
          img: '18.jpeg',
          id: 18,
        }
      ]
    }
  },
  computed: {
    doubleArray: function () {
      return [...this.cards, ...this.cards]
    },
    cardsInRandomOrder: function () {
      return this.compareRandom(this.doubleArray)
    }
  },
  methods: {
    pushCard: function(eventId) {
      this.currentCardArray.push(eventId);

      console.log(this.currentCardArray)
    },
    removeCard: function(eventId) {
      const indexItem = this.currentCardArray.indexOf(eventId);
      if (indexItem >= 0) {
        this.currentCardArray.splice(indexItem, 1)
      }

      console.log(this.currentCardArray)
    },
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
    GameCard
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
