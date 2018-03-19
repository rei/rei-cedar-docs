
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/list/archive/versions/cdrList-0.0.1.md'

export default {
  name: 'CdrList-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>