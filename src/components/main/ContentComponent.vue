<template>
  <div>
    <h1>Content</h1>
    <podomoro-timer></podomoro-timer>
  </div>
</template>

<script>
import {PodomoroTimer, Settings, Workouts, Statistics} from "./sections";

export default {
  name: "Content",
  components: {
    PodomoroTimer,
    Settings,
    Workouts,
    Statistics
  }
};
</script>

<style>
</style>
