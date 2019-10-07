<template>
  <div>
    <input type="text" class="form-control" v-bind:value="value" @keyup="emitChanged" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods:{
      emitChanged(value){
          console.log('Value changed on key up',value.target.value)
          this.$emit('valueChanged',value.target.value)
      }
  }
};
</script>

<style scoped lang="scss">

</style>