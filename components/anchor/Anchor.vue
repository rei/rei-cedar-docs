<template>
  <div>
    <div v-html="anchorMD"></div>
    <Anchors/>
  </div>
</template>

<script>
import anchorMD from './archive/cdrA.md'
import Anchors from './examples/Anchors'

export default {
  name: 'Anchor',
  components: {
    Anchors
  },
  computed: {
    anchorMD() {
      return anchorMD
    }
  }
}
</script>

<style>

</style>
