<template>
  <div class="page cdr-doc-article-layout">
    <cdr-doc-intro :size="pageData.intro_size || 'small'" :title="pageData.title" :metadata="pageData.title_metadata" :breadcrumbs="pageData.breadcrumbs">
      {{ pageData.summary }}
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
    pageData () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens';
  @import '../theme/styles/cdr-doc-tokens';
  @import '../theme/styles/cdr-doc-mixins';
  
  .cdr-doc-article-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .cdr-doc-article-layout__body {
    flex: 1 0 100%;
    padding: $inset-1-x;
    padding-bottom: $cdr-doc-long-form-text-top-and-bottom-inset-space;
    padding-top: $cdr-doc-long-form-text-top-and-bottom-inset-space;
  }

  .cdr-doc-article-layout__body-inner {
    margin: 0 auto;
    width: $cdr-doc-content-max-width;
  }

  .cdr-doc-article-layout__body-inner .content {
    @include cdr-doc-long-form-text;
  }
</style>
