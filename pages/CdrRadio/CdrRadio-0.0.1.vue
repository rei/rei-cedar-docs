
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/radio/archive/versions/cdrRadio-0.0.1.md'

export default {
  name: 'CdrRadio-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>