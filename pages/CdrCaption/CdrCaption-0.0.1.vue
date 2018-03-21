
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/compositions/caption/archive/versions/CdrCaption-0.0.1.md'

export default {
  name: 'CdrCaption-0-0-1',
  computed: {
    md() {
      return md
    }
  }
}
</script>