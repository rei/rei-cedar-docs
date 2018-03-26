<template>
  <div>
    <Versions comp-path="CdrList"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-list/dist/cdr-list.css'

const CdrList = Components.CdrList

export default {
  name: 'List',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrList },
      value: `
<template>
  <div>
    <cdr-list modifier="disc">
      <li>List item - disc</li>
      <li>List item - disc</li>
      <li>List item - disc</li>
    </cdr-list>
    <cdr-list
      modifier="menu"
    >
      <li><a href="/">List menu</a></li>
      <li><a href="/">List menu</a></li>
    </cdr-list>
    <cdr-list
      modifier="unstyled compact">
      <li>List unstyled - compact</li>
      <li>List unstyled - compact</li>
      <li>List unstyled - compact</li>
    </cdr-list>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrList
    }
  }
<\/script>`
    }
  }
}
</script>
