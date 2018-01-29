<template lang="pug">
  main
    product-list-one(v-bind:products='products')
    product-list-two(v-bind:products='products')

</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  components: {
    'product-list-one' : ProductListOne,
    'product-list-two' : ProductListTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>