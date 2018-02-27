<template>
  <div v-if="versions.length > 0">
    <ul>
      <li v-for="version in versions" :key="version">
        <a :href="'#' + compPath + '-' + version">{{version}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import archive from '~/archive-versions'

export default {
  name: 'Versions',
  props: {
    compPath: {
      type: String,
      require: true,
    }
  },
  computed: {
    archive() {
      return archive
    },
    versions() {
      return archive[this.compPath]
    }
  }
}
</script>

<style>

</style>
