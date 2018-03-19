
<template>
  <div id="cedar-comp" v-html="md"></div>
</template>
<script>
import md from '~/compositions/activityCard/archive/cdrActivityCard.md'

export default {
  name: 'CdrActivityCard-current',
  computed: {
    md() {
      return md
    }
  }
}
</script>