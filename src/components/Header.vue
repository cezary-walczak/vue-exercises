<template lang="pug">
  header
    h1(v-on:click='changeTitle') {{ title }}
    
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title: 'vue ninjas'
    }
  },
  methods: {
    changeTitle () {
      // this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizards';
      bus.$emit('titleChange', this.title);
    }
  }
}
</script>

<style lang="stylus" scoped>
  header
    width 100%
    height 30vh
    background lightgreen
    h1
      color darkgray
      text-align center
   
</style>
