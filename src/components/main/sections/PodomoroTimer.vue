<template>
  <div>
    <h1>Podomoro</h1>
    <count-down-timer :time="time" angle="12" class="col-sm-12 col-md-8 col-lg-6 col-xl-4"></count-down-timer>
  </div>
</template>

<script>
import CountDownTimer from "./CountDownTimer";
import config from '../../../config';
export default {
  name: "Header",
  data(){
    return {
       isWorking: true,
       isShortBreak: false,
       isLongBreak: false,
       pomodoros: 0
}
  },
  components: {
    CountDownTimer
  },
  computed:{
    time(){
      let minutes;

      if(this.isWorking){
        minutes = config.workingPomodoro;
      }else if(this.isShortBreak){
        minutes = config.shortBreak
      }else if(this.isLongBreak){
        minutes = config.longBreak
      }

      return minutes*60;
    }
  },
};
</script>

<style>
</style>
