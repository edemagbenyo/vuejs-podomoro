<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="container">
        <h2>Account settings</h2>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="container">
        <h2>Set Podomoro timer</h2>
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 col-sm-10">
            <set-timer :value="config.workingPomodoro"></set-timer>
            <div class="figure-caption">Pomodoro</div>
          </div>
          <div class="col-md-4 col-sm-10">
            <set-timer :value="config.longBreak"></set-timer>
            <div class="figure-caption">Long break</div>
          </div>
          <div class="col-md-3 col-sm-10">
            <set-timer :value="config.shortBreak"></set-timer>
            <div class="figure-caption">Short break</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SetTimer from './SetTimer'
import {mapGetters} from 'vuex'
export default {
  name: "Settings",
  computed:{
    ...mapGetters({
      config:'getConfig'
    })
  },
  components:{
    SetTimer
  }
};
</script>

<style>
</style>
