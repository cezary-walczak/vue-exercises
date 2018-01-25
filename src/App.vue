<template lang="pug">
  section#glowna
    h1 {{ title }}
    app-header
    app-ninjas(v-bind:ninjas='ninjas')
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
      title: 'ninja app',
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
