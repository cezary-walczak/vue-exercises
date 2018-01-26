<template lang="pug">
  section#show-blogs
    h1 All Blog Articles
    .single-blog(v-for='blog in blogs')
      h2 {{ blog.title }}
      article {{ blog.body }}

</template>

<script>
export default {
  data () {
    return {
      blogs: []
    }
  },
  methods: {
    
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  }
}
</script>

<style lang="stylus" scoped>
  section#show-blogs
    margin 1vh 1vw
    .single-blog
      background #eee
</style>