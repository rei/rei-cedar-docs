
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/column/archive/cdrCol.md'

export default {
  name: 'CdrCol-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>