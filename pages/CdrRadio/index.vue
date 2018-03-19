
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/radio/archive/cdrRadio.md'

export default {
  name: 'CdrRadio-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>