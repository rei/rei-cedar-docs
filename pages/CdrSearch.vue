<template>
  <div>
    <Versions comp-path="CdrSearch"/>
    <nuxt-child/>
    <vuep :scope="scope" :value="value"></vuep>
    <Searches/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Searches from '~/compositions/search/examples/searchbox.vue'
import { CdrSearch } from '~/compositions/_index'

import '@rei/cdr-search/dist/cdr-search.css'

export default {
  name: 'Search',
  components: { 
    Searches,
    Versions 
  },
  data() {
    return {
      scope: { CdrSearch },
      value: `
<template>
  <div>
    <cdr-search
    v-model="search1"/>
    <p>Searching: {{ search1 }}</p>
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrSearch
    },
    data: function() {
      return {
        search1: ''
      }
    }
  }
<\/script>`
    }
  }
}
</script>

<style>

</style>
