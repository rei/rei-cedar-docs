
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/select/archive/versions/cdrSelect-0.0.1.md'

export default {
  name: 'CdrSelect-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>