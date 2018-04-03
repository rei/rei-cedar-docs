
<template>
  <div>
    <div id="cedar-comp" v-html="md"></div>
  </div>
</template>
<script>
import md from '~/components/checkbox/archive/versions/cdrCheckbox-0.0.2.md'

export default {
  name: 'CdrCheckbox-0-0-2',
  computed: {
    md() {
      return md
    }
  }
}
</script>