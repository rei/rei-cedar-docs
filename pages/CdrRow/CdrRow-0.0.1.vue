
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/row/archive/versions/cdrRow-0.0.1.md'

export default {
  name: 'CdrRow-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>