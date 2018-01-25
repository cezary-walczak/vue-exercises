<template lang="pug">
  form-helper
    div(slot='form-header')
      h3 Form One - Contact Us
      p Fill in this form to contact us
    div(slot='form-fields')
      input(type="text" placeholder="name" required)
      label Your Message
      textarea
    div(slot='form-controls')
      button(v-on:click='handleSubmit()') Submit

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
            alert('thanks for submitting form one & contacting us');
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
