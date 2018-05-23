<template>
  <div class="page">
      <cdr-doc-intro :title="data.title" :metadata="data.title_metadata" :breadcrumbs="data.breadcrumbs">
        {{ data.summary }}
      </cdr-doc-intro>
    <div class="cdr-doc-article-body">
      <Content :custom="false"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens';
  @import '../theme/styles/cdr-doc-tokens';

  .cdr-doc-article-body {
    margin: 0 auto;
    width: $cdr-doc-content-max-width;
  }
</style>
