<template>
  <div>
    <Versions comp-path="CdrA" />
    <nuxt-child/>
    <Anchors/>
    <!-- <vuep :value="value" :scope="scope"></vuep> -->
  </div>
</template>

<script>
// import contrastAnchor from '~/components/anchor/examples/demo/Contrast.vue'
import Anchors from '~/components/anchor/examples/Anchors.vue'
import Versions from '~/components/Versions.vue'

import '@rei/cdr-a/dist/cdr-a.css'

export default {
  name: 'Anchor',
  components: {
    Anchors,
    Versions
  },
}
</script>

<style>

</style>
