<template>
  <div>
    <div id="CdrRating" v-html="ratingMD"></div>
    <CRatings/>
  </div>
</template>

<script>
import ratingMD from '~/components/rating/archive/cdrRating.md'
import CRatings from '~/components/rating/examples/Ratings.vue'

import '@rei/cdr-rating/dist/cdr-rating.css'

export default {
  name: 'CRating',
  computed: {
    ratingMD() {
      return ratingMD
    }
  },
  components: {
    CRatings
  }
}
</script>

<style>

</style>
