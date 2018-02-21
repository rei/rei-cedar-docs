<template>
  <div>
    <div id="CdrRating" v-html="ratingMD"></div>
    <Ratings/>
  </div>
</template>

<script>
import ratingMD from '~/components/rating/archive/cdrRating.md'
import Ratings from '~/components/rating/examples/Ratings.vue'

import '@rei/cdr-rating/dist/cdr-rating.css'

export default {
  name: 'Rating',
  computed: {
    ratingMD() {
      return ratingMD
    }
  },
  components: {
    Ratings
  }
}
</script>

<style>

</style>
