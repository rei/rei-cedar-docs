<template>
  <div>
    <Versions comp-path="CdrHeading"/>
    <nuxt-child/>
    <Headings/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Headings from '~/components/heading/examples/Headings.vue'

import '@rei/cdr-heading/dist/cdr-heading.css'

export default {
  name: 'Heading',
  components: {
    Headings,
    Versions
  },
}
</script>

<style>

</style>
