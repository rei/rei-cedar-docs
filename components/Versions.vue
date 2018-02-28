<template>
  <div v-if="versions.length > 0">
    <span>Version:</span>
    <select @change="navigate($event)">
      <option value="">Current</option>
      <template v-for="version in versions">
        <option :key="version" :value="'/' + compPath + '-' + version">{{version}}</option>
      </template>
    </select>
    <hr/>
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
  },
  methods: {
    navigate (evt) {
      if (evt.target.tagName === 'SELECT') {
        console.log(`This path is ${this.$route.path}`)
        $nuxt.$router.push({ path: `/${this.compPath}${evt.target.value}` })
      }
    }
  }
}
</script>

<style>

</style>
