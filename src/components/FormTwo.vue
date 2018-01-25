<template lang="pug">
  form-helper
    div(slot='form-header')
      h3 Form Two - Log In
      p Enter your details to log-in
    div(slot='form-fields')
      input(type='text' placeholder='name' required)
      input(type='password' placeholder='password' required)
    div(slot='form-controls')
      button(v-on:click='handleSubmit()') Login

</template>

<script>
import FormHelper from './FormHelper.vue'

export default {
    components: {
        'Form-helper': FormHelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for logging in (form two)');
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
