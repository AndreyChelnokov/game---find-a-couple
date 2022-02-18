<template>
  <div class="timer">
    <div class="timer__item">{{ minutes }}</div> :
    <div class="timer__item">{{ seconds }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameTimer',
  data: function () {
    return {
      startTime: new Date().getTime(),
      milliseconds: '',
      seconds: '00',
      minutes: '00'
    }
  },
  methods: {
    getSeconds: function () {
      const offsetTimer = new Date().getTime() - this.$store.state.currentGameData.startTime;
      return Math.floor(offsetTimer / 1000 % 60);
    },
    getMinutes: function () {
      const offsetTimer = new Date().getTime() - this.$store.state.currentGameData.startTime;
      return Math.floor(offsetTimer / 1000 / 60 % 60);
    },
    updateSeconds: function () {
      this.seconds = this.getSeconds();
    },
    updateMinutes: function () {
      this.minutes = this.getMinutes();
    },
    updateTimerVariables: function () {
      this.setInterval = setInterval(() => {
          this.updateSeconds();
          this.updateMinutes();
      }, 1000)
    },
    resetLocalTimer: function () {
      this.minutes = '00';
      this.seconds = '00';
      this.milliseconds = '';
    },

    startTimer: function () {
      this.updateTimerVariables();
    },
    stopTimer: function () {
      this.setInterval = clearInterval(this.setInterval); // Останавливаем обновление таймера
      this.$store.commit('ADD_NEW_RESULT_LAST_TIMER', {
        seconds: this.seconds,
        milliseconds: (new Date().getTime() - this.$store.state.currentGameData.startTime) % 1000,
        minutes: this.minutes
      }) // Добавляем результаты игры в таблицу
      this.$store.commit('RESET_START_TIMER'); // Обнуляем время начала игры

      this.resetLocalTimer();
    },
  },
  computed: {
    isGameLaunched: function () {
      return this.$store.state.currentGameData.gameLaunched;
    },
  },
  components: {},
  watch: {
    isGameLaunched: function(newValue, oldValue) {
      if (newValue && oldValue === false) {
        this.startTimer();
      }

      if (newValue === false && oldValue) {
        this.stopTimer();
      }
    }
  }
}
</script>

<style lang="scss">
  .timer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 23px;
  }
</style>



<!--Сохраняем время начала игры-->
<!--Запускаем отсчет времени (если игра запущена)-->
<!--Останавливаем счет времени (если игра не запущена)-->
<!--Сохранчем накопленное время при завершении игры-->
<!--Сбранываем счетчики при завершении игры-->

<!--Надо знать. -->
<!--  Время начала игры-->
<!--  Когда игра запускается-->
<!--  Когда игра останавливается-->
