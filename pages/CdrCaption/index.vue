
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/compositions/caption/archive/CdrCaption.md'

export default {
  name: 'CdrCaption-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>