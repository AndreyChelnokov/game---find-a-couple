<template>
  <div class="management">

    <div :style="isGameLaunched ? '' : 'display: none'" class="management__box">
      <div class="management__box-header">
        <h2 class="management__box-title">Состояние игры</h2>
      </div>
      <div  class="management__box-body">
        <div class="">
          <ManagementItem :title="'С начала игры прошло:'">
            <GameTimer />
          </ManagementItem>
          <ManagementItem v-if="foundCardImgList" :title="'Вы уже нашли:'">
            <div v-if="isNoEmptyFoundCardImgList" class="found__cards">
              <GameFound v-for="(img, index) in foundCardImgList" :key="index" :img="img" />
            </div>
            <div v-else class="">Поки ничего не нашли :(</div>
          </ManagementItem>
        </div>
      </div>
    </div>
    <div :style="isGameLaunched ? 'display: none' : ''" class="management__box">
      Откройте карточку в блоке слева, а затем найдите ей пару
    </div>

    <div class="management__box">
      <div class="management__box-header">
        <h2 class="management__box-title">Меню</h2>
      </div>
      <div class="management__box-body">
        <ManagementItem :title="'Результаты'">
          <GameResult />
        </ManagementItem>
        <ManagementItem :title="'Управление'">
          <GameButtons />
        </ManagementItem>
      </div>
    </div>

  </div>
</template>

<script>
import GameFound from './game-found';
import GameTimer from './game-timer';
import GameResult from './game-result';
import ManagementItem from './management-item';
import GameButtons from './game-control';

export default {
  name: 'Management',
  computed: {
    foundCardImgList: function () {
      return this.$store.state.currentGameData.foundCardsArrayImg;
    },
    isNoEmptyFoundCardImgList: function () {
      return this.foundCardImgList.length > 0;
    },
    isGameLaunched: function () {
      return this.$store.state.currentGameData.gameLaunched;
    },
  },
  watch: {
    isGameLaunched: function(newValue, oldValue) {
      if (newValue === false && oldValue) {
        // Завершили игру
        this.$store.commit('RESET_ALL_FOUND_CARD_IMG')
      }
    }
  },
  components: {
    GameFound,
    GameTimer,
    GameResult,
    ManagementItem,
    GameButtons,
  },
}
</script>

<style lang="scss">
  .management {
    max-width: 600px;
    width: 100%;

    border: 1px solid;
    margin-left: 20px;

    &__box {
      padding: 30px;
      height: 50%;

      &:not(:last-child) {
        border-bottom: 1px solid;
      }
    }

    &__box-title {
      margin-top: 0;
      text-align: left;
      margin-bottom: 15px;
    }
  }
</style>
