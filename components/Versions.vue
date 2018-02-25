<template>
  <div v-if="getVersions.length > 0">
    <ul>
      <li v-for="version in getVersions" :key="version">
        <a :href="'#'">{{version}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import versions from '~/components/_versions'

export default {
  name: 'Versions',
  props: {
    compPath: {
      type: String,
      require: true,
    }
  },
  computed: {
    getVersions() {
      return versions(compPath)
    }
  }
}
</script>

<style>

</style>
