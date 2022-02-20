<template>
  <div class="modal" :class="{ active: isActive }">
    <div class="modal__content">
      <div class="modal__title">
        <span>Вы закончили игру с результатом - </span>
        <RenderTime
            :milliseconds="resultTime.milliseconds"
            :seconds="resultTime.seconds"
            :minutes="resultTime.minutes"
            :class-name="'modal'"
        />
      </div>
      <div class="modal__descr">Чтобы зафиксировать ваш результат - введите имя</div>
      <form @submit.prevent="addUserName" class="modal__form">
        <input class="modal__field" type="text" name="userName" v-model="userName">
        <button type="submit" class="modal__button">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import RenderTime from './render-time';

export default {
  name: 'GameModal',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data: function () {
    return {
      userName: ''
    }
  },
  methods: {
    addUserName: function () {
      this.$emit('sendModal', this.userName)
    },
  },
  computed: {
    resultTime: function () {
      return this.$store.state.globalData.resultLastTimer
    }
  },
  components: {
    RenderTime,
  },
}
</script>

<style lang="scss">
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
    z-index: 9;

    &.active {
      display: flex;
    }

    &__content {
      max-width: 600px;
      width: 100%;
      background: #fff;
      min-height: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    &__form {
      margin-top: 15px;
    }
    &__field {
      height: 38px;
      width: 200px;
      margin-right: 20px;
      padding: 0 20px;
    }
    &__button {
      height: 38px;
      width: 100px;
      font-size: 16px;
    }

  }
</style>
