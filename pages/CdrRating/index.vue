
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/rating/archive/cdrRating.md'

export default {
  name: 'CdrRating-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>