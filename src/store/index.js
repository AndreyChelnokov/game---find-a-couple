import Vue from 'vue'
import Vuex from 'vuex'
import { doubleArray } from "../utils";

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
      cards: [],
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

    ADD_CARD: (state, value) => {
      state.globalData.cards = value;
    }

  },
  actions: {
    getCards: (context, variant = 0) => {
      fetch('./data.json')
          .then(r => r.json())
          .then(r => {
            return doubleArray(r[variant]);
          })
          .then(arr => {
            const newArr = JSON.parse(JSON.stringify(arr)).map((card, index) => {
              card.id = index + 1;
              return card
            })

            return newArr;
          })
          .then(arr => {
            context.commit('ADD_CARD', arr)
          })
    },
    finishGame: (context) => {
      context.commit('END_GAME');
    },
    updateGame: (context) => {
      context.commit('END_GAME');
      context.commit('UPDATE_GAME_VERSION');
    }
  },
  modules: {
  },
  getters: {
    getCountFoundCards: function (state) {
      return state.globalData.cards.filter(item => item.isFound).length;
    },
    isFoundAllCards: function (state) {
      return state.globalData.cards.filter(item => item.isFound).length === state.globalData.cards.length / 2;
    }
  }
})
