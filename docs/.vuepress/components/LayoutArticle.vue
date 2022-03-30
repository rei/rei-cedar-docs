<template>
  <div class="page cdr-doc-article-layout">
    <cdr-doc-intro
      :size="pageData.intro_size || 'small'"
      :title="pageData.title"
      :metadata="pageData.title_metadata"
      :breadcrumbs="pageData.breadcrumbs"
      :summary="pageData.summary ? pageData.summary : false" />
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

  .cdr-doc-article-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .cdr-doc-article-img {
    border: 1px solid $cdr-color-border-primary;
    border-radius:  $cdr-radius-softer;
  }

  .cdr-doc-article-layout__body {
    flex: 1 0 100%;
    padding: $cdr-space-inset-one-x;
    padding-bottom: $cdr-doc-long-form-text-top-and-bottom-inset-space;
    padding-top: $cdr-doc-long-form-text-top-and-bottom-inset-space;
  }

  .cdr-doc-article-layout__body-inner {
    margin: 0 auto;
    max-width: $cdr-doc-content-max-width;

      h2:is(:not(.cdr-doc-example-code-pair h2)) {
        @include cdr-text-heading-serif-strong-800;
      }
      h3:is(:not(.cdr-doc-example-code-pair h3)) {
        @include cdr-text-heading-sans-600;
      }
      h4:is(:not(.cdr-doc-example-code-pair h4)) {
        @include cdr-text-heading-sans-400;
      }
      h5:is(:not(.cdr-doc-example-code-pair h5)) {
        @include cdr-text-heading-sans-300;
      }
      h6:is(:not(.cdr-doc-example-code-pair h6)) {
        @include cdr-text-heading-sans-200;
      }
      p code, li code {
        background-color: $cdr-color-background-secondary;
        padding: 0.2rem;
      }
      
  }
</style>
