<template>
  <div>
    <div id="CdrImg" v-html="imageMD"></div>
    <Images/>
  </div>
</template>

<script>
import imageMD from '~/components/image/archive/cdrImg.md'
import Images from '~/components/image/examples/Images.vue'

import '@rei/cdr-img/dist/cdr-img.css'

export default {
  name: 'CImage',
  computed: {
    imageMD() {
      return imageMD
    }
  },
  components: { Images }
}
</script>

<style>

</style>
