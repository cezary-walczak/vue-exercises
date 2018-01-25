<template lang="pug">
  section#ninjas
    ul
      li(v-for='ninja in ninjas' v-on:click='ninja.show = !ninja.show')
        h2 {{ ninja.name }}
        h3(v-show='ninja.show') {{ ninja.speciality }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
  section#ninjas
    width 100%
    min-height 30vh
    ul
      display: flex;
      flex-flow: row wrap;
      list-style-type: none;
      li
        flex 1 1 500px;
        text-align: center;
        border: 1px solid #222;
   
</style>
