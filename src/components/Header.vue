<template lang="pug">
  header
    h1 {{ title }}
    
</template>

<script>
export default {
  data () {
    return {
      title: 'vue ninjas'
    }
  }
}
</script>

<style lang="stylus" scoped>
  header
    width 100%
    height 30vh
    background lightgreen
    h1
      color darkgray
      text-align center
   
</style>
