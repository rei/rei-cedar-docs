
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/heading/archive/cdrHeading.md'

export default {
  name: 'CdrHeading-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>