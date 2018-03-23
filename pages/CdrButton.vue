<template>
  <div>
    <Versions comp-path="CdrButton"/>
    <nuxt-child/>
    <no-ssr>
      <vuep :value="value" :scope="scope"></vuep>
    </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-button/dist/cdr-button.css'

let CdrButton = Components.CdrButton

export default {
  name: 'Button',
  data() {
    return {
      scope: { CdrButton },
      value: `
<template>
  <div>
    <cdr-button>This is a {{testing}}</cdr-button>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    data: function() {
      return {
        testing: 'button'
      }
    },
    components: {
      CdrButton
    }
  }
<\/script>`
    }
  },
  components: {
    Versions,
  },
}
</script>