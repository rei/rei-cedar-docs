<template>
  <div>
    <Versions comp-path="CdrMediaObject"/>
    <nuxt-child/>
    <MediaObjs/>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import MediaObjs from '~/components/mediaObject/examples/mediaObject.vue'

import '@rei/cdr-media-object/dist/cdr-media-object.css'

export default {
  name: 'MediaObject',
  components: {
    MediaObjs,
    Versions
  }
}
</script>

<style>

</style>
