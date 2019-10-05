<template>
  <div>
    <h1>Landing Page</h1>
    <logo></logo>
    <tag-line></tag-line>
    <authentication></authentication>
    <go-to-app-link></go-to-app-link>

  </div>
</template>

<script>
//LandingPage.vue
import { Authentication, GoToAppLink, TagLine } from "./landing";
import { Logo } from "./common";

export default {
  name:'Landing',
  components: {
    Logo,
    Authentication,
    GoToAppLink,
    TagLine
  }
}
</script>

<style>

</style>
