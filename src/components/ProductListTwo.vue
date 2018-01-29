<template lang="pug">
  section#product-list-two
    h2 Product List Two
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