
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/card/archive/cdrCard.md'

export default {
  name: 'CdrCard-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>