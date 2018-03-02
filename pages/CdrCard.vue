<template>
  <div>
    <Versions comp-path="CdrCard"/>
    <nuxt-child/>
    <Cards/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Cards from '~/components/card/examples/Cards.vue'

import '@rei/cdr-card/dist/cdr-card.css'

export default {
  name: 'Card',
  components: {
    Cards,
    Versions
  },
}
</script>

<style>

</style>
