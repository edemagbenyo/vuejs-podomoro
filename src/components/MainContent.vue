<template>
  <div>
    <header-component></header-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import {HeaderComponent, ContentComponent, FooterComponent} from './main'
export default {
  name: 'App',
  components:{
      HeaderComponent,
      ContentComponent,
      FooterComponent
  }
}
</script>

<style>

</style>
