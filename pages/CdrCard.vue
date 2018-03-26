<template>
  <div>
    <Versions comp-path="CdrCard"/>
    <nuxt-child/>
    <vuep :value="value" :scope="scope"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-card/dist/cdr-card.css'

let CdrCard = Components.CdrCard

export default {
  name: 'Card',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrCard },
      value: `
<template>
  <cdr-card>
    <p>A simple card</p>
  </cdr-card>
</template>

<script>
module.exports = {
  name: 'live-example',
  components: {
    CdrCard
  }
}
<\/script>`
    }
  }
}
</script>

<style>

</style>
