<template>
  <div>
    <div id="CdrSearch" v-html="searchMD"></div>
    <Searches/>
  </div>
</template>

<script>
import searchMD from '~/compositions/search/archive/cdrSearch.md'
import Searches from '~/compositions/search/examples/searchbox.vue'

import '@rei/cdr-search/dist/cdr-search.css'

export default {
  name: 'Search',
  computed: {
    searchMD() {
      return searchMD
    }
  },
  components: { Searches }
}
</script>

<style>

</style>
