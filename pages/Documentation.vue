<template>
  <div>
    <h1 id="docs">Documentation</h1>
    <h2 id="install">Installation</h2>
    <div v-html="installMD"></div>
    <h2 id="config">Configuration</h2>
    <div v-html="configMD"></div>
  </div>
</template>

<script>
import installMD from '~/old_docs/Installation.md'
import configMD from '~/old_docs/Configuration.md'

export default {
  computed: {
    installMD() {
      return installMD
    },
    configMD() {
      return configMD
    }
  }
}
</script>

<style>

</style>
