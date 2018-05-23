<template>
  <div class="page cdr-doc-article-layout">
      <cdr-doc-intro :title="data.title" :metadata="data.title_metadata" :breadcrumbs="data.breadcrumbs">
        {{ data.summary }}
      </cdr-doc-intro>
    <div class="cdr-doc-article-layout__body">
      <div class="cdr-doc-article-layout__body-inner">
        <Content :custom="false"/>
      </div>
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
  
  .cdr-doc-article-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .cdr-doc-article-layout__body {
    flex: 1 0 100%;
    padding: $inset-1-x;
  }

  .cdr-doc-article-layout__body-inner {
    margin: 0 auto;
    width: $cdr-doc-content-max-width;
  }
</style>
