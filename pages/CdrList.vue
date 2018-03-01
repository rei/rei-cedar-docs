<template>
  <div>
    <Versions comp-path="CdrList"/>
    <nuxt-child/>
    <Lists/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Lists from '~/components/list/examples/Lists.vue'

import '@rei/cdr-list/dist/cdr-list.css'

export default {
  name: 'List',
  components: {
    Lists,
    Versions
  }
}
</script>

<style>

</style>
