<template lang="pug">
  footer
    p {{ copyright }}
    
</template>

<script>
export default {
  data () {
    return {
      copyright: 'copyright 2017 vue ninjas'
    }
  }
}
</script>

<style lang="stylus" scoped>
  footer
    width 100%
    height 30vh
    background darkgray
    p
      color lightgreen
      text-align center
   
</style>
