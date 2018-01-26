<template lang="pug">
  section#add-blog
    h2 Add a new blog post
    form
      label Blog Title:
      input(type='text' v-model.lazy='blog.title' required)
      label Blog Content:
      textarea(v-model.lazy='blog.content')
    #preview
      h3 Preview blog
      p Blog Title: {{ blog.title }}
      p Blog Content:
      p {{ blog.content }}

</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  section#add-blog
    h2
    form
      label,
      input,
      textarea
        display block
        margin 2vh 2vw
        width 20vw
      textarea 
        height 20vh
    #preview
      h3,
      p
        display block
        margin 2vh 2vw
        width 20vw
        
</style>