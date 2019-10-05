<template>
  <div>
 
      <header-component></header-component>
      <intro-component></intro-component>
      <content-component></content-component>
      <footer-component></footer-component>

  </div>
</template>

<script>
//LandingPage.vue
import { HeaderComponent, FooterComponent, IntroComponent, ContentComponent } from "./front-landing";
import { Logo } from "./common";

export default {
  name:'Landing',
  components: {
    Logo,
    HeaderComponent,
    IntroComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>

<style>

</style>
