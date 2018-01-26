<template lang="pug">
  section#add-blog
    h2 Add a new blog post
    form
      label Blog Title:
      input(type='text' v-model.lazy='blog.title' required)
      label Blog Content:
      textarea(v-model.lazy='blog.content')
      #checkboxes
        label Tianeptyna
        input(type='checkbox' value='tianeptyna' v-model='blog.categories')
        label Sulpiryd
        input(type='checkbox' value='sulpiryd' v-model='blog.categories')
        label Toloksaton
        input(type='checkbox' value='toloksaton' v-model='blog.categories')
        label Karbamazepina
        input(type='checkbox' value='karbamazepina' v-model='blog.categories')
      #selectboxes
        label Author
        select(v-model='blog.author')
          option(v-for='author in authors') {{ author }} 
    #preview
      h3 Preview blog
      p Blog Title: {{ blog.title }}
      p Blog Content:
      p {{ blog.content }}
      p Blog Categories:
        ul
          li(v-for='category in blog.categories') {{ category }}
      p Blog Author: {{ blog.author }}

</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['React Retaliator', 'Angular Avenger', 'Vue Vindicator']
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
      select,
      textarea
        display block
        margin 2vh 2vw
      textarea 
        width 20vw
        height 20vh
      #checkboxes
        *
          display inline-block
          margin-right 0
          
    #preview
      h3,
      p
        display block
        margin 2vh 2vw
        width 20vw
        
</style>