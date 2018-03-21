
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/icon/archive/cdrIcon.md'

export default {
  name: 'CdrIcon-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>