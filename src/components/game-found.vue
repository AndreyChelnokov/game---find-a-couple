<template>
  <div class="found__card">
    <div class="found__card-bg">
      <img :src="'http://chelnokov.host/fake-server/game-vue/' + img" alt="">
    </div>
    <div class="found__card-front">
      <img :src="'http://chelnokov.host/fake-server/game-vue/' + img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameFound',
  props: {
    img: String
  }
}
</script>

<style lang="scss">
  .found {
    &__cards {
      display: flex;
      flex-wrap: wrap;
    }
    &__card {
      width: 65px;
      height: 85px;
      position: relative;
      margin-right: 14px;
      margin-bottom: 14px;
    }
  }
  .found__card-bg, .found__card-front {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .found__card-bg img, .found__card-front img {
    max-width: 100%;
    max-height: 100%;
  }
  .found__card-bg {
    position: absolute;
    transform: rotate(12deg);
    background: #fff;
  }
</style>
