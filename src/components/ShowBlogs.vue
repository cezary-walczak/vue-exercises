<template lang="pug">
  section#show-blogs(v-theme:column='"wide"')
    input(type='text' placeholder='Search...' v-model='search')
    h1 All Blog Articles
    .single-blog(v-for='blog in filteredBlogs')
      h2(v-rainbow) {{ blog.title | toUppercase }}
      article {{ blog.body | snippet }}

</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase();
    }
  }, 
  directives: {
    rainbow: {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#show-blogs
    margin 1vh 1vw
    max-width 100%
    .single-blog
      background #eee
</style>