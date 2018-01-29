<template lang="pug">
  section#product-list-one
    h2 Product List One
    ul
      li(v-for='product in products') {{product.name}} {{product.price}}

</template>

<script>
export default {
  props: ['products'],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>