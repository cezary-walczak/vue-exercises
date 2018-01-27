<template lang="pug">
  section#single-blog
    h1 {{ blog.title }}
    article {{ blog.body }}

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
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then((data) => {
      console.log(data);
      this.blog = data.body;
    });
  }
}
</script>

<style lang="stylus" scoped>

</style>