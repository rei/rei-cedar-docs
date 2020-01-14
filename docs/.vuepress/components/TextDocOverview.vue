<template>
  <div>
    <cdr-doc-example-code-pair 
      repository-href="/src/components/text" 
      :sandbox-data="$page.frontmatter.sandboxData"
      v-for="level in heading.serif"
      :key="`heading-serif-${level}`">

      ```html

        <cdr-text :modifier="`heading-serif-${level}`">
          When you gear up, we give back
        </cdr-text>

      ```
    </cdr-doc-example-code-pair>
  </div>
</template>

<script>
export default {
  name: 'TextDocOverView',
  data() {
    return {
      heading: {
        serif: [200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200],
        serifStrong: [600, 700, 800, 900, 1100, 1200],
        sans: [200, 300, 400, 500, 600],
      },
      subheading: {
        sans: [300, 400, 500, 600],
      },
    };
  },
};
</script>

<style lang="scss">
</style>
