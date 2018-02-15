<template>
  <div>
    <div v-html="cardMD"></div>
    <Cards/>
  </div>
</template>

<script>
import cardMD from '~/components/card/archive/cdrCard.md'
import Cards from '~/components/card/examples/Cards.vue'

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
