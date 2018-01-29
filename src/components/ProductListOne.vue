<template lang="pug">
  section#product-list-one
    h2 Product List One
    ul
      li(v-for='product in saleProducts') {{product.name}} {{product.price}}
    button(v-on:click='reducePrice(4)') Reduce Price

</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products;
    },
    saleProducts () {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice (amount) {
      this.$store.dispatch('reducePrice', amount);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>