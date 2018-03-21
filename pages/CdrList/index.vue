
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/list/archive/cdrList.md'

export default {
  name: 'CdrList-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>