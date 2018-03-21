
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/mediaObject/archive/cdrMediaObject.md'

export default {
  name: 'CdrMediaObject-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>