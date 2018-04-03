
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/icon/archive/versions/cdrIcon-0.0.2.md'

export default {
  name: 'CdrIcon-0-0-2',
  computed: {
    md() {
      return md
    }
  }
}
</script>