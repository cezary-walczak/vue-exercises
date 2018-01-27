<template lang="pug">
  nav
    ul
      li
        router-link(to="/" exact) Blog
        router-link(to="/add" exact) Add New Blog

</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  nav
    ul
      list-style-type none
      li
        a
          text-decoration none
          padding 1vh 1vw
        .router-link-active
          border 1px solid #000

</style>