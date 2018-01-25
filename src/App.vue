<template lang="pug">
  section#glowna
    h1 {{ title }}
    app-header
    app-ninjas
    app-footer
    
</template>

<script>
import Header from './components/Header.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'app-header': Header,
    'app-ninjas': Ninjas,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'ninja app'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
