<template>
  <div class="container">
    <div class="row">
      <svg-circle-sector class="justify-content-center" :angle="angle" :text="text"></svg-circle-sector>
      <div class="controls">
        <div class="btn-group" role="group">
          <button @click="start" type="button" class="btn btn-link" v-bind:class="{disabled:isStarted}">Start</button>
          <button @click="pause" type="button" class="btn btn-link" v-bind:class="{disabled:isPaused}">Pause</button>
          <button @click="stop" type="button" class="btn btn-link" v-bind:class="{disabled:isStopped}">Stop</button>
        </div>
      </div>
    </div>
  </div>
</template>
   <script>
import SvgCircleSector from "./SvgCircleSector";
export default {
  props: ["time"],
  data() {
    return {
      timestamp: this.time,
      interval: null,
      isStarted:false,
      isPaused:true,
      isStopped:true
    };
  },
  computed: {
    angle() {
      return 360 - (360 / this.time) * this.timestamp;
    },
    minutes() {
      return Math.floor(this.timestamp / 60);
    },
    seconds() {
      return this.timestamp % 60;
    },
    text() {
      return `${this.minutes}:${this.seconds}`;
    }
  },
  components: {
    SvgCircleSector
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.timestamp--;
        if (this.timestamp === 0) {
          this.timestamp = this.time;
        }
      }, 1000);

      this.isStopped = false;
        this.isStarted = true;
        this.isPaused = false;
    },
    stop() {
        clearInterval(this.interval) 
        this.timestamp = this.time
        this.isStopped = true;
        this.isStarted = false;
        this.isPaused = false;
    },
    pause() {
        clearInterval(this.interval)
        this.isStopped = false;
        this.isStarted = false;
        this.isPaused = true;
    }
  }
};
</script>
<style scoped lang="scss">
</style>