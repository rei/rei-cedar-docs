
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/column/archive/versions/cdrCol-0.0.1.md'

export default {
  name: 'CdrCol-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>