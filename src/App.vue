<template lang="pug">
  section#glowna
    app-nav
    router-view
    
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBlogs from './components/ListBlogs.vue'
import Nav from './components/Nav.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
    'app-nav': Nav
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