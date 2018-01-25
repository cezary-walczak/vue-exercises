<template lang="pug">
  section#ninja
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

<style lang="stylus">

</style>
