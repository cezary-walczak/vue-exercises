<template lang="pug">
  section#single-blog
    h1 {{ blog.title }}
    article {{ blog.content }}
    p Author: {{ blog.author }}
    ul Categories:
      li(v-for='category in blog.categories') {{ category }}

</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id, // store id from url
      blog: {}
    }
  },
  created () {
    this.$http.get('https://vue-exercises.firebaseio.com/posts/' + this.id + '.json').then((data) => {
      return data.json();
      // this.blog = data.body;
    }).then((data) => {
      this.blog = data;
    });
  }
}
</script>

<style lang="stylus" scoped>

</style>