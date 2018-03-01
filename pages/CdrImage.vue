<template>
  <div>
    <Version comp-path="CdrImg"/>
    <nuxt-child/>
    <Images/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Images from '~/components/image/examples/Images.vue'

import '@rei/cdr-img/dist/cdr-img.css'

export default {
  name: 'CImage',
  components: { 
    Images,
    Versions
  }
}
</script>

<style>

</style>
