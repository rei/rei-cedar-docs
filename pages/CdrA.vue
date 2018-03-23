<template>
  <div>
    <Versions comp-path="CdrA" />
    <nuxt-child/>
      <no-ssr>
        <vuep :value="value" :scope="scope"></vuep>
      </no-ssr>
  </div>
</template>

<script>
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
    <cdr-a>This is an {{testing}}</cdr-a>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    data: function() {
      return {
        testing: 'anchor',
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
    Versions
  },
}
</script>