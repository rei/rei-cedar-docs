<template>
  <div>
    <Versions comp-path="CdrSearch"/>
    <nuxt-child/>
    <Searches/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Searches from '~/compositions/search/examples/searchbox.vue'

import '@rei/cdr-search/dist/cdr-search.css'

export default {
  name: 'Search',
  components: { 
    Searches,
    Versions 
  }
}
</script>

<style>

</style>
