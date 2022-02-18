<template>
  <div :class="`${ className }__item-time`" class="time">
    <div v-if="minutes != undefined" :class="`${ className }__item-minutes`" class="time__minutes" >{{ minutes }}</div> :
    <div v-if="seconds != undefined" :class="`${ className }__item-seconds`" class="time__seconds" >{{ seconds }}</div> :
    <div v-if="milliseconds != undefined" :class="`${ className }__item-milliseconds`" class="time__milliseconds" >{{ milliseconds }}</div>
  </div>
</template>


<script>
export default {
  name: 'RenderTime',
  props: {
    className: String,
    minutes: Number,
    seconds: Number,
    milliseconds: Number
  }
}
</script>


<style>
  .time {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
  }
</style>
