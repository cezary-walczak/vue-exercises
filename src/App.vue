<template lang="pug">
  section#glowna
    app-header(v-bind:title='title' v-on:changeTitle='updateTitle($event)')
    app-ninjas(v-bind:ninjas='ninjas')
    app-footer(v-bind:title='title')
    form-helper
      h2(slot='title') {{ slotTitle }}
      p(slot='text')  I am paragraph text for slot
      hr
      h1 please fill out the form
      form
        #form-header
          slot(name='form-header')
        #form-fields
          slot(name='form-fields')
        #form-controls
          slot(name='form-controls')
        #useful-links
          ul
            li
              a link1
              a link2
              a link3
    
</template>

<script>
import Header from './components/Header.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';
import FormHelper from './components/FormHelper.vue';

export default {
  components: {
    'app-header': Header,
    'app-ninjas': Ninjas,
    'app-footer': Footer,
    'form-helper': FormHelper
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
      ],
      slotTitle: 'I am dynamic slot title'
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
