<template lang="pug">
  section#glowna
    add-blog
    hr
    show-blogs
    
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>