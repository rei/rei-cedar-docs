<template>
  <div>
    <h1 id="intro">Introduction</h1>
    <div v-html="introMD"></div>
  </div>
</template>

<script>
import introMD from '~/docs/Introduction.md'

export default {
  computed: {
    introMD() {
      return introMD
    }
  }
}
</script>
