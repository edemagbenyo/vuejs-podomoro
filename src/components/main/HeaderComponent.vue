<template>
  <div>
    <h1>Header page</h1>
    <authentication></authentication>
    <go-to-app-link></go-to-app-link>
    <tag-line></tag-line>
  </div>
</template>

<script>
import {Authentication, GoToAppLink,TagLine} from '../landing';
export default {
  name: 'Header',
  components:{
    Authentication, GoToAppLink, TagLine
  }
}
</script>

<style>

</style>
