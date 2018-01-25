<template lang="pug">
  section#ninja
    h1 list of ninjas
    ul
      li(v-for='ninja in ninjas') {{ ninja }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      ninjas: ['Yoshi', 'Shaun', 'Ryu']
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#ninja
    h1
      color lightgray
      
</style>
