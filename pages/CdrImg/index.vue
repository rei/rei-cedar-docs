
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/image/archive/cdrImg.md'

export default {
  name: 'CdrImg-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>