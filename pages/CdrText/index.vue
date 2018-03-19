
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/text/archive/CdrText.md'

export default {
  name: 'CdrText-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>