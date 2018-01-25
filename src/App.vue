<template lang="pug">
  section#glowna
    h1 {{ title }}
    p {{ greeting() }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'first vue file'
    }
  },
  methods: {
    greeting () {
      return 'hello';
    }
  }
}
</script>

<style lang="stylus">

</style>
