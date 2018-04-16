<template>
  <div>
    <Versions comp-path="CdrRating"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
    <Ratings/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Ratings from '~/components/rating/examples/Ratings.vue'
import { CdrRating } from '~/components/_index'

import '@rei/cdr-rating/dist/cdr-rating.css'

export default {
  name: 'Rating',
  components: {
    Ratings,
    Versions
  },
  data() {
    return {
      scope: { CdrRating },
      value: `
<template>
  <div>
    <h2>Ratings</h2>
    <cdr-rating rating="1.2" count="77" ></cdr-rating>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrRating
    }
  }
<\/script>`
    }
  }
}
</script>