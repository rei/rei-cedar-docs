<template>
  <div>
    <div v-html="cardMD"></div>
    <Cards/>
  </div>
</template>

<script>
import cardMD from '~/components/card/archive/cdrCard.md'
import Cards from '~/components/card/examples/Cards.vue'

import '@rei/cdr-card/dist/cdr-card.css'

export default {
  name: 'Card',
  components: {
    Cards
  },
  computed: {
    cardMD () {
      return cardMD
    }
  }
}
</script>

<style>

</style>
