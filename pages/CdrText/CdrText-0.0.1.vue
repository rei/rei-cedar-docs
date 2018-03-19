
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/text/archive/versions/CdrText-0.0.1.md'

export default {
  name: 'CdrText-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>