<template>
  <div class="row">
    <div class="col-md-4">
      <div class="jumbotron">
        <div class="container">
          <img class="img-fluid rounded" src="IMAGE_SOURCE" alt />
          <h2>Push-ups</h2>
          <span>Description: lorem ipsum</span>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <count-down-timer
        :time="time"
        angle="12"
        @finished="togglePomodoro"
        class="col-sm-12 col-md-8 col-lg-6 col-xl-4"
      ></count-down-timer>
    </div>
  </div>
</template>

<script>
import CountDownTimer from "./CountDownTimer";
import {mapGetters} from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      isWorking: true,
      isShortBreak: false,
      isLongBreak: false,
      pomodoros: 0
    };
  },
  components: {
    CountDownTimer
  },
  computed: {
    ...mapGetters({
      config:'getConfig'
    }),
    time() {
      let minutes;

      if (this.isWorking) {
        minutes = this.config.workingPodomoro;
      } else if (this.isShortBreak) {
        minutes = this.config.shortBreak;
      } else if (this.isLongBreak) {
        minutes = this.config.longBreak;
      }

      return minutes * 60;
    }
  },
  methods: {
    togglePomodoro() {
      // toggle the working state
      this.isWorking = !this.isWorking;
      // reset break states
      this.isShortBreak = this.isLongBreak = false;
      // we have switched to the working state, just return
      if (this.isWorking) {
        return;
      }
      // we have switched to the break state, increase the number of pomodoros and choose between long and short break
      this.pomodoros++;
      this.isLongBreak = this.pomodoros % this.config.pomodorosTillLongBreak === 0;
      this.isShortBreak = !this.isLongBreak;
    }
  }
};
</script>

<style>
</style>
