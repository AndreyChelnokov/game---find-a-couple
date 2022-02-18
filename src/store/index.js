import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentGameData: {
      gameVersion: 1,
      startTime: '',
      gameLaunched: false,
      foundCardsArrayImg: [],
      comparedCards: [], // Сравниваемые карточки
    },
    globalData: {
      resultLastTimer: '',
      result: [],
      cards: [
        {
          img: 'hamster/1.JPG',
          id: 1,
          fakeId: 1,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/1.JPG',
          id: 2,
          fakeId: 1,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/2.JPG',
          id: 3,
          fakeId: 2,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/2.JPG',
          id: 4,
          fakeId: 2,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/3.JPG',
          id: 5,
          fakeId: 3,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/3.JPG',
          id: 6,
          fakeId: 3,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/4.JPG',
          id: 7,
          fakeId: 4,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/4.JPG',
          id: 8,
          fakeId: 4,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/5.JPG',
          id: 9,
          fakeId: 5,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/5.JPG',
          id: 10,
          fakeId: 5,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/6.JPG',
          id: 11,
          fakeId: 6,
          active: false,
          isFound: false,
        },{
          img: 'hamster/6.JPG',
          id: 12,
          fakeId: 6,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/7.JPG',
          id: 13,
          fakeId: 7,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/7.JPG',
          id: 14,
          fakeId: 7,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/8.JPG',
          id: 15,
          fakeId: 8,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/8.JPG',
          id: 16,
          fakeId: 8,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/9.JPG',
          id: 17,
          fakeId: 9,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/9.JPG',
          id: 18,
          fakeId: 9,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/10.JPG',
          id: 19,
          fakeId: 10,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/10.JPG',
          id: 20,
          fakeId: 10,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/11.JPG',
          id: 21,
          fakeId: 11,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/11.JPG',
          id: 22,
          fakeId: 11,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/12.JPG',
          id: 23,
          fakeId: 12,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/12.JPG',
          id: 24,
          fakeId: 12,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/13.JPG',
          id: 25,
          fakeId: 13,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/13.JPG',
          id: 26,
          fakeId: 13,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/14.JPG',
          id: 27,
          fakeId: 14,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/14.JPG',
          id: 28,
          fakeId: 14,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/15.JPG',
          id: 29,
          fakeId: 15,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/15.JPG',
          id: 30,
          fakeId: 15,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/16.JPG',
          id: 31,
          fakeId: 16,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/16.JPG',
          id: 32,
          fakeId: 16,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/17.JPG',
          id: 33,
          fakeId: 17,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/17.JPG',
          id: 34,
          fakeId: 17,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/18.jpg',
          id: 35,
          fakeId: 18,
          active: false,
          isFound: false,
        },
        {
          img: 'hamster/18.jpg',
          id: 36,
          fakeId: 18,
          active: false,
          isFound: false,
        }
      ],
      // cards: [
      //   {
      //     img: '1.jpeg',
      //     id: 1,
      //     fakeId: 1,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '1.jpeg',
      //     id: 2,
      //     fakeId: 1,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '2.jpeg',
      //     id: 3,
      //     fakeId: 2,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '2.jpeg',
      //     id: 4,
      //     fakeId: 2,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '3.jpeg',
      //     id: 5,
      //     fakeId: 3,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '3.jpeg',
      //     id: 6,
      //     fakeId: 3,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '4.jpeg',
      //     id: 7,
      //     fakeId: 4,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '4.jpeg',
      //     id: 8,
      //     fakeId: 4,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '5.jpeg',
      //     id: 9,
      //     fakeId: 5,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '5.jpeg',
      //     id: 10,
      //     fakeId: 5,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '6.jpeg',
      //     id: 11,
      //     fakeId: 6,
      //     active: false,
      //     isFound: false,
      //   },{
      //     img: '6.jpeg',
      //     id: 12,
      //     fakeId: 6,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '7.jpeg',
      //     id: 13,
      //     fakeId: 7,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '7.jpeg',
      //     id: 14,
      //     fakeId: 7,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '8.png',
      //     id: 15,
      //     fakeId: 8,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '8.png',
      //     id: 16,
      //     fakeId: 8,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '9.jpeg',
      //     id: 17,
      //     fakeId: 9,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '9.jpeg',
      //     id: 18,
      //     fakeId: 9,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '10.png',
      //     id: 19,
      //     fakeId: 10,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '10.png',
      //     id: 20,
      //     fakeId: 10,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '11.png',
      //     id: 21,
      //     fakeId: 11,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '11.png',
      //     id: 22,
      //     fakeId: 11,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '12.png',
      //     id: 23,
      //     fakeId: 12,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '12.png',
      //     id: 24,
      //     fakeId: 12,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '13.jpeg',
      //     id: 25,
      //     fakeId: 13,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '13.jpeg',
      //     id: 26,
      //     fakeId: 13,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '14.jpeg',
      //     id: 27,
      //     fakeId: 14,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '14.jpeg',
      //     id: 28,
      //     fakeId: 14,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '15.png',
      //     id: 29,
      //     fakeId: 15,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '15.png',
      //     id: 30,
      //     fakeId: 15,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '16.jpeg',
      //     id: 31,
      //     fakeId: 16,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '16.jpeg',
      //     id: 32,
      //     fakeId: 16,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '17.jpeg',
      //     id: 33,
      //     fakeId: 17,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '17.jpeg',
      //     id: 34,
      //     fakeId: 17,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '18.jpeg',
      //     id: 35,
      //     fakeId: 18,
      //     active: false,
      //     isFound: false,
      //   },
      //   {
      //     img: '18.jpeg',
      //     id: 36,
      //     fakeId: 18,
      //     active: false,
      //     isFound: false,
      //   }
      // ]
    },
  },
  mutations: {
    UPDATE_GAME_VERSION: (state) => {
      state.currentGameData.gameVersion++
    },
    ADD_NEW_RESULT_LAST_TIMER: (state, value) => {
      state.globalData.resultLastTimer = value
    },
    ADD_NEW_RESULT: (state, value) => {
      state.globalData.result.push(value)
    },

    RESET_START_TIMER: (state) => {
      state.currentGameData.startTime = '';
    },

    SET_START_TIME: (state) => {
      state.currentGameData.startTime = new Date().getTime();
    },
    START_GAME: (state) => {
      state.currentGameData.gameLaunched = true;
    },
    END_GAME: (state) => {
      state.currentGameData.gameLaunched = false;
    },

    PUSH_TO_COMPARE: (state, value) => {
      state.currentGameData.comparedCards.push(value)
    }, // Добавить карточку к сравнению
    UNPUSH_TO_COMPARE: (state, value) => {
      const indexItem = state.currentGameData.comparedCards.indexOf(value);

      if (indexItem >= 0) {
        state.currentGameData.comparedCards.splice(indexItem, 1)
      }
    }, // Убрать карточку из сравнения
    CLEAR_COMPARISON_ALL: (state) => {
      state.currentGameData.comparedCards = [];
    }, // Убираем все из сравнения


    ACTIVATING_CART: (state, value) => {
      state.globalData.cards.find(item => item.id === value).active = true;
    },
    DEACTIVATING_CART: (state, value) => {
      state.globalData.cards.find(item => item.id === value).active = false;
    },
    DEACTIVATE_ALL: (state) => {
      state.globalData.cards.forEach(card => {
        card.active = false;
      })
    },


    FOUND_CARD: (state) => {
      const idFoundCard = state.currentGameData.comparedCards[0]
      const card = state.globalData.cards.find(item => item.fakeId === idFoundCard)
      card.isFound = true;

      state.currentGameData.foundCardsArrayImg.push(card.img)
    },


    RESET_ALL_FOUND_CARD_IMG: (state) => {
      state.currentGameData.foundCardsArrayImg = []
    },
    RESET_ALL_DATA_CARDS: (state) => {
      state.globalData.cards.forEach(card => {
        card.active = false;
        card.isFound = false;
      })
    },

  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCountFoundCards: function (state) {
      return state.globalData.cards.filter(item => item.isFound).length;
    }
  }
})
