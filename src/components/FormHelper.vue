<template lang="pug">
  section#form-helper
    slot(name='title')
    h1 I am form helper
    slot(name='text')
    hr
    div(slot='form-header')
      h3 This is the title of form
      p Information about form
    div(slot='form-fields')
      input(type='text' placeholder='name' required)
      input(type='password' placeholder='password' required)
    div(slot='form-controls')
      button(v-on:click='handleSubmit()') Submit
    
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
  section#form-helper
    h1
      color red

</style>
