<template lang="pug">
  section#product-list-one
    h2 Product List One
    ul
      li(v-for='product in saleProducts') {{product.name}} {{product.price}}
    button(v-on:click='reducePrice') Reduce Price

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
    reducePrice() {
      // this.$store.state.products.forEach(product => {
      //   product.price -= 1;
      // })
      this.$store.commit('reducePrice');
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>