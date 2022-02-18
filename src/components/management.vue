<template>
  <div class="management">

    <!-- timer -->
    <ManagementItem :title="'С начала игры прошло:'">
      <GameTimer />
    </ManagementItem>

    <!-- found-cards -->
    <ManagementItem v-if="foundCardImgList" :title="'Вы уже нашли:'">
      <div class="found__cards">
        <GameFound v-for="(img, index) in foundCardImgList" :key="index" :img="img" />
      </div>
    </ManagementItem>

    <!-- Result -->
    <ManagementItem :title="'Рекорды'">
      <GameResult />
    </ManagementItem>

    <ManagementItem :title="'Управление'">
      <GameButtons />
    </ManagementItem>

  </div>
</template>

<script>
// todo Баг при выборе элементов?

import GameFound from './game-found';
import GameTimer from './game-timer';
import GameResult from './game-result';
import ManagementItem from './management-item';
import GameButtons from './game-buttons';

export default {
  name: 'Management',
  computed: {
    foundCardImgList: function () {
      return this.$store.state.currentGameData.foundCardsArrayImg;
    },
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
    padding: 30px;

    border: 1px solid;
    margin-left: 20px;
  }
</style>
