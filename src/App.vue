<template lang="pug">
  section#glowna
    h1 {{ title }}
    ninjas
    
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  components: {
    ninjas: Ninjas
  },
  data () {
    return {
      title: 'ninja app'
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#glowna
    h1
      color lightgreen

</style>
