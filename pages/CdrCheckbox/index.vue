
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/components/checkbox/archive/cdrCheckbox.md'

export default {
  name: 'CdrCheckbox-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>