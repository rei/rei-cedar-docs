<template>
  <div>
    <Versions comp-path="CdrIcon"/>
    <nuxt-child/>
    <Icons/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Icons from '~/components/icon/examples/Icons.vue'

import '@rei/cdr-icon/dist/cdr-icon.css'

export default {
  name: 'Icon',
  components: {
    Icons,
    Versions,
  }
}
</script>

<style>

</style>
