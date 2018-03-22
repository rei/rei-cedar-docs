<template>
  <div>
    <Versions comp-path="CdrA" />
    <nuxt-child/>
    <!-- <Anchors/> -->
      <no-ssr>
        <vuep :value="value" :scope="scope" :options="{ theme: 'material' }"></vuep>
      </no-ssr>
  </div>
</template>

<script>
// import contrastAnchor from '~/components/anchor/examples/demo/Contrast.vue'
import Anchors from '~/components/anchor/examples/Anchors.vue'
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

let  CdrA = Components.CdrA

import '@rei/cdr-a/dist/cdr-a.css'

export default {
  name: 'Anchor',
  data() {
    return {
      scope: { CdrA },
      value: `
<template>
  <div>
    <h1>This is a {{testing}} anchor</h1>
    <cdr-a>This is a {{real}} anchor</cdr-a>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    data: function() {
      return {
        testing: 'fake',
        real: 'not fake'
      }
    },
    components: {
      CdrA
    }
  }
<\/script>`
    }
  },
  components: {
    Anchors,
    Versions
  },
}
</script>

<style>

</style>
