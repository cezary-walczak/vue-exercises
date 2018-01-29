<template lang="pug">
  section#product-list-two
    h2 Product List Two
    ul
      li(v-for='product in products') {{product.name}} {{product.price}}

</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products;
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>