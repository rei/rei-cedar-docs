
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/button/archive/versions/cdrButton-0.0.3.md'

export default {
  name: 'CdrButton-0-0-3',
  computed: {
    md() {
      return md
    }
  }
}
</script>