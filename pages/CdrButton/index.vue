
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/button/archive/cdrButton.md'

export default {
  name: 'CdrButton-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>