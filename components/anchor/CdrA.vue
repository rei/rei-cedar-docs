<template>
  <div>
    <div id="CdrA" v-html="anchorMD"></div>
    <Anchors/>
  </div>
</template>

<script>
import anchorMD from '~/components/anchor/archive/cdrA.md'
import Anchors from '~/components/anchor/examples/Anchors.vue'

import '@rei/cdr-a/dist/cdr-a.css'

export default {
  name: 'Anchor',
  components: {
    Anchors
  },
  asyncData: {
    anchor: 'CdrA'
  },
  computed: {
    anchorMD() {
      return anchorMD
    },
    hashtag() {
      return '#' + this.anchor
    }
  }
}
</script>

<style>

</style>
