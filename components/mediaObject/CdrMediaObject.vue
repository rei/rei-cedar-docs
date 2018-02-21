<template>
  <div>
    <div id="CdrMediaObject" v-html="mediaObjMD"></div>
    <!-- <MediaObjs/> -->
  </div>
</template>

<script>
import mediaObjMD from '~/components/mediaObject/archive/cdrMediaObject.md'
import MediaObjs from '~/components/mediaObject/examples/mediaObject.vue'

export default {
  name: 'MediaObject',
  computed: {
    mediaObjMD() {
      return mediaObjMD
    }
  },
  components: {
    MediaObjs
  }
}
</script>

<style>

</style>
