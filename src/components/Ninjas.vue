<template lang="pug">
  section#ninjas
    ul
      li(v-for='ninja in ninjas' v-on:click='ninja.show = !ninja.show')
        h2 {{ ninja.name }}
        h3(v-show='ninja.show') {{ ninja.speciality }}
    button(v-on:click='deleteNinja()') delete ninja

</template>

<script>
export default {
    props: {
      ninjas: {
        type: Array
      }
    },
    data () {
      return {
        
      }
    },
    methods: {
      deleteNinja () {
        this.ninjas.pop();
      }
    },
    // lifecycle hooks
    // created() {
    //   alert('create - fetch data');
    // },
    // mounted() {
    //   alert('mount - manipulate dom');  
    // },
    // updated() {
    //   alert('updated - rerender');  
    // }
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
