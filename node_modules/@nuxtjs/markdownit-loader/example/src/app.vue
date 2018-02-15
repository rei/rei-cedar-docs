<template>
  <div class="markdown-body">
    <markdown></markdown>
    <div v-html="md"></div>
  </div>
</template>

<script>
import markdown from './markdown.vue'
import markdown2 from './markdown2.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  components: {
    markdown
  },
  data: function() {
    return {
      md: markdown2
    }
  }
}
</script>
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>
