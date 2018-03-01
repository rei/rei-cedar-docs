<template>
  <div>
    <Versions comp-path="CdrRating"/>
    <nuxt-child/>
    <Ratings/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Ratings from '~/components/rating/examples/Ratings.vue'

import '@rei/cdr-rating/dist/cdr-rating.css'

export default {
  name: 'Rating',
  components: {
    Ratings,
    Versions
  }
}
</script>

<style>

</style>
