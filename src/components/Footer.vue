<template lang="pug">
  footer
    p {{ copyright }} {{ title }}
    
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'copyright 2017'
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
