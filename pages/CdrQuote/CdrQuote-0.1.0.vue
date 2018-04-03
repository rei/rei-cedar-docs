
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/quote/archive/versions/CdrQuote-0.1.0.md'

export default {
  name: 'CdrQuote-0-1-0',
  computed: {
    md() {
      return md
    }
  }
}
</script>