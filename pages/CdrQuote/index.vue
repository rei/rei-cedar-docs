
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/quote/archive/CdrQuote.md'

export default {
  name: 'CdrQuote-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>