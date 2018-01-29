<template lang="pug">
  section#product-list-one
    h2 Product List One
    ul
      li(v-for='product in saleProducts') {{product.name}} {{product.price}}
    button(v-on:click='reducePrice(4)') Reduce Price

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  computed: {
    products () {
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ])
  }
}
</script>

<style lang="stylus" scoped>

</style>