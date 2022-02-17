import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foundCardsArrayImg: [],
    currentCardArray: [],
    cards: [
      {
        img: '1.jpeg',
        id: 1,
        fakeId: 1,
        active: false,
        isFound: false,
      },
      {
        img: '1.jpeg',
        id: 2,
        fakeId: 1,
        active: false,
        isFound: false,
      },
      {
        img: '2.jpeg',
        id: 3,
        fakeId: 2,
        active: false,
        isFound: false,
      },
      {
        img: '2.jpeg',
        id: 4,
        fakeId: 2,
        active: false,
        isFound: false,
      },
      {
        img: '3.jpeg',
        id: 5,
        fakeId: 3,
        active: false,
        isFound: false,
      },
      {
        img: '3.jpeg',
        id: 6,
        fakeId: 3,
        active: false,
        isFound: false,
      },
      {
        img: '4.jpeg',
        id: 7,
        fakeId: 4,
        active: false,
        isFound: false,
      },
      {
        img: '4.jpeg',
        id: 8,
        fakeId: 4,
        active: false,
        isFound: false,
      },
      {
        img: '5.jpeg',
        id: 9,
        fakeId: 5,
        active: false,
        isFound: false,
      },
      {
        img: '5.jpeg',
        id: 10,
        fakeId: 5,
        active: false,
        isFound: false,
      },
      {
        img: '6.jpeg',
        id: 11,
        fakeId: 6,
        active: false,
        isFound: false,
      },{
        img: '6.jpeg',
        id: 12,
        fakeId: 6,
        active: false,
        isFound: false,
      },
      {
        img: '7.jpeg',
        id: 13,
        fakeId: 7,
        active: false,
        isFound: false,
      },
      {
        img: '7.jpeg',
        id: 14,
        fakeId: 7,
        active: false,
        isFound: false,
      },
      {
        img: '8.png',
        id: 15,
        fakeId: 8,
        active: false,
        isFound: false,
      },
      {
        img: '8.png',
        id: 16,
        fakeId: 8,
        active: false,
        isFound: false,
      },
      {
        img: '9.jpeg',
        id: 17,
        fakeId: 9,
        active: false,
        isFound: false,
      },
      {
        img: '9.jpeg',
        id: 18,
        fakeId: 9,
        active: false,
        isFound: false,
      },
      {
        img: '10.png',
        id: 19,
        fakeId: 10,
        active: false,
        isFound: false,
      },
      {
        img: '10.png',
        id: 20,
        fakeId: 10,
        active: false,
        isFound: false,
      },
      {
        img: '11.png',
        id: 21,
        fakeId: 11,
        active: false,
        isFound: false,
      },
      {
        img: '11.png',
        id: 22,
        fakeId: 11,
        active: false,
        isFound: false,
      },
      {
        img: '12.png',
        id: 23,
        fakeId: 12,
        active: false,
        isFound: false,
      },
      {
        img: '12.png',
        id: 24,
        fakeId: 12,
        active: false,
        isFound: false,
      },
      {
        img: '13.jpeg',
        id: 25,
        fakeId: 13,
        active: false,
        isFound: false,
      },
      {
        img: '13.jpeg',
        id: 26,
        fakeId: 13,
        active: false,
        isFound: false,
      },
      {
        img: '14.jpeg',
        id: 27,
        fakeId: 14,
        active: false,
        isFound: false,
      },
      {
        img: '14.jpeg',
        id: 28,
        fakeId: 14,
        active: false,
        isFound: false,
      },
      {
        img: '15.png',
        id: 29,
        fakeId: 15,
        active: false,
        isFound: false,
      },
      {
        img: '15.png',
        id: 30,
        fakeId: 15,
        active: false,
        isFound: false,
      },
      {
        img: '16.jpeg',
        id: 31,
        fakeId: 16,
        active: false,
        isFound: false,
      },
      {
        img: '16.jpeg',
        id: 32,
        fakeId: 16,
        active: false,
        isFound: false,
      },
      {
        img: '17.jpeg',
        id: 33,
        fakeId: 17,
        active: false,
        isFound: false,
      },
      {
        img: '17.jpeg',
        id: 34,
        fakeId: 17,
        active: false,
        isFound: false,
      },
      {
        img: '18.jpeg',
        id: 35,
        fakeId: 18,
        active: false,
        isFound: false,
      },
      {
        img: '18.jpeg',
        id: 36,
        fakeId: 18,
        active: false,
        isFound: false,
      }
    ]
  },
  mutations: {
    PUSH_CARD: (state, value) => {
      state.currentCardArray.push(value)
    },
    REMOVE_CARD: (state, value) => {
      const indexItem = state.currentCardArray.indexOf(value);

      if (indexItem >= 0) {
        state.currentCardArray.splice(indexItem, 1)
      }
    },
    ACTIVATING_CART: (state, value) => {
      state.cards.find(item => item.id === value).active = true;
    },
    DEACTIVATING_CART: (state, value) => {
      state.cards.find(item => item.id === value).active = false;
    },

    FOUND_CARD: (state) => {
      const idFoundCard = state.currentCardArray[0]
      const card = state.cards.find(item => item.fakeId === idFoundCard)
      card.isFound = true;

      state.foundCardsArrayImg.push(card.img)
    },

    DEACTIVATE_ALL: (state) => {
      state.cards.forEach(card => {
        card.active = false;
      })
    },
    CLEAR_CURRENT_ARR: (state) => {
      state.currentCardArray = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
