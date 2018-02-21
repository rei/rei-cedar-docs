<template>
  <div>
    <div id="CdrImg" v-html="imageMD"></div>
    <Images/>
  </div>
</template>

<script>
import imageMD from '~/components/image/archive/cdrImg.md'
import Images from '~/components/image/examples/Images.vue'

export default {
  name: 'Image',
  computed: {
    imageMD() {
      return imageMD
    }
  },
  components: {
    Images
  }
}
</script>

<style>

</style>
